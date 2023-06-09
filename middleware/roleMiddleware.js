module.exports = (roles) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(403).send('You are not authorized to access this page');
    }
  };
};
