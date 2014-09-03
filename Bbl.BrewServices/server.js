var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    req.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World and such!\n');
}).listen(port);