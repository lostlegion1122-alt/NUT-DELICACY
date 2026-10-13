from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import sys
import socket

class SiteServer(ThreadingHTTPServer):
    request_queue_size = 128
    daemon_threads = True
    allow_reuse_address = True

    def handle_error(self, request, client_address):
        # Gracefully ignore client-side disconnects/aborts
        exc_type, _, _ = sys.exc_info()
        if exc_type and issubclass(exc_type, (ConnectionResetError, ConnectionAbortedError, BrokenPipeError, ConnectionError)):
            return
        super().handle_error(request, client_address)

class FastStaticServer(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Force no-cache across all files (JS, CSS, HTML) so browsers never serve stale cache
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError, ConnectionError):
            pass

    def handle(self):
        try:
            super().handle()
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError, ConnectionError):
            pass

    def finish(self):
        try:
            super().finish()
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError, ConnectionError):
            pass

    def log_message(self, format, *args):
        # Concise logging to keep server ultra fast
        pass

def run_server(port=5500):
    try:
        server = SiteServer(('0.0.0.0', port), FastStaticServer)
        actual_port = port
    except OSError:
        actual_port = 3000
        server = SiteServer(('0.0.0.0', actual_port), FastStaticServer)

    print(f'Server running at http://localhost:{actual_port}/ (Port {actual_port})')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
    run_server(port)
