const Model = require('./model')
const JSON_URI = '../ingredients.json';

class Ingredient extends Model{

  static _connection = JSON_URI

  constructor (name) {
    super();
    this.name = name;
    this.disabled = false;
  }

}