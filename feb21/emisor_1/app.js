var Emitter = require('./emitter'); //hacemos un require para el modulo

var emtr = new Emitter(); //declaramos una variable para el require

emtr.on('greet', function(){
  console.log('Somewhere, someone said hello.');
});//llamamos al modulo con uno de sus prototipos

emtr.on('greet', function(){
  console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');
