const express = require('express');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).render('index',{
    page_name: 'index'
  });
});

app.get('/about', (req, res) => {
  res.status(200).render('about',{
    page_name: 'about'
  });
});

app.get('/contact', (req, res) => {
  res.status(200).render('contact',{
    page_name: 'contact'
  });
});

app.get('/course-single', (req, res) => {
  res.status(200).render('course-single');
});

app.get('/courses', (req, res) => {
  res.status(200).render('courses');
});

app.get('/dashboard', (req, res) => {
  res.status(200).render('dashboard');
});


app.get('/login', (req, res) => {
  res.status(200).render('login');
});

app.get('/register', (req, res) => {
  res.status(200).render('register');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
