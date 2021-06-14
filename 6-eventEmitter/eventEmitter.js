let events = require('events');
let myEventEmitter = new events.EventEmitter();
myEventEmitter.on('someEvent',function (mess){
    console.log(mess);
});
myEventEmitter.emit('someEvent','Hello after event emitted');
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

