const http = require("http");

const reqListener = function (req, res) {
  res.writeHead(200);
  res.end("<h1>HTTP Server is running!!</h1>");
};

const server = http.createServer(reqListener);

server.listen(3000);
