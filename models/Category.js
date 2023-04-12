const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    unique: true,
  },
});

categorySchema.pre('validate', function (next) {
  //   if (this.name) {
  //     this.slug = this.name.replace(/\s+/g, '-').toLowerCase();
  //   }
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });

  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
