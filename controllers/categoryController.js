const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};


