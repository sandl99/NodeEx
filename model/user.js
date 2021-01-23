const { Int32 } = require('mongodb');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: {
    type: Int32,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;