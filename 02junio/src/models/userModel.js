const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
  userName: String,
  password: String,
  apellido_paterno: String
});

module.exports = mongoose.model('User', userSchema);
