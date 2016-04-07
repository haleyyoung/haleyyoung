var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Courses'});
});

/* GET aboutMe page. */
router.get('/aboutMe', function(req, res) {
  res.render('aboutMe', { title: 'Haley Young'});
});

/* GET resume page. */
router.get('/resume', function(req, res) {
	res.render('resume', {title: 'Resume'});
});

/* GET projects page. */
router.get('/projects', function(req, res) {
	res.render('projects', {title: 'Projects'});
});

/* GET projects page. */
router.get('/minion', function(req, res) {
	res.render('minionAnimation', {title: 'Minion Animation'});
});

/* GET CMSI 185 home page. */
router.get('/cmsi185', function(req, res) {
  res.render('./cmsi185/syllabus', { title: 'Syllabus', course: 'cmsi185'});
});

/* GET evaluation page. */
router.get('/cmsi185/evaluation', function(req, res) {
	res.render('./cmsi185/evaluation', {title: 'Midterm Evaluation', course: 'cmsi185'});
});

/* GET course notes page. */
router.get('/cmsi185/courseNotes', function(req, res) {
	res.render('./cmsi185/courseNotes', {title: 'Course Notes', course: 'cmsi185'});
});

/* GET homework page. */
router.get('/cmsi185/homework', function(req, res) {
	res.render('./cmsi185/homework', {title: 'Homework', course: 'cmsi185'});
});

/* GET introduction page. */
router.get('/cmsi185/courseNotes/intro', function(req, res) {
	res.render('./cmsi185/notes/intro', {title: 'An introduction', course: 'cmsi185'});
});

/* GET jsIntroPage page. */
router.get('/cmsi185/courseNotes/compSciJSIntro', function(req, res) {
	res.render('./cmsi185/notes/compSciJSIntro', {title: 'Computer Science and JavaScript', course: 'cmsi185'});
});

/* GET dataTypesAndVariables page. */
router.get('/cmsi185/courseNotes/dataTypesAndVariables', function(req, res) {
	res.render('./cmsi185/notes/dataTypesAndVariables', {title: 'Data Types and Variables', course: 'cmsi185'});
});

/* GET built in functions page. */
router.get('/cmsi185/courseNotes/builtInFunctions', function(req, res) {
	res.render('./cmsi185/notes/builtInFunctions', {title: 'Built in Functions', course: 'cmsi185'});
});

/* GET statements page. */
router.get('/cmsi185/courseNotes/statements', function(req, res) {
	res.render('./cmsi185/notes/statements', {title: 'Statements', course: 'cmsi185'});
});

/* GET expressions page. */
router.get('/cmsi185/courseNotes/expressions', function(req, res) {
	res.render('./cmsi185/notes/expressions', {title: 'Expressions', course: 'cmsi185'});
});

/* GET comments and clean code page*/
router.get('/cmsi185/courseNotes/commentsAndCleanCode', function(req, res) {
	res.render('./cmsi185/notes/commentsAndCleanCode', {title: 'Comments and Clean Code', course: 'cmsi185'});
});

/* GET loops page*/
router.get('/cmsi185/courseNotes/loops', function(req, res) {
	res.render('./cmsi185/notes/loops', {title: 'Iteration and Loops', course: 'cmsi185'});
});

/* GET arrays page*/
router.get('/cmsi185/courseNotes/arrays', function(req, res) {
	res.render('./cmsi185/notes/arrays', {title: 'Arrays', course: 'cmsi185'});
});

/* GET objects page*/
router.get('/cmsi185/courseNotes/objects', function(req, res) {
	res.render('./cmsi185/notes/objects', {title: 'Objects', course: 'cmsi185'});
});

/* GET functions page*/
router.get('/cmsi185/courseNotes/functions', function(req, res) {
	res.render('./cmsi185/notes/functions', {title: 'Functions', course: 'cmsi185'});
});

/* GET unit testing page*/
router.get('/cmsi185/courseNotes/unitTesting', function(req, res) {
	res.render('./cmsi185/notes/unitTesting', {title: 'Unit Testing', course: 'cmsi185'});
});

/* GET recursion page*/
router.get('/cmsi185/courseNotes/recursion', function(req, res) {
	res.render('./cmsi185/notes/recursion', {title: 'Recursion', course: 'cmsi185'});
});

/* GET HTML page*/
router.get('/cmsi185/courseNotes/webPages', function(req, res) {
	res.render('./cmsi185/notes/webPages', {title: 'Web Pages', course: 'cmsi185'});
});

/* GET example HTML page*/
router.get('/cmsi185/unicorn', function(req, res) {
	res.render('./cmsi185/notes/unicorn', {title: 'Example Web Page', course: 'cmsi185'});
});

/* GET homework1 page. */
router.get('/cmsi185/homework/1', function(req, res) {
	res.render('./cmsi185/homework/homework1', {title: 'Homework 1', course: 'cmsi185'});
});

/* GET homework2 page. */
router.get('/cmsi185/homework/2', function(req, res) {
	res.render('./cmsi185/homework/homework2', {title: 'Homework 2', course: 'cmsi185'});
});

/* GET homework3 page. */
router.get('/cmsi185/homework/3', function(req, res) {
	res.render('./cmsi185/homework/homework3', {title: 'Homework 3', course: 'cmsi185'});
});

/* GET homework4 page. */
router.get('/cmsi185/homework/4', function(req, res) {
	res.render('./cmsi185/homework/homework4', {title: 'Homework 4', course: 'cmsi185'});
});

/* GET homework5 page. */
router.get('/cmsi185/homework/5', function(req, res) {
	res.render('./cmsi185/homework/homework5', {title: 'Homework 5', course: 'cmsi185'});
});

/* GET homework6 page. */
router.get('/cmsi185/homework/6', function(req, res) {
	res.render('./cmsi185/homework/homework6', {title: 'Homework 6', course: 'cmsi185'});
});

/* GET homework7 page. */
router.get('/cmsi185/homework/7', function(req, res) {
	res.render('./cmsi185/homework/homework7', {title: 'Homework 7', course: 'cmsi185'});
});

/* GET homework8 page. */
router.get('/cmsi185/homework/8', function(req, res) {
	res.render('./cmsi185/homework/homework8', {title: 'Homework 8', course: 'cmsi185'});
});

/* GET CMSI 186 home page. */
router.get('/cmsi186', function(req, res) {
  res.render('./cmsi186/syllabus', { title: 'Syllabus', course: 'cmsi186'});
});

/* GET CMSI 186 course notes page. */
router.get('/cmsi186/courseNotes', function(req, res) {
	res.render('./cmsi186/courseNotes', {title: 'Course Notes', course: 'cmsi186'});
});

/* GET CMSI 186 homework page. */
router.get('/cmsi186/homework', function(req, res) {
	res.render('./cmsi186/homework', {title: 'Homework', course: 'cmsi186'});
});

/* GET intro page. */
router.get('/cmsi186/courseNotes/intro', function(req, res) {
	res.render('./cmsi186/notes/javaInstallationAndHelloWorld', {title: 'Java Installation and Hello World', course: 'cmsi186'});
});

/* GET primitive types and declaration page. */
router.get('/cmsi186/courseNotes/primitiveTypesAndVariableDeclaration', function(req, res) {
	res.render('./cmsi186/notes/primitiveTypesAndVariableDeclaration', {title: 'Primitive Types and Variable Declaration', course: 'cmsi186'});
});

/* GET typeGuessing page. */
router.get('/cmsi186/courseNotes/typeGuessing', function(req, res) {
	res.render('./cmsi186/notes/typeGuessing', {title: 'Guess The Type', course: 'cmsi186'});
});

/* GET type casting page. */
router.get('/cmsi186/courseNotes/typeCasting', function(req, res) {
	res.render('./cmsi186/notes/typeCasting', {title: 'Type Casting', course: 'cmsi186'});
});

/* GET control statments page. */
router.get('/cmsi186/courseNotes/controlStatements', function(req, res) {
	res.render('./cmsi186/notes/controlStatements', {title: 'Control Statements', course: 'cmsi186'});
});


/* GET classes and methods page. */
router.get('/cmsi186/courseNotes/packagesAndAccessModifiers', function(req, res) {
	res.render('./cmsi186/notes/packagesAndAccessModifiers', {title: 'Packages and Access Modifiers', course: 'cmsi186'});
});
/* GET classes and methods page. */
router.get('/cmsi186/courseNotes/classesAndMethods', function(req, res) {
	res.render('./cmsi186/notes/classesAndMethods', {title: 'Classes and Methods', course: 'cmsi186'});
});

/* GET homework1 page. */
router.get('/cmsi186/homework/1', function(req, res) {
	res.render('./cmsi186/homework/homework1', {title: 'Homework 1', course: 'cmsi186'});
});

/* GET homework2 page. */
router.get('/cmsi186/homework/2', function(req, res) {
	res.render('./cmsi186/homework/homework2', {title: 'Homework 2', course: 'cmsi186'});
});

/* GET homework 3 page. */
router.get('/cmsi186/homework/3', function(req, res) {
	res.render('./cmsi186/homework/homework3', {title: 'Homework 3', course: 'cmsi186'});
});

/* GET homework 4 page. */
router.get('/cmsi186/homework/4', function(req, res) {
	res.render('./cmsi186/homework/homework4', {title: 'Homework 4', course: 'cmsi186'});
});

/* GET homework 5 page. */
router.get('/cmsi186/homework/5', function(req, res) {
	res.render('./cmsi186/homework/homework5', {title: 'Homework 5', course: 'cmsi186'});
});

/* GET homework 6 page. */
router.get('/cmsi186/homework/6', function(req, res) {
	res.render('./cmsi186/homework/homework6', {title: 'Homework 6', course: 'cmsi186'});
});

/* GET homework 7 page. */
router.get('/cmsi186/homework/7', function(req, res) {
	res.render('./cmsi186/homework/homework7', {title: 'Homework 7', course: 'cmsi186'});
});

/* GET homework 8 page. */
router.get('/cmsi186/homework/8', function(req, res) {
	res.render('./cmsi186/homework/homework8', {title: 'Homework 8', course: 'cmsi186'});
});

/* GET homework 9 page. */
router.get('/cmsi186/homework/9', function(req, res) {
	res.render('./cmsi186/homework/homework9', {title: 'Homework 9', course: 'cmsi186'});
});

module.exports = router;