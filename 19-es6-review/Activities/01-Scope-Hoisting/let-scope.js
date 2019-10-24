// these two lines WILL throw an error, because the variables were declared with "let," which prevents them from being hoisted.
console.log(myVar);
console.log(i);

// the "let" keyword still defines a variable similar to "var." the only difference is the scope that it's available in.
let myVar = "what up";

console.log(myVar);

for (let i = 0; i < 5; i++) {

}

// we can also use "let" to define variables unique to blocks of code, like a for loop.
for (let i = 0; i < 5; i++) {
  var thing1 = "one";
  let thing2 = "two";
}

// thing1 exists globally, because it was defined with "var"
console.log(thing1);

// thing2 only exists within the for loop, because it was defined with "let"
console.log(thing2);