/**
 * Created by bucklawr on 15/05/16.
 */
var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();

router.get('/', function (req,res) {
	 var imageLink = "hey";
    var title = req.query.Title;
    var price = req.query.price;
    var descriptionz = req.query.descriptionz;
    var tag = req.query.tag;
    var integer = 1;
    console.log(descriptionz);
    //var owner = req.query.....
    res.render('createItem');
    pg.connect(database, function(err, client, done) {
        if (err) {
            console.error('Could not connect to database');
            console.error(err);
            return;
        }
        console.log("Connected to database");
        client.query("INSERT INTO Listing (Uid, imagePath, itemName, Price, Description, Tag) VALUES (" + integer + ",'"+imageLink+"','"+title+"',"+price+",'"+descriptionz+"','"+tag+"');", function (err, result) {
            done();
            if (err) {
                console.error("Failed to post item");
                console.error(err);
                return;
            }
            console.log(result);
        });
    });
});


module.exports = router;