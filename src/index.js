var express = require("express");
var app = express();

var words = [];

app.get("/", function (req, res) {
  res.send("GET information");
});

app.get("/list", function (req, res) {
  res.send(words);
});

app
  .post("/create", function (req, res) {
    words = req.query.name;
    res.send(words);
  })

  .listen(8080); //the server object listens on port 8080
