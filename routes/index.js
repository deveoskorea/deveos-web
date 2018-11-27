var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/course', function (req, res, next) {
  res.render('course', { title: 'Express' });
});
router.get('/course/:id', function (req, res, next) {
  res.render('course-detail', { title: 'Express' });
});
router.get('/application', function (req, res, next) {
  res.render('application', { title: 'Express' });
});
router.get('/openclass', function (req, res, next) {
  res.render('openclass');
})
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
