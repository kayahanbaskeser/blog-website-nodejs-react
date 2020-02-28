const express = require("express");
const router = express.Router();
const controllerCategory = require("../controllers/category");

router.post("/add", controllerCategory.add);
router.post("/delete", controllerCategory.delete);
router.post("/update", controllerCategory.update);
router.post("/get", controllerCategory.get);
router.get("/getAll", controllerCategory.getAll);

module.exports = router;
