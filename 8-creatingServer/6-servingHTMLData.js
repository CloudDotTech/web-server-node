const http = require('http');
const fs=require('fs');
const server = http.createServer((req, res) => {
    console.log('url:' + req.url +
        '    method:' + req.method +
        '   headers:' + req.headers);
    res.writeHead(200, {'Content-Type': 'text/html'});
    let readStream = fs.createReadStream('./lawfirm/index.html');
    readStream.pipe(res);
});
server.listen(8080);
console.log('Server running on port [8080]');