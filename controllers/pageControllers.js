const nodeMailer = require('nodemailer');

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


exports.contactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter =  nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
          user:"your email",
          pass:"your password"
      },
    tls: {
      rejectUnauthorized: false
    }
  });

  let info = await transporter.sendMail({
    from: '"Smart EDU Contact 👻" <mk@gmail.com>', // sender address
    to: "mk@gmail.com", // list of receivers
    subject: "Smart EDU Contact Form New Message", // Subject line
    html: output, // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
  
  res.status(200).redirect('/contact');

};


