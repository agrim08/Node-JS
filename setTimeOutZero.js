const crypto = require("crypto");

console.log("Start");

let a = 12334;
let b = 8974735;

setTimeout(() => {
  console.log("Hello asap");
}, 0);

setTimeout(() => {
  console.log("Hello after 5 sec");
}, 5000);

function multiply(a, b) {
  let result = a * b;
  return result;
}
var c = multiply(a, b);
console.log("result :-", c);
console.log("End");

//the async task (setTimeOut) wuill always be executed after all synchronous tasks
const syncKey = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("sync key is generated", syncKey);
