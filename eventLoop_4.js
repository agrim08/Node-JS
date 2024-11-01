const fs = require("fs");

setImmediate(() => console.log("setImmediate executed"));

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./dummy.txt", "utf-8", () => {
  console.log("File read complted");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Inner Process executed");
  });
  console.log("process nextTick executed");
});

setTimeout(() => console.log("setTimeout executed"), 0);

console.log("End");
