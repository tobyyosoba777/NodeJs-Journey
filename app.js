const logger = require("./logger");
const nameDisplay = require("./logger");
const add = require("./logger");
const subtract = require("./logger");
const multiply = require("./logger");
const expo = require("./logger");
const emit = require("./logger");

logger.log("Hello world");

nameDisplay.nameD("tobiloba");
add.add(20, 40);

subtract.subtract(70, 50)
multiply.multiply(20, 20)
expo.expon(20, 3)



const eventEmitter = require("events");



const Logger = require('./loggers')
const loggers = new Logger();

loggers.on('MessageLogged', (arg) => {
    console.log('Listener Called', arg);
});

loggers.log('message');