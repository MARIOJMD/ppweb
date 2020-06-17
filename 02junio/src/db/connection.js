const mongoose = require('mongoose');
const url = "mongodb+srv://admin:admin@cluster0-qzdwl.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url)
  .then(function (db) { // <- db as first argument
  console.log('connected');
})
  .catch(function (err) {
  console.log('algo salio mal');
}); 
