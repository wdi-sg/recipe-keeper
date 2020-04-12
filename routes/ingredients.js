const router = require('express').Router()
const Ingredient = require('../models/ingredient.model')

router.route('/add').post((req,res) => {
  const {name} = req.body;
  const newIngredient = new Ingredient(name);

  newIngredient.save()
    .then(()=> res.json('ingredient added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router




