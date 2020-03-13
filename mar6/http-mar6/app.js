const request = require('request');
var fahrenheitToCelsius = require('fahrenheit-to-celsius'); //inyeccion de dependencia de convertidor

const url = 'https://api.darksky.net/forecast/f9027dd170726ab26f9d6d0f99a467fb/19.2433,-103.725?lang=es';

request({url, json: true}, (error, response) => { //el primero es un object literal y un callback
  console.log(`Hoy estará ${response.body.daily.data[0].summary}`);
  //const data = JSON.parse(response.body); //hago el parse para que se vea mas bonito si lo parseo desde request
  //esto no hace falta
  //console.log(response.body.currently.temperature);
  let temperatura = response.body.currently.temperature; //en lugar de console.log, lo declaro como variable
  console.log(fahrenheitToCelsius(temperatura)); //imprimo console.log para imprimir el fahrenheitToCelsius y le mando
  //variable en donde meto los datos de la temperatura
});
//si tengo un key value pairs con el mismo nombre, se puede dejar un solo nombre
