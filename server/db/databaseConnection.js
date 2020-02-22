const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "12345", {
  host: "localhost",
  port: "5434",
  dialect: "postgres"
});

module.exports = sequelize;

//  docker run -d -e POSTGRES_PASSWORD=12345 -p 5434:5432 postgres
