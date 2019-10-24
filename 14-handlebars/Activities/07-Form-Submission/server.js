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

app.post("/do", function(req, res) {
	console.log("Received data", req.body);

	// remember, all requests should close with a response
	res.send("Thanks for signing up!");

	// if the POST request came from a form, however, we can redirect the client to another route
	// res.redirect("/");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});