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

/* GET evaluation page. */
router.get('/cmsi185/evaluation', function(req, res) {
	res.render('./cmsi185/evaluation', {title: 'Midterm Evaluation'});
});

/* GET course notes page. */
router.get('/cmsi185/courseNotes', function(req, res) {
	res.render('./cmsi185/courseNotes', {title: 'Course Notes'});
});

/* GET homework page. */
router.get('/cmsi185/homework', function(req, res) {
	res.render('./cmsi185/homework', {title: 'Homework'});
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

/* GET built in functions page. */
router.get('/cmsi185/courseNotes/builtInFunctions', function(req, res) {
	res.render('./cmsi185/notes/builtInFunctions', {title: 'Built in Functions'});
});

/* GET statements page. */
router.get('/cmsi185/courseNotes/statements', function(req, res) {
	res.render('./cmsi185/notes/statements', {title: 'Statements'});
});

/* GET expressions page. */
router.get('/cmsi185/courseNotes/expressions', function(req, res) {
	res.render('./cmsi185/notes/expressions', {title: 'Expressions'});
});

/* GET comments and clean code page*/
router.get('/cmsi185/courseNotes/commentsAndCleanCode', function(req, res) {
	res.render('./cmsi185/notes/commentsAndCleanCode', {title: 'Comments and Clean Code'});
});

/* GET loops page*/
router.get('/cmsi185/courseNotes/loops', function(req, res) {
	res.render('./cmsi185/notes/loops', {title: 'Iteration and Loops'});
});

/* GET arrays page*/
router.get('/cmsi185/courseNotes/arrays', function(req, res) {
	res.render('./cmsi185/notes/arrays', {title: 'Arrays'});
});

/* GET objects page*/
router.get('/cmsi185/courseNotes/objects', function(req, res) {
	res.render('./cmsi185/notes/objects', {title: 'Objects'});
});

/* GET functions page*/
router.get('/cmsi185/courseNotes/functions', function(req, res) {
	res.render('./cmsi185/notes/functions', {title: 'Functions'});
});

/* GET unit testing page*/
router.get('/cmsi185/courseNotes/unitTesting', function(req, res) {
	res.render('./cmsi185/notes/unitTesting', {title: 'Unit Testing'});
});

/* GET recursion page*/
router.get('/cmsi185/courseNotes/recursion', function(req, res) {
	res.render('./cmsi185/notes/recursion', {title: 'Recursion'});
});

/* GET HTML page*/
router.get('/cmsi185/courseNotes/webPages', function(req, res) {
	res.render('./cmsi185/notes/webPages', {title: 'Web Pages'});
});

/* GET homework1 page. */
router.get('/cmsi185/homework/1', function(req, res) {
	res.render('./cmsi185/homework/homework1', {title: 'Homework 1'});
});

/* GET homework2 page. */
router.get('/cmsi185/homework/2', function(req, res) {
	res.render('./cmsi185/homework/homework2', {title: 'Homework 2'});
});

/* GET homework3 page. */
router.get('/cmsi185/homework/3', function(req, res) {
	res.render('./cmsi185/homework/homework3', {title: 'Homework 3'});
});

/* GET homework4 page. */
router.get('/cmsi185/homework/4', function(req, res) {
	res.render('./cmsi185/homework/homework4', {title: 'Homework 4'});
});

/* GET homework5 page. */
router.get('/cmsi185/homework/5', function(req, res) {
	res.render('./cmsi185/homework/homework5', {title: 'Homework 5'});
});

module.exports = router;