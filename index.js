/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const file = 'src/recipe.json';


//init express app
const app = express();


//post method config
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


//for method override
app.use(methodOverride('_method'));


//for react
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');



/**
 * ===================================
 * Routes
 * ===================================
 */

////////////////////////////////////////// CREATE NEW RECIPE //////////////////////////////////////////

app.get('/recipes/new', (request, response) => {

    response.render('home');

});


////////////////////////////////////// RECORD NEW RECIPE TO LIST //////////////////////////////////////
app.post('/recipes', (request, response) => {

    jsonfile.readFile('src/recipe.json', (err, obj) => {

        const allRecipes = obj['recipes'];
        console.log(allRecipes);

        allRecipes.push(request.body)

        jsonfile.writeFile('src/recipe.json', obj, (err) => {
            console.log(err)
        });

        console.log("NEW RECIPE RECORDEDDDDD")
        response.redirect('/recipes')

    });
});


////////////////////////////////////////// SHOW ALL RECIPES //////////////////////////////////////////
app.get('/recipes', (request, response) => {

    jsonfile.readFile('src/recipe.json', (err, obj) => {

        const allRecipes = obj.recipes;

        const data = { recipes: allRecipes }
        response.render('my-recipes', data)

    });
});


///////////////////////////////////////// DISPLAY ONE RECIPE /////////////////////////////////////////
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile('src/recipe.json', (err, obj) => {

        const allRecipes = obj.recipes;
        // const data = { recipes: allRecipes }

        if (request.params.id === allRecipes.length + 1) {
            for (let i = 0; i < allRecipes.length; i++) {

                response.render('selected-recipe', allRecipes[i])
            }
        }
    });
});


// app.get('/ingredient', (request, response) => {

//     jsonfile.readFile('ingredient.json', (err, obj) => {

//         let ingredients = obj;

//               good practice to send over data as an object so that in
//                 the future, if add more data, it can be converted.
//                 'pokemon' is now the new key of 'allPokemon'

//         const data = { allIngredients: ingredients }
//         // console.log(data) - access all objects

//         response.render('home', data);
//     })
// });








/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));