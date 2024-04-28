const http = require("http");
const port = 3000;


const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write("Hello World");
        res.end();
    }
    if(req.url == '/courses') {
        res.write("List of courses");
        res.end();
    }
})

server.listen(port);
console.log(`Server is listening on port ${port}`) 