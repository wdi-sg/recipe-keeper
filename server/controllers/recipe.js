const model = require("../models");

const { Recipe } = model;

class Recipes {
  static createNew(req, res) {
    // const { name, ingredients, instructions } = req.body
    // console.log(typeof req.body.ingredients)
    let name = "dumplings";
    let ingredients = [
      {
        name: "dump",
        amount: "1 pound"
      },
      {
        name: "ling",
        amount: "500ml"
      }
    ];
    let instructions = ["dump it", "ling it"];
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
