const express = require('express');
const page  = require('../controllers/pageControllers');

const router = express.Router();

router.route('/').get(page.homePage);
router.route('/about').get(page.aboutPage);
router.route('/register').get(page.getRegisterPage);
router.route('/login').get(page.loginPage);
module.exports = router;
