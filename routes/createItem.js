/**
 * Created by bucklawr on 15/05/16.
 */
var pg=require('pg').native;
var database = "postgress://minajosh:password@depot:5432/minajosh";
var express = require('express');
var router = express.Router();

router.get('/', function (req,res) {
    var title = req.query.title;
    res.render('createItem');
    pg.connect(database, function(err, client, done) {
        if (err) {
            console.error('Could not connect to database');
            console.error(err);
            return;
        }
        console.log("Connected to database");
        client.query("INSERT INTO Stock (Title) VALUES ('" + title + "');", function (err, result) {
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