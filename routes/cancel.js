var pg=require('pg');
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res) {
 // var pathToFile =
 // pg.defaults.ssl = true;
  pg.connect(database, function (err, client, done) {
    if (err) {
      console.error('Could not connect to the database');
      console.error(err);
      return;
    }
    console.log('Connected to database');
      //Check the data in table
      var sid = req.query.filr;
      //console.log(sid);
      
      client.query("DELETE FROM Listing WHERE sid = '"+sid+"'", function(error,result){
      done();
      if (error) {
        console.error('Failed to execute deletion from listing in buy query');
        console.error(error);
        return;
      } 
      });
      res.redirect('/userListing');
    });

});
module.exports = router;
