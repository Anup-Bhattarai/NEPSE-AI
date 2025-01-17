const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: { 
    type: String
  },
  email: { 
    type: String
  },
  phoneNo: { 
    type: String
  },
  gender: {
    
    enum: ['Male', 'Female', 'Others'],
  },
  role: {
    
  enum: ['User', 'Admin'],
  },
  password: { 
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
