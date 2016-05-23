var pg=require('pg');
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
	var username = req.query.Email;
	var password = req.query.password;
	var uid = "";
	console.log(username);
	console.log(password);
	pg.defaults.ssl = true;
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
		//add a user
		client.query("INSERT INTO Users (Username, Password) VALUES ('" + username + "','" + password + "');", function (error, result) {
			done();
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
		});
		client.query("SELECT*FROM Users WHERE username ='"+username+"'; ", function (error, result) {
			done();
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			uid = result.rows[0].uid;
			//console.log(uid);
			res.render('login_welcome', {

			name: username,
			uid:uid

			} );
		});

	});
	

});


module.exports = router;