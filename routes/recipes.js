const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');


const router = express.Router();

const recipesFile = 'recipes.json';

router.use(express.urlencoded({
    extended: true
}));

router.use(express.static(path.join(__dirname, '..', '/public/')));

//

router.get('/new', (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        console.log(formData);
        res.render('create-recipe');
    })


})

router.post('/', (req, res) => {
    console.log(req.body);

    jsonfile.readFile(recipesFile, (err, obj) => {

        if (!req.body.title || !req.body.name || !req.body.instructions) {

            let formData = {
                message: ""
            }

            if (!req.body.title) formData.message = formData.message + `\nPlease enter the title of the recipe`

            if (!req.body.name) formData.message = formData.message + `\nPlease enter at least one ingredient`

            if (!req.body.intsructions) formData.message = formData.message + `\nPlease enter at least one instruction`

            res.render('create-recipe', formData)

        } else {

            const newRecipeId = (obj.recipes[obj.recipes.length - 1].id) + 1;

            const newRecipe = {
                id: newRecipeId,
                title: req.body.title,
                ingredients: [req.body.name],
                instructions: [req.body.instructions]
            }

            jsonfile.writeFile(file, obj, (err) => {
                if (err) console.log(err)
                else {
                    obj.push(newRecipe);
                    let recipeData = obj.recipes.find(recipe => recipe.id == req.params.id);
                    console.log(recipeData);
                    res.render('recipe', recipeData);
                }
            })
        }
    })
})

router.get('/:id/edit', (req, res) => {
    res.send(`Display the form for editing recipe number ${req.params.id}`);
})

router.get('/reset', (req, res) => {
    jsonfile.readFile('recipes2.json', (err, obj) => {
        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log(err)
            else res.send('reset');
        })
    })
})

router.get('/:id', (req, res) => {

    jsonfile.readFile(recipesFile, (err, obj) => {
        let recipeData = obj.recipes.find(recipe => recipe.id == req.params.id);
        res.render('recipe', recipeData);
    })

    // res.send(`Show a single recipe: Recipe number ${req.params.id}`);
})

router.get('/', (req, res) => {
    res.send('See all the recipes');
})

// router.put('/recipes/:id', (req, res) => {

// })



module.exports = router;