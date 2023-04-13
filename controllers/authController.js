const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.createUser = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        users,
      },
    });
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
          res.status(200).send('Login Successful');
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
