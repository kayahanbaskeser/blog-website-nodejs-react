const GeneralInfo = require("../models/generalInfo");

exports.get = (req, res) => {
  GeneralInfo.findByPk(1)
    .then(info => {
      res.json(info);
    })
    .catch(() => {
      res.status(400).send({ message: "Something went wrong." });
    });
};

exports.update = (req, res) => {
  GeneralInfo.findByPk(1).then(info => {
    info.name = req.body.name;
    info.description = req.body.description;
    info.job = req.body.job;
    info.facebook = req.body.facebook;
    info.twitter = req.body.twitter;
    info.github = req.body.github;
    info.linkedin = req.body.linkedin;
    info.instagram = req.body.instagram;
    info.gmail = req.body.gmail;
    info.footer = req.body.footer
      .then(() => {
        res.status(200).send({ message: "OK" });
      })
      .catch(() => {
        res.status(400).send({ message: "Something went wrong." });
      });
  });
};
