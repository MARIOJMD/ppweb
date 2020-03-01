'use strict';

var util = require('util');
var EventEmitter = require('events');

class Person{
  constructor(){
  this.firstName = 'John';
  this.lastName = "Doe";
  }
  greet(){
    console.log(`Hola ${this.firstName} ${this.lastName}`);
  }
}
 class Policeman extends Person{
   constructor(){
   super();
   this.numeroPlaca = '1234';
  }
  policeInfo(){
    console.log(`Hello, your badgeNumber is: ${this.numeroPlaca}`)
  }
 }
var policeman = new Policeman();
policeman.greet();
policeman.policeInfo();
