const http = require("http");
const port = 3000;

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

server.listen(port);
console.log(`Server is listening on port ${port}`); 