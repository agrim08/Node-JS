const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/secretdata") {
    res.end("no secret data available");
  }
  res.end("hello world"); //saying hello world to every user requesting our server
});

server.listen(8000);
