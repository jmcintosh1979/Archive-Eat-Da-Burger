// Importing the connection for MySQL
const connection = require('../config/connection')

const orm ={
  selectAll: function(db_table, cb) {
    let queryString = 'SELECT * FROM ' + db_table + ';'
    console.log('Select All: ' + queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  },

  insertOne: function(db_table, db_burger, db_devoured, cb) {
    let queryString = 
        'INSERT INTO ' + db_table + ' (' + db_burger.toString() + ',' + db_devoured + ') ' + 
        'VALUES (' + db_burger + ','+ db_devoured + ')'
    console.log('Insert One: ' + queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  },
  updateOne: function(db_table, db_burger, db_devoured, cb) {
    let queryString = 'UPDATE ' + db_table + ' SET ' + db_burger + ' WHERE ' + db_devoured
    console.log('Update One: ' + queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  }
}



module.exports = orm;