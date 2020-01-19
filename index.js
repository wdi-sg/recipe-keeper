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



///////////////////////////////////////// DISPLAY ONE RECIPE /////////////////////////////////////////
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile('src/recipe.json', (err, obj) => {

        const allRecipes = obj['recipes'];
        let inputId = parseInt(request.params.id);

        for (let i = 0; i < allRecipes.length + 1; i++) {

            if (i === inputId) {

                const data = allRecipes[i - 1]
                response.render('selected-recipe', data)

            }

            if (inputId > allRecipes.length + 1) {
                response.send("Whoops! No such recipe!")
            }
        }
    });
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






/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));