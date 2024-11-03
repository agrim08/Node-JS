process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require("crypto");

console.time("Total Time");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.timeEnd("Crypto 1");
  console.log("1st crypto finished");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.timeEnd("Crypto 2");
  console.log("2nd crypto finished");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.timeEnd("Crypto 3");
  console.log("3rd crypto finished");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.timeEnd("Crypto 4");
  console.log("4th crypto finished");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.timeEnd("Crypto 5");
  console.log("5th crypto finished");
});

console.timeEnd("Total Time");
