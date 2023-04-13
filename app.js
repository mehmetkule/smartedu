const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const pageRouter = require('./routers/pageRouter');
const courseRouter = require('./routers/courseRouter');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
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
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
}));
//Routes
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
