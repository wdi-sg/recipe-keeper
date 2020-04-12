const router = require('express').Router()
const Recipe = require('../models/recipe.model')
const Ingredient = require('../models/ingredient.model')

router.route('/').get((req, res) => {
  Recipe.findAll()
    .then(jsonArr => res.json(jsonArr))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const { name, ingredients, instructions } = req.body
  const newRecipe = new Recipe(name, instructions)
  newRecipe.setIngredients(ingredients).then(async () => {
    for (const ingredient of ingredients) {
      const ingredientModel = await Ingredient.findById(ingredient.fk_ingredientId)
      ingredientModel.update(['fk_recipes', newRecipe.id], true)
      console.info('recipe fk added to ingredient:' + newRecipe.id)
    }
  })
  newRecipe.save()
    .then(() => res.json(newRecipe))
    .catch(e => res.status(400).json(e))
})

module.exports = router
