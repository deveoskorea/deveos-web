var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cource', function (req, res, next) {
  res.render('cource', { title: 'Express' });
});
router.get('/cource/:id', function (req, res, next) {
  res.render('cource-detail', { title: 'Express' });
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
