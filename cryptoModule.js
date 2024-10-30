const crypto = require("crypto");

let a = 12334;
let b = 8974735;

console.log("start");

//* pbkdf2 :- Passowrd Based Key Derivation Function Version 2
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async key is generated", key);
});

//* Synchronous pbkdf2
const syncKey = crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("sync key is generated", syncKey);

function multiply(a, b) {
  let result = a * b;
  return result;
}
var c = multiply(a, b);
console.log("result :-", c);

console.log("end");
