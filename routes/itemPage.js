/**
 * Created by bucklawr on 22/05/16.
 */
var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();

router.get('/*', function(req,res) {
    res.render('itemPage', {imagePlaced: false})
});

module.exports = router;