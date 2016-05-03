var mongoose = require('mongoose');
var Schema = mongoose.Shema;

var ProductSchema = new Schema({
  name: String,
  nutrients: {
    kcal: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
    saturated: Number,
    unsaturated: Number,
    natrium: Number,
    kalium: Number,
    calcium: Number,
    magnesium: Number,
    ferrum: Number,
    glycemicIndex: Number
  },
  description: String,
  quantity: {type: Number, default: 0}
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
