let events = require('events');
let util = require('util');

let Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let morgan = new Person('Morgan');
let samara = new Person('Samara');
let loki = new Person('Loki');

let people = [morgan, samara, loki];

people.forEach(function (person) {
   person.on('drink',function (drinks) {
      console.log(person.name+' usually drinks, '+drinks);
   });
});
morgan.emit('drink','Coffee')
samara.emit('drink','Joyce')
loki.emit('drink','Tea')
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");