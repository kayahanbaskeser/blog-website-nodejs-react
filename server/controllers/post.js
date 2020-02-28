const Post = require("../models/post");

exports.add = (req, res) => {
  console.log(req.body)
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({ message: "Name or Description can not be empty" });
  }
  Post.create({
    title: req.body.title,
    description: req.body.description,
    posts_id_category_fkey: 2
  })
    .then(() => {
      res.send(200);
    })
    .catch(err => {
      console.log(err);
      res.send(400);
    });
};

exports.delete = (req, res) => {
  Post.findByPk(req.body.id).then(post => {
    if (post) {
      return post.destroy().then(() => {
        res.send(200);
      });
    }
    res.send(400);
  });
};

exports.get = (req, res) => {
  Post.findByPk(req.body.id)
    .then(post => {
      if (post) {
        res.json(post);
      }
      res.send(400);
    })
    .catch(err => {
      res.send(400);
    });
};

exports.getAll = (req, res) => {
  Post.findAll(
    // req.body.category && { where: { categoryId: req.body.category } }
  ).then(post => {
    res.json(post);
  });
};

exports.update = (req, res) => {
  Post.findByPk(req.body.id).then(post => {
    post.title = req.body.title;
    post.description = req.body.description;
    post
      .save()
      .then(() => {
        res.send(200);
      })
      .catch(() => {
        res.send(400);
      });
  });
};
