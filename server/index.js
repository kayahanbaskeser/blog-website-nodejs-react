const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
const bodyParser = require("body-parser");

const sequelize = require("./db/databaseConnection");
const User = require("./models/user");
const GeneralInfo = require("./models/generalInfo");
const { isAuth } = require("./middlewares/is-auth");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
});
app.use("/admin", isAuth);

const Category = require("./models/category");
const Post = require("./models/post");
Post.belongsTo(Category, { as: "category" });

const userRouter = require("./routers/user");
const postRouter = require("./routers/post");
const categoryRouter = require("./routers/category");
const categoryGeneralInfo = require("./routers/generalInfo");

app.use(userRouter);
app.use("/admin/post", postRouter);
app.use("/admin/category", categoryRouter);
app.use("/generalInfo", categoryGeneralInfo);

sequelize
  .sync
  // {force:true}
  ()
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
  .then(async () => {
    await GeneralInfo.findByPk(1).then(generalInfo => {
      if (!generalInfo) {
        GeneralInfo.create({
          name: "",
          description: "",
          job: "",
          facebook: "",
          twitter: "",
          github: "",
          linkedin: "",
          instagram: "",
          gmail: "",
          footer: ""
        });
      }
    });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  });
