/*var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function(){
    console.log('hello, ' + this.firstname + ' ' + this.lastname);
  }
};
person.greet();
console.log(person['firstname']);*/

var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function(){
    console.log(`hello, ${this.firstname} ${this.lastname}`);
  }
};
person.greet();
console.log(person['firstname']);
