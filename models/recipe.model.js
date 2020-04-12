const Model = require('./model')
const JSON_URI = './recipes.json'

class Recipe extends Model {

  static _connection = JSON_URI

  constructor (name, instructions, ingredients) {
    super(JSON_URI)
    this.name = name
    this.ingredients = this._addIngredients(ingredients) // array of ingredients
    this.instructions = instructions
  }

  _addIngredients (ingredientsArr) {
    // verify the all ingredients exist
    Recipe.haveValidRefs(ingredientsArr)
      .then((res) => {
        if (res) {
          this.ingredients = ingredientsArr
          console.info('ingredients added to recipe.... not saved yet')
        } else {
          console.error('ingredient id reference not found.')
        }
      })
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