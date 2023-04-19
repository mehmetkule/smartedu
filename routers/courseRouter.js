const express = require('express');
const courseController  = require('../controllers/courseController');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/').post(roleMiddleware(["teacher", "admin"]),courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/enroll').post(courseController.enrollCourse);
router.route('/release').post(courseController.releaseCourse);
router.route('/:slug').get(courseController.getCourse);


module.exports = router;
