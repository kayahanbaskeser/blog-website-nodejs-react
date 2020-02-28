const Category = require("../models/category");

exports.add = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Category Name can not be empty" });
  }
  Category.create({
    name: req.body.name
  })
    .then(() => {
      res.status(202).send({ message: "OK" });
    })
    .catch(() => {
      res.status(400).send({ message: "Something went wrong." });
    });
};

exports.delete = (req, res) => {
  if (!req.body.id) {
    return res.status(400).send({ message: "Category Id can not be empty" });
  }
  Category.findByPk(req.body.id).then(category => {
    if (category) {
      return category.destroy().then(() => {
        res.status(200).send({ message: "OK" });
      });
    }
    res.status(400).send({ message: "Something went wrong." });
  });
};

exports.get = (req, res) => {
  if (!req.body.id) {
    return res.status(400).send({ message: "Category Id can not be empty" });
  }
  Category.findByPk(req.body.id)
    .then(category => {
      if (category) {
        res.json(category);
      }
      res.status(400).send({ message: "Something went wrong." });
    })
    .catch(err => {
      res.status(400).send({ message: "Something went wrong." });
    });
};

exports.getAll = (req, res) => {
  Category.findAll().then(categories => {
    res.json(categories);
  });
};

exports.update = (req, res) => {
  if (!req.body.id || !req.body.name) {
    return res
      .status(400)
      .send({ message: "Category Id or Name can not be empty" });
  }
  Category.findByPk(req.body.id).then(category => {
    category.name = req.body.name;
    category
      .save()
      .then(() => {
        res.status(200).send({ message: "OK" });
      })
      .catch(() => {
        res.status(400).send({ message: "Something went wrong." });
      });
  });
};
