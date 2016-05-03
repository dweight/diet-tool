var mongoose = require('mongoose');
var Schema = mongoose.Shema;

var PatientSchema = new Schema({
  name: String,
  age: Number,
  weight: Number,
  lifeStyle: String,
  diet: [Diet],
  diseases: [],
  allergies: []
});

var Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
