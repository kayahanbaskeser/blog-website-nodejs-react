const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
const bodyParser = require("body-parser");

const sequelize = require("./db/databaseConnection");
const User = require("./models/user");
const isAuth = require("./middlewares/is-auth");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
});
app.use("/admin", isAuth.isAuth);

const Category = require("./models/category");
const Post = require("./models/post");
Category.hasMany(Post);
Post.belongsTo(Category, { foreignKey: "id_category" });

const userRouter = require("./routers/user");
const postRouter = require("./routers/post");
const categoryRouter = require("./routers/category");

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/category", categoryRouter);

sequelize
  .sync(
    // {force:true}
  )
  .then(async () => {
    await User.findByPk(1).then(user => {
      if (!user) {
        User.create({
          name: "admin",
          password: "12345",
          email: "admin@email.com"
        });
      }
    });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  });
