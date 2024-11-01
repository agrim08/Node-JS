console.log("start");

const fs = require("fs");

setImmediate(() => console.log("setImmediate executed"));

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./dummy.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd Timer"));
  process.nextTick(() => console.log("2nd Process"));
  console.log("File read complted");
  setImmediate(() => console.log("2nd Immediate"));
});

process.nextTick(() => {
  console.log("process nextTick executed");
});

setTimeout(() => console.log("setTimeout executed"), 0);

console.log("End");
