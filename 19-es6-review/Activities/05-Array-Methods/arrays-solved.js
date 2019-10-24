// convert the code below to use array methods instead of for loops

const princesses = [
  {name: 'Rapunzel', age: 18}, 
  {name: 'Mulan', age: 16},
  {name: 'Anna', age: 18}, 
  {name: 'Moana', age: 16}
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});

// create a new array of only the princess names from the existing array
// map: creates a new array with the results of calling a provided function on every element
const names = princesses.map(function(princess) {
  return princess.name;
});
console.log(names);

// create a new array that only contains princesses whose names begin with 'M'
// filter: creates a new array with elements that pass the test of the provided function
const mNames = princesses.filter(function(princess) {
  return princess.name.startsWith("M");
});
console.log(mNames);