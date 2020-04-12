const Model = require('./model')
const JSON_URI = './ingredients.json'
const jsonFile = require('jsonfile')

class Ingredient extends Model {

  static _connection = JSON_URI

  constructor (name) {
    super()
    this.name = name
    this.disabled = false
    this.fk_recipes = []
  }

  addRecipe (recipeId) {
    this.fk_recipes.push(recipeId)
  }

}

module.exports = Ingredient