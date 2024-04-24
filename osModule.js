const path = require("path");
const os = require("os");

const pathObj = path.parse(__filename);
console.log(pathObj);


var totalMemory = os.totalmem();
var freeMemory = os.freemem();


//template string

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

