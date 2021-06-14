const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url:' + req.url +
        '    method:' + req.method +
        '   headers:' + req.headers);
    res.writeHead(200, {'Content-Type': 'application/json'});
    let obj = {
        name: 'Some name',
        job: 'Full Stack Developer',
        salary: '21K'
    }
    res.end(JSON.stringify(obj));
});
server.listen(8080);
console.log('Server running on port [8080]');