const express = require("express");
const jsonfile = require("jsonfile");
const file = "data.json";
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index");
});

module.exports = router;
