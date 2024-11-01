console.log("start");

const fs = require("fs");
var a = 100;

setImmediate(() => console.log("setImmediate executed"));

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./dummy.txt", "utf-8", () => {
  console.log("File read complted");
});

process.nextTick(() => {
  console.log("process nextTick executed");
});

setTimeout(() => console.log("setTimeout executed"), 0);

function print(a) {
  console.log(a);
}
print(a);
console.log("End");
