const express = require("express");
const router = express.Router();
const controllerPost = require("../controllers/post");

router.post("/add", controllerPost.add);
router.post("/delete", controllerPost.delete);
router.post("/update", controllerPost.update);
router.post("/get", controllerPost.get);
router.post("/getAll", controllerPost.getAll);

module.exports = router;
