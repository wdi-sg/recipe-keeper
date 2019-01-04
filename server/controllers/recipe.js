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
    });
  }
  static getOne(req, res) {
    let recipeId = req.params.id;
    return Recipe.findById(recipeId).then(recipe => {
      res.status(200).send(recipe);
      //     console.log(JSON.parse(JSON.stringify(recipe)))
    });
  }
  static updateOne(req, res) {
    let recipeId = req.params.id.substring(1);
    const nameInstance = req.body.recipeName;
    const ingredientsInstance = [];
    const instructionsInstance = [];

    req.body.ingredients.map(item => {
      let ingredient = {
        name: item.ingredientName,
        amount: item.ingredientAmount
      };
      ingredientsInstance.push(ingredient);
    });

    req.body.instructions.map(item => {
      instructionsInstance.push(item.instructionStep);
    });
    console.log("updating the recipe of id", typeof recipeId);

    return Recipe.update(
      {
        name: nameInstance,
        ingredients: ingredientsInstance,
        instructions: instructionsInstance
      },
      { where: { id: recipeId } }
    ).then(recipe => {
      console.log(recipe);
    });
  }
  static deleteOne(req, res) {
    let recipeId = req.params.id.substring(1);
    console.log(recipeId, " is getting deleted");
    return Recipe.destroy({ where: { id: recipeId } })
  }
}

module.exports = Recipes;
