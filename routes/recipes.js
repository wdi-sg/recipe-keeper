const express = require("express");
const jsonfile = require("jsonfile");
const uuid = require("uuidv4").default;
const dateTime = require("../utils/dateTime");
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
    const lastUpdated = dateTime();
    const recipe = {
      id,
      title,
      ingredients,
      instructions,
      lastUpdated,
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
  const {number} = req.query;
  Promise.all([
    jsonfile.readFile(ingredients),
    jsonfile.readFile(file),
  ]).then((data) => {
    const ingredientsArr = data[0];
    const recipes = data[1].recipes;
    let recipe;
    const {id} = req.params;
    recipes.forEach((obj) => {
      if (obj.id === id) {
        recipe = obj;
      }
    });
    res.render("edit", {ingredientsArr, recipe, number});
  });
});

// update 1
router.put("/:id", (req, res) => {
  jsonfile.readFile(file, (err, data) => {
    data.recipes.forEach((recipe) => {
      if (recipe.id === req.params.id) {
        const {title, ingredients, instructions} = req.body;
        const lastUpdated = dateTime();
        recipe.title = title;
        recipe.ingredients = ingredients;
        recipe.instructions = instructions;
        recipe.lastUpdated = lastUpdated;
      }
    });
    jsonfile.writeFile(file, data, (err) => {
      res.redirect(`/recipes/${req.params.id}`);
    });
  });
});

// delete 1
router.delete("/:id", (req, res) => {
  jsonfile.readFile(file, (err, data) => {
    data.recipes.forEach((recipe, i) => {
      if (recipe.id === req.params.id) {
        data.recipes.splice(i, 1);
      }
    });
    jsonfile.writeFile(file, data, (err) => {
      res.redirect(`/recipes`);
    });
  });
});


module.exports = router;
