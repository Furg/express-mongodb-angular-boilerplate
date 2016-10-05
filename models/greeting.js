var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var greetingSchema = new Schema({
  message: String
});

var Greeting = mongoose.model('Greeting', greetingSchema);

module.exports = Greeting;
