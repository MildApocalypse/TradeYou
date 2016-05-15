var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TradeYou' });
});

router.get('/create-item', function (req,res) {
  res.render('create-item');
});

module.exports = router;
