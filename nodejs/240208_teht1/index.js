const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    
    if (req.url == "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('about page');
    } else if (req.url == "/contact") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('contact page');
    } else if (req.url == "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('main page');
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end('404');
    }
});

server.listen(3000);