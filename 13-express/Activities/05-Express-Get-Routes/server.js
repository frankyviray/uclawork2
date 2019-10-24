// include the express module
var express = require("express");

// create a new express app
var app = express();

// define the port that we will set the server listener on
var PORT = 3000;

// define what to display when the client requests http://localhost:3000/
app.get("/", function(req, res) {
	res.send("<h1>Welcome to my website!</h1>");
});

// define what to display when the client requests http://localhost:3000/portfolio
app.get("/portfolio", function(req, res) {
	res.send("<h1>This is my portfolio page. Don't judge.</h1>");
});

// start server on that port number
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});