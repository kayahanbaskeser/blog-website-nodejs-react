const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const sequelize = require("./db/databaseConnection");
const User = require("./models/user");

const userRouter = require("./routers/user");

app.get("/", userRouter);

sequelize
  .sync()
  .then(async () => {
    await User.findByPk(1).then((user) => {
      if(!user){
        User.create({ name: 'admin', password: '12345', email:'admin@email.com' })
      }
    });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  });
