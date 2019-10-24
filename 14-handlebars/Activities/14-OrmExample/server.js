var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("pets", "animal_name", "Rachel");

// Find all the buyers and order by name
orm.selectAndOrder("*", "buyers", "buyer_name");

// Find a buyer in the buyers table by a buyer_name of Kevon.
orm.selectWhere("buyers", "buyer_name", "Kevon");

// Find pet and buyer pairs by joining on buyer_id
orm.leftJoin("pets", "buyers", "buyer_id", "id");
