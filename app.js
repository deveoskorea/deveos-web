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
  "options": { title: "devEOS | 진짜 전문가에게 배우는 블록체인 개발" }
},
{
  "view": "course",
  "url": "/program",
  "options": { title: "프로그램 소개 | devEOS" }
},
{
  "view": "course-detail-1",
  "url": "/apply/1",
  "options": { title: "비즈니스를 위한 블록체인의 이해 | 수강신청 | devEOS" }
},
{
  "view": "course-detail-2",
  "url": "/apply/2",
  "options": { title: "EOSIO 개발 기초 입문자 과정 | 수강신청 | devEOS" }
},
{
  "view": "course-detail-3",
  "url": "/apply/3",
  "options": { title: "EOSIO Dapp 심화 개발자 과정 | 수강신청 | devEOS" }
},
{
  "view": "course-detail-4",
  "url": "/apply/4",
  "options": { title: "EOS Dapp 실무자 캠프 | 수강신청 | devEOS" }
},
{
  "view": "application",
  "url": "/apply",
  "options": { title: "수강신청 | devEOS" }
},
{
  "view": "openclass",
  "url": "/openclass",
  "options": { title: "openclass | devEOS" }
},
{
  "view": "contact",
  "url": "/contact",
  "options": { title: "고객센터 | devEOS" }
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
