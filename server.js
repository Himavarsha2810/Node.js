const http = require("http");

const server = http.createServer((req, res) => {
  res.write("himavarsha");
  res.write("hello world");
  res.end("responce provided");
});

server.listen("3101", () => {
  console.log("server is running");
});
