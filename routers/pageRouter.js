const express = require('express');
const page  = require('../controllers/pageControllers');
const redirectMiddleware = require('../middleware/redirectMiddleware');
const router = express.Router();

router.route('/').get(page.homePage);
router.route('/about').get(page.aboutPage);
router.route('/register').get(redirectMiddleware,page.getRegisterPage);
router.route('/login').get(redirectMiddleware,page.loginPage);
module.exports = router;
