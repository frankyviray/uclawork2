// no express here, just testing sequelize associations

var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
  console.log("db synced...");
});
