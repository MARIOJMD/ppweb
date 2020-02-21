var Emitter = require('events'); //hacemos un require para el modulo
var eventConfig = require('./config').events;

var emtr = new Emitter(); //declaramos una variable para el require

emtr.on(eventConfig.GREET, function(){
  console.log('Somewhere, someone said hello.');
});//llamamos al modulo con uno de sus prototipos

emtr.on(eventConfig.GREET, function(){//cambiamos el greet por un objeto de configuración para evitar errores
  console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');
