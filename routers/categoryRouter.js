const express = require('express');
const category  = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(category.createCategory);
// router.route('/').get(category.getAllCategory);
// router.route('/:slug').get(category.getCategory);


module.exports = router;
