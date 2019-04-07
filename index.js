//===================================
// Configurations and set up
//===================================
const _ = require('lodash');
const uuidv1 = require('uuid/v1');
const express = require('express');
const promise = require("bluebird");
const methodOverride = require('method-override')
const jsonfile = promise.promisifyAll(require('jsonfile'));

const recipeDataFile = 'data/recipe.json';

const app = express();

let recipeData;

app.use(express.static('public')) // use to serve static files using express
app.use(methodOverride('_method')); // use to overcome HTML issue with sending PUT and DELETE request

// tell your app to use the module. This is to enable request.body for post request
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');


//===================================
// Server And Data Loader Function
//===================================
var startServer = function () {
    // read data before starting up server
    jsonfile.readFileAsync(recipeDataFile)
        .then((JSONContent) => {
            recipeData = JSONContent;
        })
        .then(() => {
            app.listen(3000);
        })
        .catch((err) => {
            console.log(err);
        });
}


//===================================
// Helper Function
//===================================
var addZero = function(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var getCurrentDateAndTime = function () {
    let d = new Date();
    let dt = `${ addZero(d.getDate()) }/${ addZero(d.getMonth() + 1) }/${ d.getFullYear() } ` +
                        `${ addZero(d.getHours()) }:${ addZero(d.getMinutes()) }:${ addZero(d.getSeconds()) }`;

    return dt;
}


// ===================================
// Request Handlers
// ===================================
var homeRequestHandler = function (request, response) {
    response.render('home', recipeData);
}

var newRecipeRequestHandler = function (request, response) {
    response.render('add', {"validation" : "none"});
}

var addNewRecipeRequestHandler = function (request, response) {
    if (request.body.title.length < 3 || request.body.instructions.length < 5) {
        response.render('add', {"validation" : "fail"});
    } else {
        let newRecipe = {
            id: uuidv1(),
            title: request.body.title,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
            img: "/img/laksa.jpg",
            created: getCurrentDateAndTime(),
            updated: ""
        };

        recipeData.recipes.push(newRecipe);

        jsonfile.writeFileAsync(recipeDataFile, recipeData)
            .then(() => {
                response.redirect(`/recipes/${ newRecipe.id }`);
            }).catch((err) => {
                response.send('There is an error adding a new recipe. Please try again later.');
                console.log(err);
            });;
    }
}

var editRecipeRequestHandler = function (request, response) {
    let recipe;

    _.forEach(recipeData.recipes, (o) => {
        if (o.id === request.params.id) {
            recipe = o;
        }
    });

    if (recipe !== undefined) {
        response.render('edit', recipe);
    } else {
        response.send(404, 'Not found!');
    }
}

var editExistingRecipeRequestHandler = function (request, response) {
    if (request.body.title.length < 3 || request.body.instructions.length < 5) {
        response.render('edit', {"validation" : "fail"});
    } else {
        _.forEach(recipeData.recipes, (o) => {
            if (o.id === request.params.id) {
                o.title = request.body.title;
                o.ingredients = request.body.ingredients;
                o.instructions = request.body.instructions;
                o.category = request.body.category;
                o.updated = getCurrentDateAndTime();
            }
        });

        jsonfile.writeFileAsync(recipeDataFile, recipeData)
            .then(() => {
                response.redirect(`/recipes/${ request.params.id }`);
            }).catch((err) => {
                response.send('There is an error updating the recipe. Please try again later.');
                console.log(err);
            });;
    }
}

var deleteRecipeRequestHandler = function (request, response) {
    let recipe;

    _.forEach(recipeData.recipes, (o) => {
        if (o.id === request.params.id) {
            recipe = o;
        }
    });

    if (recipe !== undefined) {
        response.render('delete', recipe);
    } else {
        response.send(404, 'Not found!');
    }
}

var deleteExistingRecipeRequestHandler = function (request, response) {
    _.remove(recipeData.recipes, (o) => {
        return o.id === request.params.id;
    });

    jsonfile.writeFileAsync(recipeDataFile, recipeData)
        .then(() => {
            response.redirect('/recipes');
        }).catch((err) => {
            response.send('There is an error deleting the recipe. Please try again later.');
            console.log(err);
        });;
}

var getRecipesByIdRequestHandler = function (request, response) {
    let recipe;

    _.forEach(recipeData.recipes, (o) => {
        if (o.id === request.params.id) {
            recipe = o;
        }
    });

    if (recipe !== undefined) {
        response.render('view', recipe);
    } else {
        response.send(404, 'Not found!');
    }
}

// ===================================
// Routes
// ===================================
app.get('/recipes', homeRequestHandler); // GET See all the recipes

app.get('/recipes/new', newRecipeRequestHandler); // GET Display the form for creating a single recipe
app.post('/recipes', addNewRecipeRequestHandler); // POST Create a new recipe

app.get('/recipes/:id/edit', editRecipeRequestHandler); // GET Display the form for editing a single recipe
app.put('/recipes/:id', editExistingRecipeRequestHandler); // PUT Update a recipe

app.get('/recipes/:id/delete', deleteRecipeRequestHandler); // GET Display the form for deleting a single recipe
app.delete('/recipes/:id', deleteExistingRecipeRequestHandler); // DELETE Remove a recipe

app.get('/recipes/:id', getRecipesByIdRequestHandler); // GET See a single recipe
app.get('/', homeRequestHandler); // GET See all the recipes

// ===================================
// Start Server
// ===================================
startServer();