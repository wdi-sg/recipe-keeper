const router = require('express').Router()
const Recipe = require('../models/recipe.model')
const Ingredient = require('../models/ingredient.model')


router.route('/').get((req, res) => {
  Recipe.findAll()
    .then(jsonArr => Recipe.mapRecipeIngredients(jsonArr))
    .then(newJsonArr => res.render('recipe/recipes-list', { recipes: newJsonArr }))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id).then((obj) => res.json(JSON.stringify(obj)))
})

router.route('/add').post((req, res) => {
  const { name, ingredients, instructions } = req.body
  const newRecipe = new Recipe(name, instructions)
  newRecipe.setIngredients(ingredients).then(async () => {
    for (const ingredient of ingredients) {
      const ingredientModel = await Ingredient.findById(ingredient[Ingredient._fkName])
      await ingredientModel.update(['fk_recipes', newRecipe.id], true)
      console.info('recipe fk added to ingredient:' + newRecipe.id)
    }
  })
  newRecipe.save()
    .then(() => res.json(newRecipe))
    .catch(e => res.status(400).json(e))
})

module.exports = router
