const { randomUUID } = require("crypto");
const { v4: uuid } = require("uuid");
const EventEmmiter = require("events");

const emmiter = new EventEmmiter();

emmiter.on("MessageLogged", function(e) {
    console.log("Listener Called", e);
});

emmiter.on("Message", (e) => {
    console.log("Listener Fired", e);
})

let i = 1
emmiter.emit("MessageLogged", { id: i++, url:"https://google.com", ErrorId: randomUUID(), realErrorId: uuid()})
emmiter.emit("Message", { id: 2, 
    ErrorId: randomUUID(), 
    MainID: uuid()}) 