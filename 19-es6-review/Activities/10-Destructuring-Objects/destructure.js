var luke = { occupation: "Jedi", father: "Anakin" };

// ES5
var occupation = luke.occupation; // Jedi
var father = luke.father; // Anakin

// ES6 - destructuring
var { occupation, father } = luke;

console.log(occupation); // Jedi
console.log(father); // Anakin

// we can do this with modules, too
var {spawn, exec, fork} = require("child_process");

// don't worry about what these child_process functions do. this is just an example of pulling properties off of a module and saving them in separate variables.
console.log(spawn, exec, fork);