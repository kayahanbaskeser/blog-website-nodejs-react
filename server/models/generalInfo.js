const Sequelize = require("sequelize");
const sequelize = require("../db/databaseConnection");

const generalInfo = sequelize.define("generalInfo", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  job: Sequelize.STRING,
  facebook: Sequelize.STRING,
  twitter: Sequelize.STRING,
  github: Sequelize.STRING,
  linkedin: Sequelize.STRING,
  instagram: Sequelize.STRING,
  gmail: Sequelize.STRING,
  footer: Sequelize.STRING
});

module.exports = generalInfo;
