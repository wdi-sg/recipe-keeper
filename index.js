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
    retrieveRecipe(req, res, 'recipe', false);
});

//Display Edit A Recipe Form
app.get("/recipes/:id/edit", (req, res) => {
    retrieveRecipe(req, res, 'editrecipe', false);
});

//Update A Recipe
app.put('/recipes/:id', (req, res) => {
    retrieveRecipe(req, res, 'recipe', true);
});

function retrieveRecipe(req, res, render, update) {
    jsonfile.readFile('recipes.json', (err, obj) => {
        //Find Recipe
        for (let i = 0; i < obj.recipes.length; i++) {
            if (obj.recipes[i].id == req.params.id) {
                if (update) {
                    let currentRecipes = obj;
                    currentRecipes.recipes[i].title = req.body.title;
                    currentRecipes.recipes[i].ingredients = req.body.ingredients;
                    currentRecipes.recipes[i].instructions = req.body.instructions;
                    let recipeAndLength = {
                        "recipes": currentRecipes,
                        "recipe": currentRecipes.recipes[i],
                        "length": currentRecipes.recipes.length
                    }
                    res.render(render, recipeAndLength);
                } else {
                    let currentRecipe = obj.recipes[i];
                    let recipeAndLength = {
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