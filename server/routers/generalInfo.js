const express = require("express");
const router = express.Router();
const controllerGeneralInfo = require("../controllers/generalInfo");
const { isAuth } = require("../middlewares/is-auth");

router.get("/get", controllerGeneralInfo.get);
// router.post("/update", isAuth, controllerGeneralInfo.update);

module.exports = router;
