const Model = require('./model')
const JSON_URI = '../recipes.json';

class Recipe extends Model{

  static _connection = JSON_URI

  constructor (name) {
    super(JSON_URI)
    this.name = name;
  }

}