const request = require('request');
const randomNum = require('random-num')
let random = randomNum(1,88) // Random Number from 1 to 100https://api.darksky.net/forecast/f9027dd170726ab26f9d6d0f99a467fb/37.8267,-122.4233

const address = require('./addrs');
var dirRandom = (0, 19);
var calle = address[dirRandom].address.street;
//console.log(calle);

const url = 'https://swapi.co/api/people/'+random+'/';
request({url, json: true}, (error, response) => {//nombre random
  var responseB = response.body;

  var fahrenheitToCelsius = require('fahrenheit-to-celsius'); //inyeccion de dependencia de convertidor

  const url = 'https://api.darkskyl.net/forecast/f9027dd170726ab26f9d6d0f99a467fb/19.2433,-103.725?lang=es';

  request({url, json: true}, (error, response) => { //temperatura
    var temperatura = response.body.currently.temperature;
    var conv=fahrenheitToCelsius(temperatura);

    const url = 'http://open.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC'

    request({url, json: true}, (error,response ) =>{ //maquest api
      //var location = respons.body;//
      //console.log (location);
      console.log(`${responseB.name} vive en la calle ${calle} y esta a ${conv}`);
    })




  });


//console.log(`${responseB.name}`);
  //console.log(`${responseB.name} vive en la calle ${address[dirRandom].address.street}`)

});
 //de aqui para abajo se puede poner feo
