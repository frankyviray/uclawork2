var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  leftJoin: function(tableOne, tableTwo, colOne, colTwo) {
    var queryString = "SELECT * FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.?? = tTwo.??";

    connection.query(queryString, [tableOne, tableTwo, colOne, colTwo], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
