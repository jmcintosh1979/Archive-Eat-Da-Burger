// Setting up connection to the MySQL DB
const mysql = require("mysql"),
      connection = mysql.createConnection(process.env.JAWSDB_URL)
      //   {
      //   host: "localhost",
      //   port: 3306,
      //   user: "root",  
      //   password: "root",
      //   database: "burgers_db"
      // });

// Establishing connection to DB
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//Export connection for ORM to use
module.exports = connection;