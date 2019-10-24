const fs = require("fs");
const people = require("./people.json"); // import people data

// benchmark writing each person's name to a text file
console.time("people");

for (let i = 0; i < people.length; i++) {
  // normally, we would not force synchronous behavior here, but it helps illustrate just how long this process takes
  fs.appendFileSync("names.txt", `${people[i].name.first} ${people[i].name.last}\n`);
}

console.timeEnd("people");

// PROBLEM: how could we refactor this code to make it more efficient, assuming that we cannot switch to appendFile() to return to asynchronous behavior?