var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
// var client = new pg.Client(conString);
// client.connect();
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
	var username = req.query.usermail;
	var password = req.query.password;
	var toDelete = req.query.deleter;
	console.log(username);
	console.log(password);
	var realname
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
		//add a user
		client.query("INSERT INTO Users (Username, Password) VALUES ('" + username + "','" + password + "');", function (error, result) {
			//Check the data in table
			//client.query("SELECT * FROM Users;", function(error,result){
			//delete item
			//client.query("DELETE FROM Users WHERE username=('"+toDelete+"')", function(error,result){
			done();
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			console.log(result);
		});
	});
	res.render('login_welcome', {name: "Josh"});

});


module.exports = router;