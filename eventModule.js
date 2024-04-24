const EventEmiiter = require('events');
const { v4: uuid } = require("uuid")
const emmiter = new EventEmiiter();

//Register a listener
emmiter.on('messageLogged', function() {
    console.log('Listener called')
})

//Emit means to signal or make a noise that something has happened 

//Raise an event
emmiter.emit('messageLogged')

const eventEmitter = require("events");
const emmitter = new eventEmitter()

emmitter.on("MessageLogged", function(e) {
    console.log("Listener called", e);
})

emmitter.emit("MessageLogged", { id: 1, url: "https://", errorId: uuid()})