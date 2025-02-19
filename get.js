const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedURl = url.parse(req.url, true);
  const quantity = parseInt(parsedURl.query.quantity) || 1;

  if (req.method == "GET") {
    if (parsedURl.pathname == "/Menu") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(JSON.stringify({ Message: "Hello, Choose The Categories Below", Categories: ["Veg", "Non-Veg"] }));
      res.end();
    } else if (parsedURl.pathname == "/Menu/Veg") {
      const price = 250;
      const totalPrice = price * quantity;
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(JSON.stringify({
        Item: "panner",
        gst: "7%",
        price: price,
        total_price: totalPrice,
        numberofQuantity: quantity,
        Message: "Thank You For Ordering",
      }));
      res.end();
    } else if (parsedURl.pathname == "/Menu/Non-Veg") {
      const price = 350;
      const totalPrice = price * quantity;
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(JSON.stringify({
        Item: "mutton",
        gst: "5%",
        price: price,
        total_price: totalPrice,
        numberofQuantity: quantity,
        Message: "Thank You For Ordering",
      }));
      res.end();
    } else {
      res.writeHead(400, "not found", { "content-type": "application/json" });
      res.write(JSON.stringify({ message: "thank you for visting , please visit again " }));
      res.end();
    }
  } else if (req.method == "POST") {
    res.end();
  } else if (req.method == "PUT") {
    res.end();
  } else if (req.method == "DELETE") {
    res.end();
  } else {
    res.end();
  }
});

server.listen("3101", () => {
  console.log("server running");
});
