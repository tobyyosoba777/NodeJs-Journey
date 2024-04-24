const { randomUUID } = require("crypto");
const EventEmitter = require("events");
const emmitter = new EventEmitter();

function emitterFunction() {
    emmitter.on("MessageLogged", (e) => {
        console.log('Listener Boosted', e)
    })
};

emmitter.emit("MessageLogged", { Id: 21, RandomId: randomUUID()});

module.exports.emit = emitterFunction;

console.log(__dirname)
console.log(__filename)

var url = "http://mylogger.io/log";

function log(message) {
    //Send an HTTP Request
    console.log(message);
}

function displayName(name) {
    console.log("The name is " + name);
}

function addNumber(a, b) {
    console.log(a+b)
}

function deleteNumber(a, b) {
    if (a > b) {
        console.log(a - b);
    }
    else if(b > a) {
        console.log(b - a);
    }
}

function multiply(a, b) {
    console.log(a * b)
}

function exponential(a, b) {
    result = a**b;
    console.log(result)
}

module.exports.log = log;
module.exports.nameD = displayName;
module.exports.add = addNumber;
module.exports.subtract = deleteNumber;
module.exports.multiply = multiply;
module.exports.expon = exponential;
