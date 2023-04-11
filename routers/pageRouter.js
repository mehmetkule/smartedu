const express = require('express');
const page  = require('./controllers/pageControllers');

const router = express.Router();

router.route('/').get(page.homePage);
router.route('/about').get(page.aboutPage);
router.route('/contact').get(page.contactPage);
router.route('/course-single').get(page.courseSinglePage);
router.route('/courses').get(page.coursesPage);
router.route('/dashboard').get(page.dashboardPage);
router.route('/login').post(page.loginPage);
router.route('/register').post(page.registerPage);

module.exports = router;
