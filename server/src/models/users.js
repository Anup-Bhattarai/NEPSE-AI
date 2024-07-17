const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  phoneno: { type: Number, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;