const recipesFile = './data/recipes.json';
const jsonfile = require('jsonfile');

module.exports = class Recipe {

    constructor(id, title, ingredients, instructions, img, dateCreated) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.img = img;
        this.dateCreated = dateCreated;

    }

    save() {
        jsonfile.readFile(recipesFile, (err, obj) => {

            obj.recipes.push(this);

            jsonfile.writeFile(recipesFile, obj)
                .then(res => {
                    console.log('Recipe added');
                })
                .catch(err => console.log(err));
        })
    }

    replace() {

        jsonfile.readFile(recipesFile, (err, obj) => {

            const targetRecipeIndex = obj.recipes.indexOf(obj.recipes.find(recipe =>
                recipe.id == this.id))

            obj.recipes[targetRecipeIndex].title = this.title;
            obj.recipes[targetRecipeIndex].ingredients = this.ingredients;
            obj.recipes[targetRecipeIndex].instructions = this.instructions;
            obj.recipes[targetRecipeIndex].img = this.img;

            jsonfile.writeFile(recipesFile, obj)
                .then(res => {
                    console.log('Recipe updated');
                })
                .catch(err => console.log(err));
        })
    }

}