//requiring necessary packages
var express = require("express");
//Setting up the express app
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
//var methodOverride = require("method-override");

//Creating a port that will use either herokus port if available or local port 3000
var port = process.env.PORT || 8080;
var db=require("./models");
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var configDB = require('./config/connection.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

 require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());// get information from html forms
app.use(express.static("public"));
//app.use(methodOverride("_method"));
//requiring our templating engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// required for passport
app.use(session
	({ secret: 'ilovescotchscotchyscotchscotch',
		resave: true,
    	saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
//requires routes to display our html handlebar pages

require("./app/routes.js")(app,passport);

db.sequelize.sync().then(function(){
	app.listen(port,function(){
		console.log("Listening on port %s", port);
	});
});
