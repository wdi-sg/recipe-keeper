const express = require("express");
const jsonfile = require("jsonfile");
const file = "data.json";
const ingredients = "ingredient.json";
const router = express.Router();

// show all
router.get("/", (req, res) => {
  return res.render("recipes");
});

// get new
router.get("/new", (req, res) => {
  const {number} = req.query;
  jsonfile.readFile(ingredients, (err, ingredientsArr) => {
    return res.render("new", {ingredientsArr, number});
  });
});

// create new
router.post("/", (req, res) => {
  console.log("new recipe", req.body);
  jsonfile.readFile(ingredients, (err, dataArr) => {
    console.log("new Recipe", dataArr);
  });
  return res.render("recipes");
});

// show one
router.get("/:id", (req, res) => {
  return res.render("recipe");
});

// edit 1
router.get("/:id/edit", (req, res) => {
  return res.render("edit");
});

// update 1
router.put("/:id", (req, res) => {
  return res.render("recipe");
});

// delete 1
router.delete("/:id", (req, res) => {
  return res.render("recipe");
});


module.exports = router;
