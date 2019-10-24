let name = "Joe";
let age = 28;
let occupation = "zookeeper";
let hobbies = ["coding", "sleeping", "eating"];

// we're adding all of our data to a string, but it's quite cumbersome to keep closing the string and adding variables in.
console.log("Hi, my name is " + name + ". I am " + age + " years old. I work as a " + occupation + ". My favorite hobby is " + hobbies[0] + ".");

// look up "template literals" and use this new syntax to rewrite the same console.log logic without any "+" signs.

// once you're comfortable with this syntax, try console logging another sentence that says: "You rolled a ___!" where the blank is a random dice roll. bonus: do this in one line.