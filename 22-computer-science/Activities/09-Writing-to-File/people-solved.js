const fs = require("fs");
const people = require("./people.json"); // import people data

console.time("people");

// start an empty string
var txt = "";

for (let i = 0; i < people.length; i++) {
  // append each line to the txt string, NOT the file
  txt += `${people[i].name.first} ${people[i].name.last}\n`;
}

// write to the file all at once to save time
fs.writeFileSync("names.txt", txt);

console.timeEnd("people");