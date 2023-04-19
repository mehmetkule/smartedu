const User = require('../models/User');
const bcrypt = require('bcrypt');
const Category = require('../models/Category');
const Course = require('../models/Course');
exports.createUser = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).redirect('/login');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session.userID = user._id;;
          res.status(200).redirect('/users/dashboard');
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).redirect('/');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}

exports.getDasboardPage = async (req, res) => {
  const user = await User.findOne({_id:req.session.userID}).populate('courses');
  const categories = await Category.find();
  const courses = await Course.find({ user: req.session.userID });
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
    categories,
    courses
  });
}

