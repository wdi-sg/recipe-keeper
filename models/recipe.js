const recipesFile = './recipes.json';
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

}