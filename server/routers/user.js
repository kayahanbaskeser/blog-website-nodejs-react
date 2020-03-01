const express = require("express");
const router = express.Router();

const userControllar = require("../controllers/user");

router.post("/login", userControllar.loginUser);

module.exports = router;
