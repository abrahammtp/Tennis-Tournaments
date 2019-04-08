var orm = require("../config/orm.js");

var tourney = {
    all: function(cb) {
      orm.all("tournaments", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("tournaments", cols, vals, function(res) {
        cb(res);
      });    
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = tourney;