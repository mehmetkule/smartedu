exports.homePage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.aboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.contactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.courseSinglePage = (req, res) => {
  res.status(200).render('course-single', {
    page_name: 'course-single',
  });
};

exports.coursesPage = (req, res) => {
  res.status(200).render('courses', {
    page_name: 'courses',
  });
};

exports.dashboardPage = (req, res) => {
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
  });
};

exports.loginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.registerPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};
