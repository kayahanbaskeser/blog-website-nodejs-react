const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const sequelize = require("./db/databaseConnection");
const User = require("./models/user");

const userRouter = require("./routers/user");

app.get("/", userRouter);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
});
