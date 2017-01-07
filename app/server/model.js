var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  publicId: String
})

module.exports = mongoose.model('User', userSchema);
