const express = require("express");
const jsonfile = require("jsonfile");
const file = "data.json";
const ingredients = "ingredient.json";
const router = express.Router();

// show all
router.get("/", (req, res) => {
  Promise.all([
    jsonfile.readFile(ingredients),
    jsonfile.readFile(file),
  ]).then((data) => {
    const ingredientsArr = data[0];
    const recipes = data[1].recipes;
    res.render("ingredients", {ingredientsArr, recipes});
  });
});

module.exports = router;
