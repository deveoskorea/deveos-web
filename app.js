var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


var pages = require("node-github-pages")(app, {
  static: "public"
});
pages.renderFiles([{
  "view": "index",
  "url": "",
  "options": {}
},
{
  "view": "course",
  "url": "/course",
  "options": {}
},
{
  "view": "course-detail-1",
  "url": "/course/1",
  "options": {}
},
{
  "view": "course-detail-2",
  "url": "/course/2",
  "options": {}
},
{
  "view": "course-detail-3",
  "url": "/course/3",
  "options": {}
},
{
  "view": "course-detail-4",
  "url": "/course/4",
  "options": {}
},
{
  "view": "application",
  "url": "/application",
  "options": {}
},
{
  "view": "openclass",
  "url": "/openclass",
  "options": {}
},
{
  "view": "contact",
  "url": "/contact",
  "options": {}
}]);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
