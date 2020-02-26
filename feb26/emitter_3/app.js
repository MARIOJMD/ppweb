var EventEmitter = require('events'); //require a modulos de javascript y node
var util = require('util'); //lo mismo de arriba

function Greetr(){
  this.greeting = 'Hello World!'; //creación del saludo
}

util.inherits(Greetr, EventEmitter); //herencia

Greetr.prototype.greet = function(data){
  console.log(this.greeting + ': ' + data); //imprio lo que hay en greetig
  this.emit('greet', data);
}

var greeter1 = new Greetr(); //creo un nuevo Greetr

greeter1.on('greet', function(data){ //el metodo on es como si fuera un push(si vieramos los emisores como un array).
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony'); //se llama
