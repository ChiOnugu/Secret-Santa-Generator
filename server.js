//requiring necessary packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//Creating a port that will use either herokus port if available or local port 3000
var port = process.env.PORT || 3000;
//Setting up the express app
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
//requiring handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/userController.js");

app.use("/", routes);

app.listen(port);
