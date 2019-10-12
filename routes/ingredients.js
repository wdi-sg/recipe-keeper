const express = require("express");
const jsonfile = require("jsonfile");
const file = "data.json";
const router = express.Router();

// show all
router.get("/", (req, res) => {
  return res.render("ingredients");
});

module.exports = router;
