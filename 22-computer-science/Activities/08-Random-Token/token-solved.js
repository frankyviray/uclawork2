function makeToken(len) {
  // pool of possible letters and numbers
  let pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // starting token string
  let str = "";

  // going up to the length (len), grab a random index from the pool and add it to the string
  for (let i = 0; i < len; i++) {
    str += pool.charAt(Math.floor(Math.random() * pool.length));
  }

  return str;
}

var token = makeToken(16);
console.log(token);