const express = require("express");
const router = express.Router();

const userControllar = require("../controllers/user");

router.get("/", userControllar.addUser);

module.exports = router;
