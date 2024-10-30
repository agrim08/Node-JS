const https = require("https");

const req = https.get("https://invalidurl", (res) => {
  console.log("fetch data successfully");
});

req.on("error", (err) => {
  console.log("An error occurred:", err);
});
