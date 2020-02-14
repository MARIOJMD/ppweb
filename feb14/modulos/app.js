var greet = require('./greet');
greet();//regresa la funcion de un modulo


var greet2 = require('./greet2').greet;
greet2(); //se accede a solo una parte del modulo(en caso de que sea muy grande).

var greet3 = require('./greet3');
greet3.greet(); //accedo al greet con notacion del punto(para acceder a los atributos de una clase). regresa la instania de un objeto
greet3.greeting = 'Changed hello world'; //cambiando cualidades del greeting, afecta a todo debajo.

var greet3b = require('./greet3');
greet3b.greet();//doble require en un mismo modulo, modificacado con el greet de arriba.

var Greet4 = require('./greet4');
var grtr = new Greet4();//declaración del 'new' que no declare en el greet4 es declarado aquí.
grtr.greet();
