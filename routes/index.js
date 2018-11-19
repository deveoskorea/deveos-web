var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/curriculum', function(req, res, next) {
  res.render('curriculum', { title: 'Express' });
});
router.get('/curriculum/:id', function(req, res, next) {
  res.render('curriculum-detail', { title: 'Express' });
});
router.get('/enrolment', function(req, res, next) {
  res.render('enrolment', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
