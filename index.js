
const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const INGREDIENT = 'ingredient.json';
const RECIPES = 'data.json';

var publicPath = path.resolve(__dirname, 'public');
var port = process.env.PORT || 3000;
/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
app.use(express.static(publicPath));

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets handlebars to be the default view engine
app.set('view engine', 'jsx');

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// Reading ingredient

var ingredients = jsonfile.readFileSync(INGREDIENT, (err) => {
    if (err) console.error(err);
});

  var recipes = jsonfile.readFileSync(RECIPES, (err) => {
    if (err) console.error(err);
  });

// Begin Routing

app.get('/', (req, res) => {
    res.render('Home')
});

app.get('/recipes', (req, res) => {
    res.render('BrowseRecipes', {recipes: recipes.recipes, ingredients:ingredients})
});

app.get('/recipes/new', (req, res) => {
    res.render('NewRecipe', {ingredients : ingredients})
})

app.get('/recipes/:recipeId', (req, res) => {
 
    var recipe = recipes.recipes.find(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
 
    res.render('DisplayRecipe', {recipe : recipe, ingredients : ingredients})
})

app.get('/recipes/:recipeId/edit', (req, res) => {
    var recipe = recipes.recipes.find(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
 
    res.render('EditRecipe', {recipe : recipe, ingredients : ingredients})

})

app.get('/recipes/:recipeId/delete', (req, res) => {
    var recipe = recipes.recipes.find(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
 
    res.render('DeleteRecipe', {recipe : recipe, ingredients : ingredients})

})

app.get('/RecipeSaved', (req, res) => {
    res.render('ReportStatus', {reportStatus: "Recipe Saved"})
});

app.delete('/recipes/:recipeId', (req, res) => {
    var idx = recipes.recipes.findIndex(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
   
    recipes.recipes.splice(idx, 1);

    jsonfile.writeFile(RECIPES, recipes, (err) => {

        if (err) {
            // send 404 back
            res.status(404);
            res.send(err);
        } else {
            // res.status(200);
            // res.render('RecipeSaved')
            // res.send("Recipe Saved");
            res.render('ReportStatus', {reportStatus: "Recipe Deleted"})
        
        }
    
    });
})

app.put('/recipes/:recipeId', (req, res) => {
 
    // var recipe = recipes.recipes.find(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
 
    // res.render('DisplayRecipe', {recipe : recipe, ingredients : ingredients})
    if (req.body.name.length === 0) {
        res.render('ReportStatus', {reportStatus: "No recipe name entered. Recipe not save."})
    } else if (req.body.summary.length === 0) {
        res.render('ReportStatus', {reportStatus: "No summary entered. Recipe not save."})
    } else if (!req.body.ingredients || req.body.ingredients.length === 0) {
        res.render('ReportStatus', {reportStatus: "No ingredients entered. Recipe not save."})
    } else if (req.body.instructions.length === 0) {
        res.render('ReportStatus', {reportStatus: "No instructions entered. Recipe not save."})
    } else {
        // var recipes = jsonfile.readFileSync(RECIPES, (err, recipes) => {
        //     if (err) console.error(err);
        // });

        var idx = recipes.recipes.findIndex(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
        recipes.recipes[idx].name = req.body.name;
        recipes.recipes[idx].summary = req.body.summary;
        recipes.recipes[idx].ingredients = req.body.ingredients;
        recipes.recipes[idx].instructions = req.body.instructions;

        jsonfile.writeFile(RECIPES, recipes, (err) => {

            if (err) {
                // send 404 back
                res.status(404);
                res.send(err);
            } else {
                // res.status(200);
                // res.render('RecipeSaved')
                // res.send("Recipe Saved");
                res.render('ReportStatus', {reportStatus: "Recipe Saved"})
            
            }
        
        });

    }
    
})



app.post('/recipes', (req, res) => {

    if (req.body.name.length === 0) {
        res.render('ReportStatus', {reportStatus: "No recipe name entered. Recipe not save."})
    } else if (req.body.summary.length === 0) {
        res.render('ReportStatus', {reportStatus: "No summary entered. Recipe not save."})
    } else if (!req.body.ingredients || req.body.ingredients.length === 0) {
        res.render('ReportStatus', {reportStatus: "No ingredients entered. Recipe not save."})
    } else if (req.body.instructions.length === 0) {
        res.render('ReportStatus', {reportStatus: "No instructions entered. Recipe not save."})
    } else {
        var recipe = {
            recipeId: 0,
            name: req.body.name,
            summary: req.body.summary,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions
        }

        var recipes = jsonfile.readFileSync(RECIPES, (err, recipes) => {
            if (err) console.error(err);
        });

        recipes.recipeId = parseInt(recipes.recipeId) + 1;
        recipe.recipeId = parseInt(recipes.recipeId);
        recipes.recipes.push(recipe);

        jsonfile.writeFile(RECIPES, recipes, (err) => {

            if (err) {
                // send 404 back
                res.status(404);
                res.send(err);
            } else {
                // res.status(200);
                // res.render('RecipeSaved')
                // res.send("Recipe Saved");
                res.render('ReportStatus', {reportStatus: "Recipe Saved"})
            
            }
        
        });

    }

    app.get('/recipes/:recipeId/delete', (req, res) => {
        var recipe = recipes.recipes.find(rec => parseInt(rec.recipeId) === parseInt(req.params.recipeId));
     
        res.render('DeleteRecipe', {recipe : recipe, ingredients : ingredients})
    
    })

    

    app.get('*', (req, res) => {
        res.redirect('/')
    })

});
/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(port, () => console.log(`~~~ Tuning in to the waves of port ${port} ~~~`));
