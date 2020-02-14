function Greetr(){
  this.greeting = 'Helo world!';
  this.greet = function(){
    console.log(this.greeting);
  }
}
module.exports = new Greetr();
//declaración de una clase con notación de función, un atributo de saludo, un atributo funcion para llamar el saludo
//y exportacion fuera de la clase.
