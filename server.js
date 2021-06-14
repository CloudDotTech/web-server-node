// const http=require('http');
//
// http.createServer(((req, res) => {
//
// })).listen(8080)


const http = require('http')
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer((req, res) => {

    if (req.url == '/') {
        req.url = 'index.html';
    }

    let urlParts = url.parse(req.url);

    fs.readFile(urlParts.pathname.substr(1), (err, data) => {
        if (err) {
            res.writeHead(402);
            res.end();
            return;
        }
        let headers = {'Content-Type': 'text/html'};

        // let fileExtension = path.extname(urlParts.pathname.substr(1));
        // switch (fileExtension) {
        //     case '.html':
        //         headers = {'Content-Type': 'text/html'};
        //         break
        //     case '.css':
        //         headers = {'Content-Type': 'text/css'};
        //         break
        //     case '.js':
        //         headers = {'Content-Type': 'text/javascript'};
        //         break
        //     case '.jpg':
        //         headers = {'Content-Type': 'jpeg'};
        //         break
        //     default:
        //         headers = {'Content-Type': 'application/octet-stream'}
        // }
        res.writeHead(200, headers);
        res.end(data);
    })
}).listen(8080);