var Patient = require('../models/patient.js');

exports.createPatient = function() {
  // test data
  var entry = new Patient({
    name: 'John',
    age: 26,
    weight: 75,
    lifeStyle: 'seated',
    diet: [],
    diseases: [],
    allergies: []
  });

  entry.save();
};

exports.getSpecificPatient = function(id) {
  var query = Patient.findById(id)
    .exec(function err, doc) {
      if (err) {
        console.error(err);
      } else {
        return doc;
      }
    };
};

exports.getPatients = function() {
  var query = Patient.find()
    .exec(function(err, results) {
      if (err) {
        console.error(err);
      } else {
        return results;
      }
    });
};

exports.updatePatient = function(id, key, update) {
  Patient.findByIdAndUpdate(id, function(err, doc) {
    if (err) {
      console.error(err);
    } else {
      doc.key = update;
    }
  });
};

exports.removePatient = function(id) {
  Patient.findByIdAndRemove(id, function(err) {
    if (err) {
      console.error(err);
    }
  });
};
