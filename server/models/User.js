const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum : ['Admin', 'User'],
    default : 'User'
  },
  languages:{
    type:[String],
    required: true
  }
  ,
  progress: Number,
  gender:  {
    type: String,
    enum : ['M', 'F'],
  },
  age: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;