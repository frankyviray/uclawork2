// before, we were using module.exports to give other files access to these properties. with ES6, we can just use the "export" keyword directly.

export function cat() {
  console.log("meow");
}

export function dog() {
  console.log("woof");

  setTimeout(() => {
    console.log("woof, woof");
  }, 1000);
}