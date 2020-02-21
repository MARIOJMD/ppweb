function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}//esto se llama function constructure

Person.prototype.greet = function (){
  console.log(`Hello, ${this.firstname} ${this.lastname}`);
} //modificamos con un prototipo y hacemos un saludo

var john = new Person('John', 'Doe');
john.greet(); //creamos una persona con ciertos datos y llamamos al saludo
//console.log(john.firstname);

var jane = new Person('Jane', 'Doe');
jane.greet();
