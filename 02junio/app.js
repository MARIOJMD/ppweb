const express = require('express');//Inyeccion de dependencia express
const bodyParser = require('body-parser');
const app = express();//App con la dependencia
const port = 3000;//Consatante que define el puerto de escucha

const routes = require('./src/routes');
require('./src/db/connection');
 

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));//Mapeo del estilo referenciado como assetsI
app.set('view engine', 'ejs');
app.use('/', routes);



app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
});
