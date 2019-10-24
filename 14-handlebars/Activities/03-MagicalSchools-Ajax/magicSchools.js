// Dependencies
var express = require("express");
var mysql = require("mysql");
var path = require("path");

// Create express app instance.
var app = express();

// Specify the port.
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wizard_schools_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/", function(req, res) {
  // the main route will no longer build the template, it will just load the HTML file...
  res.sendFile(path.join(__dirname, "index.html"));
});

// ... and then the front-end will have to request the data later
app.get("/api", function(req, res) {
  connection.query("SELECT * FROM schools", function(err, result) {
    res.send(result);
  });
});

// Initiate the listener.
app.listen(port);
