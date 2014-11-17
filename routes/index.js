var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Haley Young'});
});

/* GET resume page. */
router.get('/resume', function(req, res) {
	res.render('resume', {title: 'Resume'});
});

/* GET projects page. */
router.get('/projects', function(req, res) {
	res.render('projects', {title: 'Projects'});
});


module.exports = router;
