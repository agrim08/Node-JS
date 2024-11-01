console.log("start");

const fs = require("fs");
var a = 100;

setImmediate(() => console.log("setImmediate executed"));

fs.readFile("./dummy.txt", "utf-8", () => {
  console.log("File read complted");
});

setTimeout(() => console.log("setTimeout executed"), 0);

function print(a) {
  console.log(a);
}
print(a);
console.log("End");
