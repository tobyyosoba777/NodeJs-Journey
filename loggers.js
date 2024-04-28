const { v4: uuid } = require("uuid");
const { randomUUID } = require("crypto");
const eventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends eventEmitter {
    log(message) {
        //Send an HTTP Request
        console.log(message)

    //Raise an Event
    this.emit('MessageLogged', { id: 22, messageID: uuid(), errorId: randomUUID()})
    }
}


module.exports = Logger;