var orm = require("../config/orm.js");

var tourney = {
    all: function(cb) {
      orm.all("tourneys", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("tourneys", cols, vals, function(res) {
        cb(res);
      });    
    },
    update: function(objColVals, condition, cb) {
      orm.update("tourneys", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (tournaments_controllers.js).
  module.exports = tourney;