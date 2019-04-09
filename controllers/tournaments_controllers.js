var express = require("express");

var router = express.Router();

var tourney = require("../models/tournaments.js");

// Create all our routes and set up logic within those routes where required.
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
        "name", "attended"
    ], [
            req.body.name, req.body.attended
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/tourneys/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    // return res.json({"change": req.body, "For_ID": req.params.id});

    tourney.update({
        attended: req.body.newAttendanceState
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).json(result);
        } else {
            res.status(200).json(result);
        }
    });
});

module.exports = router;