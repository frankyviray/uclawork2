var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

// it's important to remember that, by default, the client can't see anything on our server. we have to define everything it is allowed to see.

// for example, at the very least, we should set up a homepage
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

// we can also define any other "routes" we want the client to see. the thing is, we can call these routes whatever we want. here, we're creating a route called "secret" even though there is no "secret" folder or file on the server. the client doesn't need to know that, though!
app.get("/secret", function(req, res) {
	res.send("You found my secret page.");
});

// but because we have to be this specific in what we show the client, that makes it a little tricky to deliver static files like images or stylesheets. fortunately, with one line, we can tell express to take everything INSIDE of a particular folder and make it publicly available.
app.use('/', express.static('assets'));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});