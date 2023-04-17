const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).redirect('/courses');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });
    let filter = {};
    if (categorySlug) {
      filter = { category: category._id };
    }
   
    const courses = await Course.find(filter).sort({ createdAt: -1 });
    const categories = await Category.find();
    res.status(200).render('courses', {
      courses,
      categories,
      page_name: 'courses',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const categories = await Category.find();
    const course = await Course.findOne({ slug: req.params.slug });
    res.status(200).render('course', {
      course,
      categories,
      page_name: 'course',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
