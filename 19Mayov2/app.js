const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb+srv://admin:admin@cluster0-qzdwl.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	password: String
	});

var user = mongoose.model('User', userSchema);


const app = express();
const port = 3000;

app.get('/data', (req,res) =>{
	user.find({ userName: 'prueba'}, function(err, data){
		if(err){
			console.log('Ocurrio un error');
		}else{
			res.send(data);
		}
});
});

app.listen(port, () =>{
  console.log(`Escuchando en el puerto ${port}`);
})




