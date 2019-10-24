// convert the code below to use array methods instead of for loops

const princesses = [
  {name: 'Rapunzel', age: 18}, 
  {name: 'Mulan', age: 16},
  {name: 'Anna', age: 18}, 
  {name: 'Moana', age: 16}
];

// log the name of each princess, follow by a colon, followed by their age
// can be replaced with forEach
for (let i = 0; i < princesses.length; i++) {
  console.log(`${princesses[i].name}: ${princesses[i].age}`);
}

// hint: your code will look something like this:
// princesses.forEach(function(item) { });

// create a new array of only the princess names from the existing array
// can be replaced with map
let names = [];
for (let i = 0; i < princesses.length; i++) {
  names.push(princesses[i].name);
}
console.log(names);

// create a new array that only contains princesses whose names begin with 'M'
// can be replaced with filter
let mNames = [];
for (let i = 0; i < princesses.length; i++) {
  if (princesses[i].name.startsWith('M')) {
    mNames.push(princesses[i]);
  }
}
console.log(mNames);