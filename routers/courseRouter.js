const express = require('express');
const course  = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(course.createCourse);
router.route('/').get(course.getAllCourses);
router.route('/:slug').get(course.getCourse);


module.exports = router;
