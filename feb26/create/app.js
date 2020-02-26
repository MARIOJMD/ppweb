var person = {
  firstname: '',
  lastname: '',
  greet: function(){
    return this.firstname + ' ' + this.lastname;
  }
}//objeto literal

var john = Object.create(person); //object.create usa un objeto literal para objeto
john.firstname = 'John'; //llebado de datos
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());//console log para ver los datos llenados
console.log(jane.greet());
