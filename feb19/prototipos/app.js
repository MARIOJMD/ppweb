//object properties and methods
var obj = {
  greet: 'Hello',
  onEnter: function(){
    console.log('hola');
  }
} //object literal con una dos keys, un saludo y una funcion que será invocada más tarde

//recordamos que podemos acceder de varias formas
console.log(obj.greet);//operador del punto
console.log(obj['greet']); //acceder mediante brackets y comillas simples el nombre de la key
var prop = 'greet'; //podemos acceder con una variable con el nombre de la key
console.log(obj[prop]);//debemos usar los brackets y el nombre de la key

var saludo = 'onEnter';//declaro variable de saludo
obj[saludo]();//aqui llamo el objeto y busco la variable para que entre al objeto

//functions and arrays
//podemos agregar objetos, strings, numeros, funciones, etc. en un array.
var arr = [];//declaro el arrays

arr.push(function() {
  console.log('Hello world 1');
});//hacemos un push de una funcion con un console.log con un string.
arr.push(function() {
  console.log('Hello world 2');
});
arr.push(function() {
  console.log('Hello world 3');
});//agregamos varias funciones y tenemos un vector/array en donde los elementos son funciones

arr.forEach(function(item){
  item();
}); //iteramos el vector para que nos dé todos los elementos
