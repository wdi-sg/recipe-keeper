const recipesFile = './recipes.json';
const ingredientsFile = './ingredients.json';
const jsonfile = require('jsonfile');

module.exports.getAllIngredients = (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        res.render('ingredients', obj)
    });
}