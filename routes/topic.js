const express = require("express");
const getAllTopics = require("./../controllers/topic");

const router = express.Router();

router.route("/").get(getAllTopics);

module.exports = router;
