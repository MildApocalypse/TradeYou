var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	//res.send("listing site is working");
	var listings = [];
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Users;", function(error,result){
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			listings = result;
			//console.log(result.rows[0].uid);
			//console.log(result.rows[1].uid);
			console.log(listings.rows[0]);
    		res.render('browse', {
    			pName:result.rows[0].username,
    			pPass:result.rows[0].password
    			//results:results
    			
    		});
		});
	});

});


module.exports = router;