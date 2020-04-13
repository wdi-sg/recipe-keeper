const recipesFile = './data/recipes.json';
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
            // const newRecipeId = (obj.recipes[obj.recipes.length - 1].id) + 1;
            const newRecipeId = obj.recipes
                .map(recip => recip.id)
                .sort()[obj.recipes.length - 1] + 1;


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
    jsonfile.readFile('./data/recipes2.json', (err, obj) => {
        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log(err)
            else res.render('reset');
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

        if (!req.body.title || !req.body.ingredient || !req.body.instructions) {

            let formData = {
                message: "Please enter:\n"
            }

            if (!req.body.title) formData.message = formData.message + `\nTitle of the Recipe `

            if (!req.body.ingredient) formData.message = `${formData.message}\nAt least one ingredient`

            if (!req.body.instructions) formData.message = `${formData.message}\nAt least one instruction`

            res.render('edit-recipe')

        } else {

            const updatedRecipeId = req.params.id;

            const updatedRecipeIngredients = [];

            req.body.ingredient.name.forEach(item => {
                const itemIndex = req.body.ingredient.name.indexOf(item)

                updatedRecipeIngredients.push({
                    name: item,
                    amount: req.body.ingredient.amount[itemIndex],
                    notes: req.body.ingredient.notes[itemIndex]
                })
            })

            const updatedRecipe = new Recipe(
                updatedRecipeId,
                req.body.title,
                updatedRecipeIngredients,
                req.body.instructions,
                req.body.img,
                dateUtility.getCurrentDate()
            )

            updatedRecipe.replace()
        }

        res.redirect(`/recipes/${req.params.id}`)

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

module.exports.getSortedRecipes = (req, res) => {

    jsonfile.readFile(recipesFile, (err, obj) => {

        const selectedProp = req.body.property;

        const compareSelectedProp = (a, b) => {

            const valueA = a[selectedProp];
            const valueB = b[selectedProp];
            let comparisonVal = 0;

            if (valueA > valueB) {
                comparisonVal = 1;
            } else if (valueA < valueB) {
                comparisonVal = -1;
            }

            return comparisonVal;
        }

        if (req.body.property == 'title') {

            obj.recipes.sort(compareSelectedProp);

        } else if (req.body.property == 'dateCreated') {

            const compareDates = (a, b) => {

                const valueA = Date.parse(a["dateCreated"]);
                const valueB = Date.parse(b["dateCreated"]);
                let comparisonVal = 0;

                if (valueA > valueB) {
                    comparisonVal = 1;
                } else if (valueA < valueB) {
                    comparisonVal = -1;
                }

                return comparisonVal;
            }

            obj.recipes.sort(compareDates);

        } else if (req.body.property == 'ingredientNumber') {
            const compareIngredLength = (a, b) => {

                const valueA = a["ingredients"].length;
                const valueB = b["ingredients"].length;
                let comparisonVal = 0;

                if (valueA < valueB) {
                    comparisonVal = 1;
                } else if (valueA > valueB) {
                    comparisonVal = -1;
                }

                return comparisonVal;
            }

            obj.recipes.sort(compareIngredLength);
        }


        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log(err)
            else {
                res.redirect('/recipes');
            }
        })
    })
}