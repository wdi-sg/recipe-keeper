const Model = require('./model')
const Ingredient = require('./ingredient.model')
const JSON_URI = './recipes.json'

class Recipe extends Model {

  static _connection = JSON_URI

  /*
  "ingredients": [
		{
			"fk_ingredientId": "MMmnE-EoR",
			"quantity": 10,
			"unit": "glass",
			"notes": "cook until broke"
		}
	],
   */
  constructor (name, ingredients = [], instructions) {
    super()
    this.name = name
    this.ingredients = []
    this.instructions = instructions
  }

  /*
  [
  {
    fk_ingredientId: 'MMmnE-EoR',
    quantity: 10,
    unit: 'glass',
    notes: 'cook until broke'
  }
]

   */
  async setIngredients (ingredientsArr) {
    // verify the all ingredients exist and Ingredient.have
    //todo: put fk_ingredientId inside ingredient as staticValidRefs
    const isValid = Ingredient.haveValidRefs(ingredientsArr, 'fk_ingredientId')
    if (!isValid) throw 'some ingredients contains ids that could not be found'
    console.info('ingredients added to recipe.... not saved yet')
    this.ingredients = ingredientsArr
  }

  _createIngredient (fk_ingredientId, quantity = 1, unit = '', notes = '') {
    const recipeIngredient = {
      fk_ingredientId, // uuid
      quantity, // number
      unit, // string
      notes // text
    }
    this.ingredients.push(recipeIngredient)
  }

}

module.exports = Recipe