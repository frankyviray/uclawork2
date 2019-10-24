var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PORT = 3000;

// variable to track how many times button has been clicked
var counter = 0;

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/count", function(req, res) {
	// display counter on front-end
	res.send("The button has been clicked " + counter + " times.");
});

// TODO: add a POST route that will increase the counter by one

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});