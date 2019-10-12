const express = require("express");
const jsonfile = require("jsonfile");
const uuid = require("uuidv4").default;
const file = "data.json";
const ingredients = "ingredient.json";
const router = express.Router();

// show all
router.get("/", (req, res) => {
  jsonfile.readFile(file, (err, recipes) => {
    return res.render("recipes", recipes);
  });
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
  jsonfile.readFile(file, (err, data) => {
    const id = uuid();
    const {recipes} = data;
    const {title, ingredients, instructions} = req.body;
    const recipe = {
      id,
      title,
      ingredients,
      instructions,
    };
    data.recipes.push(recipe);
    jsonfile.writeFile(file, data, (err) => {
      res.redirect("/recipes");
    });
  });
});

// show one
router.get("/:id", (req, res) => {
  jsonfile.readFile(file, (err, data) => {
    const {recipes} = data;
    const {id} = req.params;
    let recipe;
    recipes.forEach((obj) => {
      if (obj.id === id) {
        recipe = obj;
      }
    });
    return res.render("recipe", recipe);
  });
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
