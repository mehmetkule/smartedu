const express = require('express');
const user = require('../controllers/authController');
const { body } = require('express-validator');
const middleware = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

router.route('/signup').post(
  [
    body('name').not().isEmpty().withMessage('Please Enter Your Name'),

    body('email')
      .isEmail()
      .withMessage('Please Enter Valid Email')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject('Email is already exists!');
          }
        });
      }),

    body('password').not().isEmpty().withMessage('Please Enter A Password'),
  ],
  user.createUser
);
router.route('/login').post(user.loginUser);
router.route('/logout').get(user.logoutUser);
router.route('/dashboard').get(middleware, user.getDasboardPage);

module.exports = router;
