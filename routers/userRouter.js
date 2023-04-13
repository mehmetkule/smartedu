const express = require('express');
const user  = require('../controllers/authController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/signup').post(user.createUser);
router.route('/login').post(user.loginUser);
router.route('/logout').get(user.logoutUser);
router.route('/dashboard').get(middleware,user.getDasboardPage);

module.exports = router;
