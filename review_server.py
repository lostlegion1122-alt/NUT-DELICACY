"""Client review server. Serves public site files only; prevents preview indexing."""
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote,urlsplit
import argparse

ROOT=Path(__file__).resolve().parent
PUBLIC_DIRS={'assets','blog','shop','mockups','combo','videos'}
PUBLIC_SUFFIXES={'.html','.css','.js','.xml','.txt','.webp','.png','.jpg','.jpeg','.avif','.ico','.woff','.woff2','.mp4','.svg'}

class ReviewServer(ThreadingHTTPServer):
    request_queue_size=128
    daemon_threads=True

class ReviewHandler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT),**kwargs)
    def do_GET(self):
        if not self.prepare_path():return
        if urlsplit(self.path).path=='/robots.txt':
            content=b'User-agent: *\nDisallow: /\n'
            self.send_response(200);self.send_header('Content-Type','text/plain; charset=utf-8');self.send_header('Content-Length',str(len(content)));self.end_headers();self.wfile.write(content);return
        super().do_GET()
    def do_HEAD(self):
        if self.prepare_path():super().do_HEAD()
    def prepare_path(self):
        path=unquote(urlsplit(self.path).path)
        if path=='/':path='/index.html'
        target=(ROOT/path.lstrip('/')).resolve()
        if not target.is_relative_to(ROOT):self.send_error(404);return False
        parts=target.relative_to(ROOT).parts
        if any(part.startswith('.') for part in parts) or (len(parts)>1 and parts[0] not in PUBLIC_DIRS):self.send_error(404);return False
        if not target.suffix and target.with_suffix('.html').is_file():target=target.with_suffix('.html')
        if not target.is_file() or target.suffix.lower() not in PUBLIC_SUFFIXES:self.send_error(404);return False
        self.path='/'+target.relative_to(ROOT).as_posix();return True
    def list_directory(self,path):self.send_error(404);return None
    def end_headers(self):
        self.send_header('X-Robots-Tag','noindex, nofollow, noarchive')
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Referrer-Policy','strict-origin-when-cross-origin')
        suffix=Path(urlsplit(self.path).path).suffix
        self.send_header('Cache-Control','no-cache' if suffix in {'.html','.js','.css','.txt','.xml'} else 'public, max-age=86400')
        super().end_headers()
    def log_message(self,*args):pass

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=5520);args=parser.parse_args()
    server=ReviewServer(('127.0.0.1',args.port),ReviewHandler)
    print(f'Client review server: http://127.0.0.1:{args.port}',flush=True)
    server.serve_forever()
