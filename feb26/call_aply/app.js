var obj = {
  name: 'John Doe',
  greet: function(param){//le pongo un parametro
    console.log(`Hello ${this.name} ${param}`);//le digo que lo imprima
  }
}//objeto constuctor

var param = 'Param1';//declaro el parametro param

obj.greet(param); //llamada al objeto
obj.greet.call({name:'Jane Doe'}, param); //llamada con call, esto sobreescribe los datos de la funcion del object literal
                                  //mantiene los valores originales, pero cuando lo llamas agrega datos nuevos
                                  //aqui le paso el parametro en el call
obj.greet.apply({name: 'Jane Doe'},[param]); //nos sustituye con el name como un this y los corchetes como
                                            //parametro y cierras parentesis, le llega el parametro y lo muestra
