function Greetr(){
  this.greeting = 'Hello world!!';
  this.greet = function(){
    console.log(this.greeting);
  }
}
module.exports = Greetr;
//parecido al greet3, pero sin poner el 'new'(lo tendre que poner en algun momento).
