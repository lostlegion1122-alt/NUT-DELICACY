from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import sys

class FastStaticServer(SimpleHTTPRequestHandler):
    def end_headers(self):
        path = self.path.lower()
        if path.endswith('.html') or path == '/' or path.endswith('/'):
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
        else:
            # Cache static assets for maximum mobile performance and zero lag
            self.send_header('Cache-Control', 'public, max-age=604800, immutable')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 80
    try:
        server = ThreadingHTTPServer(('0.0.0.0', port), FastStaticServer)
        url = "http://localhost/" if port == 80 else f"http://localhost:{port}/"
        print(f'Fast static server running at {url} (Port {port})...')
        server.serve_forever()
    except (PermissionError, OSError) as e:
        fallback_port = 8080 if port != 8080 else 8000
        print(f'Port {port} unavailable ({e}). Trying fallback port {fallback_port}...')
        server = ThreadingHTTPServer(('0.0.0.0', fallback_port), FastStaticServer)
        print(f'Fast static server running at http://localhost:{fallback_port}/...')
        server.serve_forever()
