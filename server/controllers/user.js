const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey = require("../constant");

exports.loginUser = (req, res) => {
  if (!req.body.name || !req.body.password) {
    return res
      .status(404)
      .send({ message: "Name or Password can not be empty" });
  } else {
    User.findOne({
      where: { name: req.body.name, password: req.body.password },
      attributes: ["name", "password"]
    }).then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      const token = jwt.sign({ name: user.name }, secretKey, {
        expiresIn: "2h"
      });
      return res.status(200).send({ token });
    });
  }
};
