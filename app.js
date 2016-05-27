var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var loginWelcome = require('./routes/loginWelcome');
var createItem = require('./routes/createItem');
var browse = require('./routes/browse');
var buy = require('./routes/buy');
var cancel = require('./routes/cancel');
var itemPage = require('./routes/itemPage');
var edit = require('./routes/edit');
var purchases = require('./routes/purchases');
var userListing = require('./routes/userListing');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/loginWelcome', loginWelcome);
app.use('/createItem', createItem);
app.use('/browse', browse);
app.use('/buy', buy);
app.use('/cancel', cancel);
app.use('/itemPage', itemPage);
app.use('/edit', edit);
app.use('/purchases', purchases);
app.use('/userListing', userListing);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
