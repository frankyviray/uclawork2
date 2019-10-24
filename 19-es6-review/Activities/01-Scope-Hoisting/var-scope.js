// this line will throw an error, because variable "thing" is never defined anywhere in our app
console.log(thing);

// these two lines look like they should throw an error, but variable declarations are "hoisted" to the top.
console.log(myVar);
console.log(i);

// declaring myVar here "hoists" it, but the actual value isn't available until afterwards
var myVar = "what up";

// ah, there it is
console.log(myVar);

// in a for loop, we declare an iterator variable, but that means... this variable has been hoisted!
for (var i = 0; i < 5; i++) {

}