// We require express for our routes
var express = require("express");

var router = express.Router();
// Here we require the tourney module from models/tournaments.js
var tourney = require("../models/tournaments.js");

// The routes for get (display), post (create) and put (update) are created
router.get("/", function (req, res) {
    tourney.all(function (data) {
        var hbsObject = {
            tourneys: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tourneys", function (req, res) {
    tourney.create([
        "name"
    ], [
            req.body.name
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/tourneys/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    tourney.update({
        attended: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, that means the ID does not exist so we throw a 404 error
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Here we export the routers to be used by server.js
module.exports = router;