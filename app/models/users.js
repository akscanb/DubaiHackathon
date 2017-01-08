var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  publicId: String,
  energyCredit: Number,
  subsidy: Number,
  citizenship: Boolean,
  monthlyUsage: Number
})

module.exports = mongoose.model('User', userSchema);
