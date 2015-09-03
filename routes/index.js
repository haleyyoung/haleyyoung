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

/* GET syllabus page. */
router.get('/cmsi185/syllabus', function(req, res) {
	res.render('./cmsi185/syllabus', {title: 'Syllabus'});
});

/* GET course notes page. */
router.get('/cmsi185/courseNotes', function(req, res) {
	res.render('./cmsi185/courseNotes', {title: 'Course Notes'});
});

/* GET introduction page. */
router.get('/cmsi185/courseNotes/intro', function(req, res) {
	res.render('./cmsi185/notes/intro', {title: 'An introduction'});
});

/* GET jsIntroPage page. */
router.get('/cmsi185/courseNotes/compSciJSIntro', function(req, res) {
	res.render('./cmsi185/notes/compSciJSIntro', {title: 'Computer Science and JavaScript'});
});

/* GET dataTypesAndVariables page. */
router.get('/cmsi185/courseNotes/dataTypesAndVariables', function(req, res) {
	res.render('./cmsi185/notes/dataTypesAndVariables', {title: 'Data Types and Variables'});
});

module.exports = router;
