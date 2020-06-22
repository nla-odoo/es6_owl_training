#!/usr/bin/env python3

import threading
import time

from http.server import SimpleHTTPRequestHandler, HTTPServer

def start_server():
    SimpleHTTPRequestHandler.extensions_map['.js'] = 'application/javascript'
    httpd = HTTPServer(('0.0.0.0', 3800), SimpleHTTPRequestHandler)
    httpd.serve_forever()

if __name__ == "__main__":
    print("Owl Application")
    print("---------------")
    print("Server running on: {}".format('http://127.0.0.1:3800/'))
    threading.Thread(target=start_server, daemon=True).start()

    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            httpd.server_close()
            quit(0)
