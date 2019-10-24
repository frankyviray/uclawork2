"use strict";

var fruits = ["banana", "apple", "pear", "grape"];

var tags = fruits.map(function (fruit) {
  var el = document.createElement("h1");
  el.textContent = "I love " + fruit + "s!";

  return el;
});

var _loop = function _loop(i) {
  setTimeout(function () {
    document.getElementById("app").appendChild(tags[i]);
  }, i * 1000);
};

for (var i = 0; i < tags.length; i++) {
  _loop(i);
}