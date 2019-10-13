//*** basic boilerplate ***//
const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */

//home recipe page
app.get('/', (req, res) => {
    console.log("HOME RECIPE PAGE")
    res.render('home')
});



//create a new recipe
//not working
app.post('/newrecipe', (req, res) => {
    console.log("NEW RECIPE");

    jsonfile.readFile(file, (err, obj) => {
        let addedRecipe = request.body;
        let allRecipe = obj;
        allRecipe.recipes.push(addedRecipe);
        let newRecipeDetails = {
            title: request.body.title,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions
        }
        response.render('newrecipeadded', newRecipeDetails);

        jsonfile.writeFile(file, allRecipe, (err) => {
            if (err) {
                console.log(err);
            }
        })
        console.log("NEW RECIPE ADDED INTO LIST")
    });
});

//see all the recipes
app.get('/allrecipes', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.recipes;
        console.log(recipes)
        res.send(recipes);
    });
});

//edit a recipe


// //update a single recipe
// app.put('/recipes/:id', (req, res) => {
// 	jsonfile.readFile(file, (err, obj) => {
// 	let requestRecipe = request.params.recipe
    
//     }
// })



/**
 * ===================================*
 * Listen to requests on port 3000    *
 * ===================================* 
 **/
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));