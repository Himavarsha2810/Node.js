const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("himavarsha");
//   res.write("hello world");
//   res.end("responce provided");
// });

// server.listen("3101", () => {
//   console.log("server is running");
// });


let obj = { name: "hima" , city: "hyd"};
const server = http.createServer((req,res) => {
console.log(req.url)

  if(req.method == "GET") {
    if(req.url == "/home"){
      res.writeHead(201, "hello hima",{ "content-type": "application/json"});
      res.write(JSON.stringify(obj));
      res.end();
    }
    else if(req.url == "/about"){
      res.writeHead(201, "hello hima",{ "content-type": "application/json"});
      res.write(JSON.stringify(obj));
      res.end();
    }
    else{
    res.writeHead(201, "hello hima",{ "content-type": "application/json"});
    res.write(JSON.stringify(obj));
    res.end();
    }
    res.writeHead(201, "hello hima",{ "content-type": "application/json"});
    res.write(JSON.stringify(obj));
    res.end();
  } 

  else{
    res.end("invalid request")
  }
  
});


server.listen("3101", () => {
  console.log("server running");
});