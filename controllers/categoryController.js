const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(201).redirect('/users/dashboard');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
