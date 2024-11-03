const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("hello world"); //saying hello world to every user requesting our server
});

server.listen(8000);
