const router = require('express').Router()
const Ingredient = require('../models/ingredient.model')
// const jsonfile = require('jsonfile')

// list all ingredients
router.route('/').get((req, res) => {
  Ingredient.findAll()
    .then(jsonArr => res.json(jsonArr))
    .then(err => res.status(400).json('Error: ' + err))
})

router.route('/new').post((req, res) => {
  const { name } = req.body
  const newIngredient = new Ingredient(name)
  newIngredient.save()
    .then(() => res.json('ingredient added:' + JSON.stringify(newIngredient)))
    .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/factory').post((req, res) => {
//   jsonfile.readFile('./ingredient.json')
//     .then(jsonArr => {
//       const objArr = jsonArr.map(obj => new Ingredient(obj.name))
//       jsonfile.writeFile('ingredients.json', objArr, { spaces: 4 })
//       res.json('mock ingredients added.')
//     }).catch(err => res.status(400).json('Error: ' + err))
// })

module.exports = router




