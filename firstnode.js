var http = require('http');
const { url } = require('inspector');

http.createServer(function (req, res)
{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);