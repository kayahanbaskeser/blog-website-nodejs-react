const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  console.log(req.headers.authorization)
  const token = req.headers.authorization
  console.log(decodedToken = jwt.verify(token, 'secretaq1'))
  next();
};
