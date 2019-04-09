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

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
}

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


module.exports = orm;

