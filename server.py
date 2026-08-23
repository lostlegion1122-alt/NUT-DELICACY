from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import sys
import socket

class FastStaticServer(SimpleHTTPRequestHandler):
    def end_headers(self):
        path = self.path.lower()
        if path.endswith('.html') or path == '/' or path.endswith('/'):
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
        else:
            self.send_header('Cache-Control', 'public, max-age=604800, immutable')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Concise logging to keep server ultra fast
        pass

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
    ThreadingHTTPServer.allow_reuse_address = True
    try:
        server = ThreadingHTTPServer(('0.0.0.0', port), FastStaticServer)
        print(f'Server running at http://localhost:{port}/ (Port {port})')
        sys.stdout.flush()
        server.serve_forever()
    except Exception as e:
        alt_port = 3000
        server = ThreadingHTTPServer(('0.0.0.0', alt_port), FastStaticServer)
        print(f'Port {port} busy, running on http://localhost:{alt_port}/')
        sys.stdout.flush()
        server.serve_forever()

