const Model = require('./model')
const JSON_URI = './ingredients.json'
const jsonFile = require('jsonfile')

class Ingredient extends Model {

  static _connection = JSON_URI
  static _keysToCheck = ['_id', 'name']

  constructor (name, fk_recipes = []) {
    super()
    this.name = name
    this.disabled = false
    this.fk_recipes = fk_recipes
  }
}

module.exports = Ingredient