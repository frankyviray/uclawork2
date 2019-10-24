var connection = require("./connection.js");

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
  },
  groupBy: function(tableName, groupBy) {
    var queryString = "SELECT ??, COUNT(*) AS count FROM ?? GROUP BY ?? ORDER BY COUNT(*) DESC";

    connection.query(queryString, [groupBy, tableName, groupBy], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
