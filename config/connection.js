//Set up mysql connection
var mysql = require("mysql");
//create var connection that contains information needed to connect with the database
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "JjKk88!7",
	database: "secretsanta_db"
});
//connect with database
connection.connect(function(err){
	if(err){
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});
//export the connection so connection will run when server.js is ran in node
module.exports = connection;