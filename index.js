//CONFIGS
const jsonfile = require('jsonfile');
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

//ROUTES
//Homepage. Shows All Recipes
app.get("/recipes", (req, res) => {
    jsonfile.readFile('recipes.json', (err, obj) => {
        res.render('recipes', obj);
    });
});

//Create New Recipe
app.post("/recipes", (req, res) => {
    jsonfile.readFile('recipes.json', (err, obj) => {
        let recipesArr = obj.recipes;
        recipesArr.push(req.body);
        let newRecipesJson = {recipes: recipesArr};
        jsonfile.writeFile('recipes.json', newRecipesJson, (err) => {
            console.log(err);
            res.redirect('/recipes/');
        })
    })

});

//Display A Recipe
app.get("/recipes/:id", (req, res) => {
    retrieveRecipe(req, res, 'recipe');
});

//Display Edit A Recipe Form
app.get("/recipes/:id/edit", (req, res) => {
    retrieveRecipe(req, res, 'editrecipe');
});

//Update A Recipe
app.put('/recipes/:id', (req, res) => {
    retrieveRecipe(req, res, 'recipe', 'update');
});

//Delete A Recipe
app.delete('/recipes/:id', (req, res) => {
    retrieveRecipe(req, res, 'recipes', 'delete');
});

function retrieveRecipe(req, res, render, method) {
    jsonfile.readFile('recipes.json', (err, obj) => {
        //Find Recipe
        let recipeAndLength;
        for (let i = 0; i < obj.recipes.length; i++) {
            if (obj.recipes[i].id == req.params.id) {
                switch (method) {
                    case 'update':
                        let currentRecipes = obj;
                        currentRecipes.recipes[i].title = req.body.title;
                        currentRecipes.recipes[i].ingredients = req.body.ingredients;
                        currentRecipes.recipes[i].instructions = req.body.instructions;
                        recipeAndLength = {
                            "recipes": currentRecipes,
                            "recipe": currentRecipes.recipes[i],
                            "length": currentRecipes.recipes.length
                        }
                        res.render(render, recipeAndLength);
                        break;

                    case 'delete':
                        // let newRecipes = obj.recipes.filter( (value, index, arr) => {
                        //     console.log(value.id);
                        //     console.log(req.params.id);
                        //     return value.id != req.params.id;
                        // });
                        obj.recipes.splice(parseInt(req.params.id)-1, 1);
                        let newRecipes = obj.recipes;
                        for (let i = 0; i < newRecipes.length; i++) {
                            newRecipes[i].id = i+1;
                        }
                        recipeAndLength = {
                            "newRecipesObj": {'recipes': newRecipes},
                            "recipes": newRecipes,
                            "length": newRecipes.length
                        }
                        jsonfile.writeFile('recipes.json', recipeAndLength.newRecipesObj, (err) => {
                            console.log(err);
                            res.render(render, recipeAndLength);
                        });
                        break;

                    default:
                        let currentRecipe = obj.recipes[i];
                        recipeAndLength = {
                            "recipe": currentRecipe,
                            "length": obj.recipes.length
                        }
                        res.render(render, recipeAndLength);
                }
            }
        }
    });
};

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));