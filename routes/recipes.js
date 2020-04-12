const router = require('express').Router()
const Recipe = require('../models/recipe.model')

router.route('/add').post((req, res) => {
  const { name, ingredients, instructions } = req.body
  const newRecipe = new Recipe(name, ingredients, instructions)
  newRecipe.save()
    .then(() => {
      console.info('new recipe saved: ')
      console.table(newRecipe)

    }).catch(e => res.status(400).json('Error:' + e))
})

module.exports = router
