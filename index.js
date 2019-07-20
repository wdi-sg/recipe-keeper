const express = require('express');
const jsonfile = require('jsonfile');
const file = 'ingredient.json'; //or whatever your json file is called
const app = express();

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

app.get('/', (request, response) => {
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

        console.log(recipes);
        // response.send(recipes);
        response.render('home', data);
    });
});





/* =========================================
// Display a new recipe form
==========================================*/


/* =========================================
// Create a new recipe
==========================================*/


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