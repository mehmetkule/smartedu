exports.homePage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.aboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.loginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};


// exports.contactPage = (req, res) => {
//   res.status(200).render('contact', {
//     page_name: 'contact',
//   });
// };

// exports.courseSinglePage = (req, res) => {
//   res.status(200).render('course', {
//     page_name: 'course',
//   });
// };

// exports.coursesPage = (req, res) => {
//   res.status(200).render('courses', {
//     page_name: 'courses',
//   });
// };

// exports.dashboardPage = (req, res) => {
//   res.status(200).render('dashboard', {
//     page_name: 'dashboard',
//   });
// };



