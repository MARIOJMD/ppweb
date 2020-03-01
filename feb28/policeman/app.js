var util = require('util');//require para heredar

function Person(){//Definicion de una funcion clase Person
    this.firstName = 'Jhon';//Primer atributo de la clase
    this.lastName = 'Doe';//Segundo atributo de la clase
}

Person.prototype.greet = function(){//Prototipo de la clase Person que agrega el metodo greet
    console.log(`Hello ${this.firstName} ${this.lastName}`);//Desplique del contenido en la consola
}

function Policeman(){//Definicion de una funcion clase Policeman
    Person.call(this);//Invoca al constructor de la clase para que Police tenga disponible todo lo de la clase Person
    this.badgeNumber = '12345';//Primer atributo de la clase
}

Policeman.prototype.nPoliceman = function(){//Se creo el prototipo de la clase Policeman heredada con la funcion nPoliceman
    console.log(`The number of badge of this policeman is ${this.badgeNumber}`);//Despliegue del conteido de la funcion nPoliceman
}

util.inherits(Policeman, Person);//Herencia de los atributos de Person en la clase Policeman
var officer = new Policeman();//Creamos un nuevo objeto de la clase heredada Police
officer.greet();//Utilizamos el metodo greet definito en el prototipo de person
officer.nPoliceman();//Llamado a la funcion del numero de policia
