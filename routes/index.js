var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'devEOS | 진짜 전문가에게 배우는 블록체인 개발' });
});

router.get('/program', function (req, res, next) {
  res.render('course', { title: '프로그램 소개 | devEOS' });
});

router.get('/apply', function (req, res, next) {
  res.render('application', { title: 'Express' });
});

router.get('/apply/:id', function (req, res, next) {
  res.render('course-detail-' + req.params.id, { title: 'Express' });
});

router.get('/openclass', function (req, res, next) {
  res.render('openclass', { title: "devEOS" });
})

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
