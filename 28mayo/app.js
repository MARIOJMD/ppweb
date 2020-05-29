const express = require('express');//Inyeccion de dependencia express
const bodyParser = require('body-parser');
const app = express();//App con la dependencia
const port = 3000;//Consatante que define el puerto de escucha
const url = "mongodb+srv://admin:admin@cluster0-qzdwl.mongodb.net/test?retryWrites=true&w=majority";
const mongoose = require('mongoose');//Dependencia de base de datos

var Schema = mongoose.Schema; 

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

mongoose.connect(url);

var userSchema = new Schema({//Modelo de la instancia
    userName: String,
    password: String
});


var user = mongoose.model('User', userSchema); //tambien iba adentro de lo de aqui abajo

app.post('/result', urlencodedParser, (req, res) => {
    //aqui iba user
    user.find({ userName: req.body.userName }, function (err, data) {

    if (err) {
        console.log('ocurrio un error');
    } else {
        if(data.length > 0){ 
            res.render('result', {data});   
        }else{
            res.send('No hay resultados con esos criterios de busqueda.');
        }
    }
});
});

/*app.post('/addResult', urlencodedParser, (req,res) =>{ //yo agregue esta cosa para agregar registros (urlencodePArser)
   
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName);
    console.log(password);

    var myUser = ({
        userName: userName, 
        password: password
    });

    /*myUser.save((err) =>{
        if(err){
            console.log('algo salio mal' + err);
        }else{
            console.log('todo ok');
        }
    });
    res.render(`addResult`);
});*/


app.use('/assets', express.static(__dirname + '/public'));//Mapeo del estilo referenciado como assets

app.set('view engine', 'ejs');

app.get('/personData', (req, res)=>{//ruta para busqueda de resultados
    res.render(`personData`);
});
app.get('/', (req, res) =>{ //agregue la ruta de index (nos redirigue a las opciones)
	res.render(`index`);
});
app.get('/add',(req, res) =>{ //agregue la ruta de add para agregar registros
    res.render(`add`);
    /*var userName = req.body.userName; //variables sacadas de add, a ver que rollo
    var password = req.body.password;*/
       
});

app.post('/addResult', urlencodedParser,(req, res) =>{ //agregue la ruta de addResult para para despues de agregar
    res.render(`addResult`);
    var userName = req.body.userName; //variables sacadas de add
    var password = req.body.password;
    console.log(userName);
    console.log(password);

    var myUser = user({
        userName: userName,
        password: password
    });

    myUser.save((err) => {
        if(err){
            console.log('algo salio mal' + err);
        }else{
            console.log('todo ok');
        }
    });
    
});


app.post('/personjson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});


app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
});

