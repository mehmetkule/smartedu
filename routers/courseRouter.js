const express = require('express');
const course  = require('../controllers/courseController');
const rolesMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/').post(rolesMiddleware(["teacher","admin"]),course.createCourse);
router.route('/').get(course.getAllCourses);
router.route('/:slug').get(course.getCourse);


module.exports = router;
