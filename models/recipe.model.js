const Model = require('./model')
const Ingredient = require('./ingredient.model')
const JSON_URI = './recipes.json'

class Recipe extends Model {

  static _connection = JSON_URI
  static _keysToCheck = ['_id', 'name']
  static _fkName = 'fk_recipes'

  // idea: how does relationship modeling work?
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

  get plainObj () {
    return {
      id: this.id,
      name: this.name,
      ingredients: this.ingredients,
      instructions: this.instructions
    }
  }

  static async mapRecipeIngredients (recipesArr) {
    const recipesWithIngredients = Promise.all(recipesArr.map(async recipe => {
      const recipeIngredients = recipe.ingredients
      const newRecipe = await Promise.all(recipeIngredients.map(async recipeIngredient => {
        const ingredientModel = await Ingredient.findById(recipeIngredient[Ingredient._fkName])
        const ingredientObjProps = ingredientModel.getPlainObj()
        return { ...recipeIngredient, ...ingredientObjProps }
      }))
      return newRecipe
    }))
    return recipesWithIngredients
  }

  async setIngredients (ingredientsArr) {
    // verify the all ingredients exist and Ingredient.have
    //todo: put fk_ingredientId inside ingredient as staticValidRefs
    const isValid = Ingredient.haveValidRefs(ingredientsArr, 'fk_ingredientId')
    if (!isValid) throw 'some ingredients contains ids that could not be found'
    console.info('ingredients added to recipe.... not saved yet')
    this.ingredients = ingredientsArr
  }
}

module.exports = Recipe