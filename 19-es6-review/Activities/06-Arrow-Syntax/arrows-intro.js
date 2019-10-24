// function expression
const multiply1 = function (a, b) {
  return a * b;
};

// arrow function expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// concise version
// without curly brackets, the return statement is implied
const multiply3 = (a, b) => a * b;

// can omit the parentheses if there's only a single parameter
// but let's be honest, sometimes we can "simplify" code too much
const square = x => x * x;

// note: there's no arrow-function equivalent of function declarations
function multiply4 (a, b) {
  return a * b;
}
