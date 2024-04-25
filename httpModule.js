const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello world')
        res.end()
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([{course_1: "Mosh javascript course", course_2: "Web Dev simplified react course"}]))
        res.end()
    }
})

server.listen(3000);

console.log("server is listening in port 3000");