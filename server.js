const http = require("http");

const port = 8081;

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h4>Hello World!</h4>");
    res.write("<h6>Hey we got our server...</h6>");
    res.end();
}).listen(port, () => {
    console.log(`NodeJS server started running on port ${port}`);
})
