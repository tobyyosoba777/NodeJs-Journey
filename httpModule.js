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
    if (req.url === '/courses/free') {
        res.write("Free Courses section");
        res.end();
    }
    if (req.url === '/courses/paid') {
        res.write("Paid Courses section");
        res.end();
    }
})

server.listen(3000);
console.log("server is listening on port 3000");