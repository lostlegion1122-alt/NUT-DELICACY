from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import sys

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    port = 3000
    server = ThreadingHTTPServer(('0.0.0.0', port), NoCacheHandler)
    print(f'Multi-threaded Server running on port {port} with no-cache headers...')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
