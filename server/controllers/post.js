const Post = require("../models/post");

exports.add = (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.category) {
    return res
      .status(400)
      .send({ message: "Name or Description can not be empty" });
  }
  Post.create({
    title: req.body.title,
    description: req.body.description,
    categoryId: req.body.category
  })
    .then(() => {
      res.status(200).send({ message: "OK" });
    })
    .catch(err => {
      res.status(400).send({ message: "Something went wrong." });
    });
};

exports.delete = (req, res) => {
  if (!req.body.id) {
    return res.status(400).send({ message: "Post Id can not be empty" });
  }
  Post.findByPk(req.body.id).then(post => {
    if (post) {
      return post.destroy().then(() => {
        res.status(200).send({ message: "OK" });
      });
    }
    res.status(400).send({ message: "Something went wrong." });
  });
};

exports.get = (req, res) => {
  if (!req.body.id) {
    return res.status(400).send({ message: "Post Id can not be empty" });
  }
  Post.findByPk(req.body.id)
    .then(post => {
      if (post) {
        res.json(post);
      }
      res.status(400).send({ message: "Something went wrong." });
    })
    .catch(() => {
      res.status(400).send({ message: "Something went wrong." });
    });
};

exports.getAll = (req, res) => {
  Post.findAll(
    req.body.category && { where: { categoryId: req.body.category } }
  ).then(post => {
    res.json(post);
  });
};

exports.update = (req, res) => {
  if (!req.body.id || !req.body.title || !req.body.description) {
    return res.status(400).send({ message: "Empty Fields :(" });
  }
  Post.findByPk(req.body.id).then(post => {
    post.title = req.body.title;
    post.description = req.body.description;
    post
      .save()
      .then(() => {
        res.status(200).send({ message: "OK" });
      })
      .catch(() => {
        res.status(400).send({ message: "Something went wrong." });
      });
  });
};
