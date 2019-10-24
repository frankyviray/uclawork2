const fruits = ["banana", "apple", "pear", "grape"];

const tags = fruits.map((fruit) => {
  let el = document.createElement("h1");
  el.textContent = `I love ${fruit}s!`;

  return el;
});

for (let i = 0; i < tags.length; i++) {
  setTimeout(() => {
    document.getElementById("app").appendChild(tags[i]);
  }, i*1000);
}