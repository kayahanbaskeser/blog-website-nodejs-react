const jwt = require("jsonwebtoken");
const secretKey = require("../constant");

const isAuth = (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.headers.authorization, secretKey);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(400).send({
      message: "Siktir git."
    });
  }
};

module.exports = { isAuth };
