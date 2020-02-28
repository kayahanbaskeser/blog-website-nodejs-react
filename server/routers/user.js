const express = require("express");
const router = express.Router();

const userControllar = require("../controllers/user");

router.get("/", userControllar.addUser);
router.post("/login", userControllar.loginUser);

module.exports = router;
