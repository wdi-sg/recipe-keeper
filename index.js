const express = require('express');
const app = express();
const { check } = require('express-validator')

const jsonfile = require('jsonfile');
const file = 'ingredient.json'; //or whatever your json file is called

// react engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

// Express
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Method OVerride
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// Add CSS file in a public folder
app.use(express.static(__dirname+'/public/'));



/* =========================================
// Display all the recipes
==========================================*/

app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.ingredient;
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        let data = {
            recipeKey : recipes,
            recipeId : recipes.id
        }

        // console.log(recipes);
        // response.send(recipes);
        response.render('home', data);
    });
});



/* =========================================
// Display a new recipe form
==========================================*/
app.get('/recipes/new', (request, response) => {
     jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.ingredient;
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        let data = {
            recipeKey : recipes,
            recipeId : recipes.id
        }
        console.log('num of recipes: ' , recipes.length);
        response.render('new', data);
    });
});



/* =========================================
// Add new recipe to json file
==========================================*/
app.post('/recipe', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        let newId = parseInt(request.body.id);
        let newName = request.body.name;

        console.log("new id: " + newId);
        console.log("new name: " + newName);

        let newRecipe = {
            id: newId,
            name: newName
        };

        console.log(newRecipe);

        // Add new recipe to json file
        obj.ingredient.push(newRecipe);


        // save the request body into json file
        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log('error writing file!');
                console.log(err);
                response.status(503).send("no!");
            }
        }); ////// end of writing json file //////
    });////// end of reading json file //////
    console.log("send response");
    response.send("New Recipe Added!");
});
/* =========================================
// See a single recipe
==========================================*/


/* ===========================================
// Display the form for editing a single recipe
===============================================*/


/* ===========================================
// Update a single recipe
===============================================*/


/* =========================================
// Remove a recipe
==========================================*/













/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));