const router = require('express').Router()
const Ingredient = require('../models/ingredient.model')
const jsonfile = require('jsonfile')

router.route('/add').post((req, res) => {
  const { name } = req.body
  const newIngredient = new Ingredient(name)

  newIngredient.save()
    .then(() => res.json('ingredient added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/factory').post((req, res) => {
  jsonfile.readFile('./ingredient.json')
    .then(jsonArr => {
      const objArr = jsonArr.map(obj => new Ingredient(obj.name))
      jsonfile.writeFile('ingredients.json', objArr, { spaces: 4 })
      res.json('mock ingredients added.')
    }).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router




