const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

courseSchema.pre('validate', function (next) {
  if (this.name) {
    this.slug = this.name.replace(/\s+/g, '-').toLowerCase();
  }
  // this.slug = slugify(this.name, {
  //   lower: true,
  //   strict: true,
  //   });

  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
