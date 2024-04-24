const fs = require("fs");

const files = fs.readdirSync('./');
console.log(files)


const filesAsync = fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log("Result", files)
});
console.log(filesAsync);

filesRead = fs.readdir('./', function(err, files) {
    if(err) console.log("Error", err);
    else console.log("Files", files)
})