const express = require('express');
const page  = require('../controllers/pageControllers');
const redirectMiddleware = require('../middleware/redirectMiddleware');
const router = express.Router();

router.route('/').get(page.homePage);
router.route('/about').get(page.aboutPage);
router.route('/register').get(redirectMiddleware,page.getRegisterPage);
router.route('/login').get(redirectMiddleware,page.loginPage);
router.route('/contact').get(page.contactPage);
router.route('/contact').post(page.sendEmail);
module.exports = router;
