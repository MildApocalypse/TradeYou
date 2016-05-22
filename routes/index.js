var express = require('express');
var router = express.Router();
http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'TradeYou' });
});


module.exports = router;
