const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb+srv://admin:admin@cluster0-qzdwl.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	password: String
	});

var user = mongoose.model('User', userSchema);

var myUser = user({
	userName: 'prueba',
	password: 'tres'
	})

myUser.save().then(user => {
	console.log('Todo ok');
}).catch(err =>{
	console.log('Algo salió mal ' + err);
});
