const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let readStream;
    console.log(req.url)
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        readStream = fs.createReadStream('./content/index.html');
        readStream.pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        readStream = fs.createReadStream('./content/contact.html');
        readStream.pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let obj = [{
            name: 'Some name', job: 'Full Stack Developer', salary: '21K'
        }, {
            name: 'Some name', job: 'Full Stack Developer', salary: '21K'
        }]
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        let obj = {
            error: 'error'
        }
        res.end(JSON.stringify(obj));
    }
});
server.listen(8080);
console.log('Server running on port [8080]');
