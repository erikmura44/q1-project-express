require('dotenv').config();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Q1 App Express',
    index: true,
  });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Q1 App Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Q1 App Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Q1 App Express' });
});


module.exports = router;
