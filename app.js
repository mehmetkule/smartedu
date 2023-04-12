const express = require('express');
const mongoose = require('mongoose');
const pageRouter = require('./routers/pageRouter');
const courseRouter = require('./routers/courseRouter');
const app = express();

//Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/smartedu-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

//Template Engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routes
app.use('/', pageRouter);
app.use('/courses', courseRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
