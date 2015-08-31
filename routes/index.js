var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/lmuHome', function(req, res) {
  res.render('lmuHome', { title: 'CMSI 185'});
});

/* GET aboutMe page. */
router.get('/aboutMe', function(req, res) {
  res.render('aboutMe', { title: 'About Me'});
});

/* GET resume page. */
router.get('/resume', function(req, res) {
	res.render('resume', {title: 'Resume'});
});

/* GET projects page. */
router.get('/projects', function(req, res) {
	res.render('projects', {title: 'Projects'});
});

/* GET syllabus page. */
router.get('/syllabus', function(req, res) {
	res.render('syllabus', {title: 'Syllabus'});
});

/* GET course notes page. */
router.get('/courseNotes', function(req, res) {
	res.render('courseNotes', {title: 'Course Notes'});
});

/* GET introduction page. */
router.get('/intro', function(req, res) {
	res.render('notes/intro', {title: 'An introduction'});
});

module.exports = router;
