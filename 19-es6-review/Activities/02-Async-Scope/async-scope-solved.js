// variables declared as "const" cannot be changed
const names = ["Elton", "Paige", "Clark"];

// however, if the const is an array, we can still push items into it. we just can't turn the array into something else entirely.
names.push("JP");

// ideally, we would like to loop over the array and print each name one second after each other. using "let" in our for loop will retain the scope of the iterator on each pass.
for (let i = 0; i < names.length; i++) {
  // it's not necessary to make the time a let, but since we don't use this variable anywhere else, it's safer to keep it local to this scope.
  let time = i*1000;
  
  setTimeout(function() {
    console.log(names[i]);
  }, time);
}