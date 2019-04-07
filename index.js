/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
const jsonfile = require('jsonfile');
//console.log("about to require express");
const express = require('express');
const app = express();
// console.log("done creating app");

const file = 'data.json';

//serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static(__dirname + '/public/'));

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');



/**
 * ===================================
 * Request Handler
 * ===================================
 */
var newRecipe = function(request, response) {
    response.render('new');
}

var createRecipe = function(request, response) {

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        let newRecipe = {
            "id": obj.recipes.length + 1,
            "recipeTitle": request.body.recipeTitle,
            "ingredients": request.body.ingredients,
            "instructions": request.body.instructions,
        }

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(file, obj, (err) => {
            if (err) console.error(err);
        });

        response.render('show', newRecipe);

    });
};

var showRecipe = function(request, response) {

    let id = parseInt(request.params.id);
    var index;

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        for (let i = 0; i < obj.recipes.length; i++) {
            if (id === obj.recipes[i].id) {
                index = i;
            }
        }

        let selectedRecipe = obj.recipes[index];

        if (selectedRecipe === undefined) {
            response.status(404);
            response.send("Error: Recipe not found");
        } else {
            response.render('show', selectedRecipe);
        }
    });
};

var indexRecipe = function(request, response) {

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        let allRecipesData = obj;

        response.render('index', allRecipesData);
    })
}

var editRecipe = function(request, response) {

    let id = parseInt(request.params.id);
    var index;

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        for (let i = 0; i < obj.recipes.length; i++) {
            if (id === obj.recipes[i].id) {
                index = i;
            }
        }

        let selectedRecipe = obj.recipes[index];

        if (selectedRecipe === undefined) {
            response.status(404);
            response.send("Error: Recipe not found");
        } else {
            response.render('edit', selectedRecipe);
        }
    })
}

var updateRecipe = function(request, response) {

    let id = parseInt(request.params.id);
    var index;

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        for (let i = 0; i < obj.recipes.length; i++) {
            if (id === obj.recipes[i].id) {
                index = i;
            }
        }

        let originalRecipeTitle = obj.recipes[index].recipeTitle;

        obj.recipes[index].recipeTitle = request.body.recipeTitle;
        obj.recipes[index].ingredients = request.body.ingredients;
        obj.recipes[index].instructions = request.body.instructions;

        // we dont need to reassign this, but lets be explicit about the change
        const changedObj = obj;

        jsonfile.writeFile(file, changedObj, (err) => {
            if (err) console.error(err);

            response.send(`Edited Recipe: ${originalRecipeTitle}.`)
        });
    })
}

var deleteRecipe = function(request, response) {

    let id = parseInt(request.params.id);
    var index;

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        for (let i = 0; i < obj.recipes.length; i++) {
            if (id === obj.recipes[i].id) {
                index = i;
            }
        }

        let selectedRecipe = obj.recipes[index];

        if (selectedRecipe === undefined) {
            response.status(404);
            response.send("Error: Recipe not found");
        } else {
            response.render('delete', selectedRecipe);
        }
    })
}

var destroyRecipe = function(request, response) {

    let id = parseInt(request.params.id);
    var index;

    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err);

        for (let i = 0; i < obj.recipes.length; i++) {
            if (id === obj.recipes[i].id) {
                index = i;
            }
        }

        let originalRecipeTitle = obj.recipes[index].recipeTitle;

        obj.recipes.splice(index, 1);

        jsonfile.writeFile(file, obj, (err) => {
            if (err) console.error(err);

            response.send(`Deleted Recipe: ${originalRecipeTitle}.`);
        })
    })
}

/**
 * ===================================
 * Routes
 * ===================================
 */
app.get('/recipes/new', newRecipe);
app.post('/recipes', createRecipe);

app.get('/', indexRecipe);
app.get('/recipes/', indexRecipe);
app.get('/recipes/:id', showRecipe);

app.get('/recipes/:id/edit', editRecipe);
app.put('/recipes/:id', updateRecipe);

app.get('/recipes/:id/delete', deleteRecipe);
app.delete('/recipes/:id', destroyRecipe);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
console.log('~~~ Tuning in to the waves of port 3000 ~~~')
const port = 3000;
// console.log("start listening");
app.listen(port)
// console.log("done listening");