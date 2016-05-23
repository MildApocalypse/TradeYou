var pg=require('pg');
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res) {
 // var pathToFile =
  pg.defaults.ssl = true;
  var listings = [];
  pg.connect(database, function (err, client, done) {
    if (err) {
      console.error('Could not connect to the database');
      console.error(err);
      return;
    }
    console.log('Connected to database');
      //Check the data in table
      var uid = 1; //temporarily, this should be current user's uid
      //console.log(sid);
      client.query("SELECT * FROM Buy WHERE uid = '"+uid+"' ", function(error,result){
      if (error) {
        console.error('Failed to execute selecting from listing in buy query');
        console.error(error);
        return;
      }
      var i = 0;
      for (i =0; i < result.rows.length; i++){
      listings.push(result.rows[i]);      
      }

      // for (i =0; i < result.rows.length; i++){
      // console.log(listings[i]);
      // }

        res.render('purchases', {

          Arrays:listings
          
        });
      done();
    });
  });
});
module.exports = router;
