const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  phoneNo: { type: String, required: true },
  gender: {
    type: String,
    enum : ['Male', 'Female', 'Others'],
    required: true
  },
  role: {
    type: String,
    enum : ['User', 'Admin'],
    required: true
  },
  password: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
