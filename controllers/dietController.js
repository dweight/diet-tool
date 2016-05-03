var Diet = require('../models/diet.js');

exports.createDiet = function() {
  // test data
  var entry = new Diet({
    diet: [{day: 1, products: []}]
    recipes: []
  });

  entry.save();
};

exports.getSpecificDiet = function(id) {
  var query = Diet.findById(id)
    .exec(function err, doc) {
      if (err) {
        console.error(err);
      } else {
        return doc;
      }
    };
};

exports.getDiets = function() {
  var query = Diet.find()
    .exec(function(err, results) {
      if (err) {
        console.error(err);
      } else {
        return results;
      }
    });
};

exports.updateDiet = function(id, key, update) {
  Diet.findByIdAndUpdate(id, function(err, doc) {
    if (err) {
      console.error(err);
    } else {
      doc.key = update;
    }
  });
};

exports.removeDiet = function(id) {
  Diet.findByIdAndRemove(id, function(err) {
    if (err) {
      console.error(err);
    }
  });
};
