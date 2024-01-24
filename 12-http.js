const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end("Welcome to home page");
    }
    if(req.url === '/') {
        res.end("Here is the short history")
    }
    res.end(
       
        `<a href="/">homepage</a>`)
})

server.listen(5000)