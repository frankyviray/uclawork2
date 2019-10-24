// include the express module
var express = require("express");

// create a new express app
var app = express();

// define the port that we will set the server listener on
var PORT = 3000;

// start server on that port number
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

// note that nothing will actually show up yet on http://localhost:3000, because we haven't defined any content