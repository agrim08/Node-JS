const fs = require("fs");
const https = require("https");

console.log("Start");

let a = 12334;
let b = 8974735;

https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
  console.log("fetch data successfully");
});

setTimeout(() => {
  console.log("Hello");
}, 5000);

// sync code : blocking function
const data = fs.readFileSync("./dummy.txt", "utf-8");
console.log(data);
console.log("synchornous file function executed");

// async function : non-blocking :-
fs.readFile("./dummy.txt", "utf-8", (err, data) => {
  console.log("file data :-", data);
});

function multiply(a, b) {
  let result = a * b;
  return result;
}
var c = multiply(a, b);
console.log("result :-", c);
console.log("End");
