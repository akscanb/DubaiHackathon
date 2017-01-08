var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  publicId: String,
  energyCredit: Number,
  subsidy: Number,
  citizenship: Boolean,
  montlyUsage: Number
})

module.exports = mongoose.model('User', userSchema);
