// Here we require the connection to our databases from connection.js
var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

// These are going to be the orm's for displaying, creating and updating the data in our database
    var orm = {
        all: function (tableInput, cb) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        create: function (table, cols, vals, cb) {
            var queryString = "INSERT INTO " + table;

            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";

            console.log(queryString);

            connection.query(queryString, vals, function (err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        },

        update: function (table, objColVals, attended, cb) {
            console.log(objColVals);
            var queryString = "UPDATE " + table;

            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += attended;

            console.log(queryString);
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        },
    };

// We export the module orm to be used by models/tournaments.js
module.exports = orm;

