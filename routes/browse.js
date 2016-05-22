var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	//res.send("listing site is working");
	var listings = [];
	pg.defaults.ssl = true; //Uncomment this if you cannot connect to browse
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing;", function(error,result){
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			var i = 0;
			for (i =0; i < result.rows.length; i++){
			listings.push(result.rows[i]);			
			}
			for (i =0; i < result.rows.length; i++){
			console.log(listings[i]);
			}
    		res.render('browse', {

    			Array:listings

    			
    		});
		});
	});

});


module.exports = router;