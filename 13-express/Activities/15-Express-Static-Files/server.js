var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

// make all static files in the "images" folder publicly available
// this is much easier than creating separate GET routes for each image
app.use('/images', express.static('images'));

app.get("/", function(req, res) {
	// we're using path.join here to safely combine two filepaths
	// __dirname + "/index.html" would also work
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});