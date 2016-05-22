var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res) {
 // var pathToFile =
 pg.defaults.ssl = true;
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
      client.query("SELECT * FROM Listing WHERE sid = '"+sid+"' ", function(error,result){
      if (error) {
        console.error('Failed to execute selecting from listing in buy query');
        console.error(error);
        return;
      }
      console.log(result.rows);
      console.log(result.rows[0].price);
      client.query("INSERT INTO Buy (Uid, imagePath, itemName, Price, Description, Tag) VALUES (" + result.rows[0].uid + ",'"+result.rows[0].imagepath+"','"+result.rows[0].itemname+"',"+result.rows[0].price+",'"+result.rows[0].description+"','"+result.rows[0].tag+"');", function(error,result){
      if (error) {
        console.error('Failed to execute insertion to buy query');
        console.error(error);
        return;
      } 
      });    
      client.query("DELETE FROM Listing WHERE sid = '"+sid+"'", function(error,result){
      if (error) {
        console.error('Failed to execute deletion from listing in buy query');
        console.error(error);
        return;
      } 
      });
      // res.render('browse', {

        //   Array:listings
          
          
        // });
    });
  });
});
module.exports = router;
