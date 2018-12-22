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

//Display Individual Recipe
app.get("/recipes/:id", (req, res) => {
    jsonfile.readFile('recipes.json', (err, obj) => {
        //Find Recipe
        for (let i = 0; i < obj.recipes.length; i++) {
            if (obj.recipes[i].id == req.params.id) {
                let currentRecipe = obj.recipes[i];
                let recipeAndLength = {
                    "recipe": currentRecipe,
                    "length": obj.recipes.length
                }
                res.render('recipe', recipeAndLength);
            }
        }
    });
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));