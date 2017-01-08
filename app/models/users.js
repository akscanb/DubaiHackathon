var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  publicId: String,
  monthlyWattage: Number,
  subsidy: Number,
  citizenship: Boolean
})

module.exports = mongoose.model('User', userSchema);
