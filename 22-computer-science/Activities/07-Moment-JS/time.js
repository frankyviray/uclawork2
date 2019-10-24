const moment = require("moment");

// benchmark getting the date from one week ago
console.time("moment");

console.log(moment().subtract(1, 'week').format("M/DD/YYYY"));

console.timeEnd("moment");

// benchmark getting last week's date with regular js date object
console.time("jsdate");

// er... how would we do that, though?

// reference https://www.w3schools.com/jsref/jsref_obj_date.asp for help

console.timeEnd("jsdate");