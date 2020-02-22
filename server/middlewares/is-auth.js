const User = require("../models/user");

exports.isAuth = (req, res, next) => {
  next();
};
