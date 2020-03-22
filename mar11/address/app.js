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

  const url = 'https://api.darksky.net/forecast/f9027dd170726ab26f9d6d0f99a467fb/19.2433,-103.725?lang=es';

  request({url, json: true}, (error, response) => { //temperatura
    let temperatura = response.body.currently.temperature;
    var conv = fahrenheitToCelsius(temperatura); //variable de temperatura convertida

    let lat = 38.892062;
    let lng = -77.019912;

    //const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=jl0OmsQSqbVHpMA2Px4oOtq5Luy5N6vn&location=Washington,DC';
    //const url = 'https://www.mapquestapi.com/geocoding/v1/address?key=jl0OmsQSqbVHpMA2Px4oOtq5Luy5N6vn&inFormat=kvp&outFormat=json&location=Denver%2C+CO&thumbMaps=false';
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=jl0OmsQSqbVHpMA2Px4oOtq5Luy5N6vn&outFormat=json';

    request({url, json: true}, (error,response ) =>{ //mapquest api
      //var loc = response.body.results;
      var loc = response.body.results[0].locations[0];
      console.log(loc);

    //console.log(`${responseB.name} vive en la calle ${calle} y esta a ${conv} grados centigrados.`); //${conv}
  });




  });


//console.log(`${responseB.name}`);
  //console.log(`${responseB.name} vive en la calle ${address[dirRandom].address.street}`)

});
 //de aqui para abajo se puede poner feo
