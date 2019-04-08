// Set up MySQL connection.
var mysql = require("mysql");

var connection;

var connection = mysql.createConnection({
  host: "j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rahj3yoj7lwhafkf",
  password: "e2vpy5otf97ob0z2",
  database: "lm3a6nalp1bqhjpa"
});

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'rahj3yoj7lwhafkf',
//         password: 'e2vpy5otf97ob0z2',
//         database: 'lm3a6nalp1bqhjpa'
//     });
// };

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
