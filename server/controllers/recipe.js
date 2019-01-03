const model = require("../models");

const { Recipe } = model;

class Recipes {
  static createNew(req, res) {
    const name = req.body.recipeName;
    const ingredients = [];
    const instructions = [];


    req.body.ingredients.map(item => {
      let ingredient = {
        name: item.ingredientName,
        amount: item.ingredientAmount
      };
      ingredients.push(ingredient);
    });

    req.body.instructions.map(item => {
      instructions.push(item.instructionStep);
    });

    return Recipe.create({
      name,
      ingredients,
      instructions
    }).then(RecipeData =>
      res.status(201).send({
        success: true,
        message: "Recipe successfully created",
        RecipeData
      })
    );
  }
  static listAll(req, res) {
    return Recipe.findAll().then(recipes => {
      res.status(200).send(recipes);
      console.log(recipes[0].dataValues.ingredients[1].name);
    });
  }
}

module.exports = Recipes;
