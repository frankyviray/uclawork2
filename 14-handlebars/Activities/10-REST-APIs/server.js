var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = 3000;

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", function(req, res) {
	console.log("a POST request was made");
	res.end();
});

app.put("/", function(req, res) {
	console.log("a PUT request was made");
	res.end();
});

app.delete("/", function(req, res) {
	console.log("a DELETE request was made");
	res.end();
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});