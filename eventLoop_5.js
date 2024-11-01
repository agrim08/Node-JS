const fs = require("fs");
fs.readFile("./dummy.txt", "utf-8", () => {
  process.nextTick(() => {
    process.nextTick(() => {
      console.log("file reed next Tick 1st");
    });
    console.log("file read console");
  });
  process.nextTick(() => {
    console.log("file reed next Tick 2nd");
  });
  console.log("File read complted");
});
