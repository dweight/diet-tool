var mongoose = require('mongoose');
var Schema = mongoose.Shema;

var DietSchema = new Schema({
  diet: [{day: Number, products: [Product]}]
  recipes: []
});

var Diet = mongoose.model('Diet', DietSchema);

module.exports = Diet;
