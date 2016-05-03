var Product = require('../models/product.js');

exports.createProduct = function() {
  // test data
  var entry = new Product({
    name: 'Lettuce',
    nutrients: {
      kcal: 24,
      proteins: 5,
      carbohydrates: 25,
      fats: 1,
      saturated: 3,
      unsaturated: 5,
      natrium: 10,
      kalium: 34,
      calcium: 5,
      magnesium: 5,
      ferrum: 1,
      glycemicIndex: 2
    },
    description: 'Green Lettuce',
    quantity: 0
  });

  entry.save();
};

exports.getSpecificProduct = function(id) {
  var query = Product.findById(id)
    .exec(function err, doc) {
      if (err) {
        console.error(err);
      } else {
        return doc;
      }
    };
};

exports.getProducts = function() {
  var query = Product.find()
    .exec(function(err, results) {
      if (err) {
        console.error(err);
      } else {
        return results;
      }
    });
};

exports.updateProduct = function(id, key, update) {
  Product.findByIdAndUpdate(id, function(err, doc) {
    if (err) {
      console.error(err);
    } else {
      doc.key = update;
    }
  });
};

exports.removeProduct = function(id) {
  Product.findByIdAndRemove(id, function(err) {
    if (err) {
      console.error(err);
    }
  });
};
