const express = require('express');
const user  = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(user.createUser);
router.route('/login').post(user.loginUser);

module.exports = router;
