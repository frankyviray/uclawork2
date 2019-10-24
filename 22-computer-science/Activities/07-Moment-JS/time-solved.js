const moment = require("moment");

// benchmark getting the date from one week ago
console.time("moment");

console.log(moment().subtract(1, 'week').format("M/DD/YYYY"));

console.timeEnd("moment");

// benchmark getting last week's date with regular js date object
console.time("jsdate");

var d = new Date();
d.setDate(d.getDate() - 7);
console.log((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear());

console.timeEnd("jsdate");