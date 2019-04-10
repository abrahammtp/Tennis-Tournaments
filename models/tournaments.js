// Here we are requiring the orm module from orm.js
var orm = require("../config/orm.js");

// These are going to be the orm's for displaying, creating and updating the tournaments
var tourney = {
    all: function(cb) {
      orm.all("tourneys", function(res) {
        cb(res);
      });
    },
    
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
  
  // Here we export the database functions for the controller tournaments_controllers.js
  module.exports = tourney;