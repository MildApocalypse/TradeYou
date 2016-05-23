/**
 * Created by bucklawr on 22/05/16.
 */
var pg=require('pg');
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {

    pg.defaults.ssl = true; //Uncomment this if you cannot connect to browse
    pg.connect(database, function (err, client, done) {
        if (err) {
            console.error('Could not connect to the database');
            console.error(err);
            return;
        }
        console.log('Connected to database');
        console.log(req.query.txtEdit);
        console.log(req.query.ls);
        //Check the data in table
        client.query("SELECT * FROM Listing WHERE sid=96;", function(error,result){
            if (error) {
                console.error('Failed to execute query');
                console.error(error);
                return;
            }
            var arr = [result.rows.uid, result.rows[0].imagepath, result.rows[0].itemname, result.rows[0].price,
                result.rows[0].tag, result.rows[0].email, result.rows[0].quantity, result.rows[0].longestside,
                result.rows[0].height, result.rows[0].weight, result.rows[0].address1, result.rows[0].address2,
                result.rows[0].city, result.rows[0].suburb, result.rows[0].email, result.rows[0].phonenum,
                result.rows[0].description];
            // for (i =0; i < result.rows.length; i++){
            // console.log(listings[i]);
            // }
    
            res.render('/imagePage', {item: arr});
            });
        });
});

module.exports = router;