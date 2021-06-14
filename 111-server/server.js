const http = require('http');

http.createServer(function (req, res) {
    res.end('server up');
}).listen(8080)