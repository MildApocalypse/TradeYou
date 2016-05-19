 /*Stock( Uid INTEGER, Title VARCHAR(100),
Price DECIMAL(10,4), Tag VARCHAR(50 ));*/
var pg=require('pg').native;
var database = "postgres://pmwkbldxsjfraa:1zWyNo3qqD3tJRf1H8cEW4QQtM@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d3s2olru8n3gtj";
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  //JSON file in the /public/skills directory
  res.send('hello world');

  //or some database lookup followed by a json send:
 });
module.exports = router;