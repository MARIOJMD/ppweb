
const express = require('express')
const router = express.Router();

const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

  const userSchema = new Schema({
userName: String,
password: String
}); 

  router.get('/', (req, res) => {
    res.render('index');
}); 

router.get('/result', function (req, res) {
let user = mongoose.model('User', userSchema);
  user.find({})
  .exec()
  .then((data)=>{
    res.render('result',{data});
  })
    .catch((err)=>{
      res.send('Algo salió mal');
    });
}); 
module.exports = router; 

