const recipesFile = './recipes.json';
const jsonfile = require('jsonfile');
const Recipe = require('../models/recipe');
const dateUtility = require('../util/get-date');

module.exports.getAddRecipe = (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        res.render('add-recipe');
    })
}

module.exports.postAddRecipe = (req, res) => {
    console.log(req.body);

    jsonfile.readFile(recipesFile, (err, obj) => {

        if (!req.body.title || !req.body.ingredient || !req.body.instructions) {

            let formData = {
                message: "Please enter:\n"
            }

            if (!req.body.title) formData.message = formData.message + `\nTitle of the Recipe `

            if (!req.body.ingredient) formData.message = `${formData.message}\nAt least one ingredient`

            if (!req.body.instructions) formData.message = `${formData.message}\nAt least one instruction`

            res.render('add-recipe', formData)

        } else {

            console.log(req.body);

            const newRecipeId = (obj.recipes[obj.recipes.length - 1].id) + 1;

            const newRecipeIngredients = [];

            req.body.ingredient.name.forEach(item => {
                const itemIndex = req.body.ingredient.name.indexOf(item)

                newRecipeIngredients.push({
                    name: item,
                    amount: req.body.ingredient.amount[itemIndex],
                    notes: req.body.ingredient.notes[itemIndex]
                })
            })

            const newRecipe = new Recipe(
                newRecipeId,
                req.body.title,
                newRecipeIngredients,
                req.body.instructions,
                req.body.img,
                dateUtility.getCurrentDate()
            )

            newRecipe.save();

            res.redirect(`/recipes/${newRecipeId}`);

        }
    })
}

module.exports.getResetRecipes = (req, res) => {
    jsonfile.readFile('recipes2.json', (err, obj) => {
        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log(err)
            else res.send('reset');
        })
    })
}

module.exports.getRecipeById = (req, res) => {

    jsonfile.readFile(recipesFile, (err, obj) => {
        let recipeData = obj.recipes.find(recipe => recipe.id == req.params.id);
        res.render('recipe', recipeData);
    })
}

module.exports.getShowAllRecipes = (req, res) => {

    jsonfile.readFile(recipesFile, (err, obj) => {
        res.render('recipes', obj);
    })

}

module.exports.getEditRecipeById = (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let recipeData = obj.recipes.find(recipe => recipe.id == req.params.id);
        res.render('edit-recipe', recipeData);
    })
}

module.exports.putRecipeById = (req, res) => {

    jsonfile.readFile(recipesFile, (err, obj) => {
        let recipeData = obj.recipes.find(recipe => recipe.id == req.params.id);

        jsonfile.writeFile(recipesFile, obj)
            .then(() => {
                res.redirect(`/recipes/${req.params.id}`);
            })
            .catch(err => console.log(err));
    })
}

module.exports.getDeleteRecipeById = (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        obj.recipes.splice((obj.recipes.indexOf(obj.recipes
            .find(recipe => recipe.id == req.params.id))), 1);

        jsonfile.writeFile(recipesFile, obj)
            .then(() => {
                res.render(`recipe-deleted`);
            })
            .catch(err => console.log(err));
    })
}