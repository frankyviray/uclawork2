var orm = require("./config/orm.js");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.leftJoin("clients", "parties", "id", "client_id");

// Console log the parties, grouped by their party type
orm.groupBy("parties", "party_type");
