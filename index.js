/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const jsonfile = require('jsonfile');
const FILE = 'recipes.json';

const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public/'));
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

//retrieve or ask for new recipe
 app.get('/recipes/:id', (request, response) => {
    console.log("Received request for: " + request.params.id);

    // read data from json file
    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            console.log(err);
        }
        // Debug - check json file is read
        // obj is the object from the recipes json file
        // console.log(obj.recipes);

        // extract input data from request
        let inputId = parseInt(request.params.id)-1;

        // find recipe by index from the recipes json file
        var recipe = obj.recipes[inputId];

        // if not found or params is 'new'
        if (recipe === undefined || request.params.id === "new") {
            //add new recipe if index not taken or new
            console.log("Requesting new recipe");
            response.render('new');
        // display found recipe
        } else {
            recipe.message = "Found";
            // Debug - check recipe found
            console.log(recipe);
            response.render('found', recipe);
        }
    });
});

// get new recipe
app.post('/recipes/new', (request, response) => {
    console.log(request.body);
    let newRecipe = request.body;
    let recipeExist = false;

    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
        console.log(err);
        }

        let existingRecipe = obj.recipes;
        // check if recipe title already exist
        existingRecipe.forEach( recipe => {
            if ( newRecipe.title.toLowerCase() === recipe.title.toLowerCase() ) {
                recipeExist = true;
                let exists = { message: "Recipe's title already exists!"}
                response.render('new', exists);
            }
        });

        if (recipeExist === false) {

            obj.recipes.push(newRecipe);

            jsonfile.writeFile(FILE, obj, (err) => {
                if (err) {
                    console.error(err);
                }

                newRecipe.message = "Added"
                response.render('found', newRecipe);
            })

        }
    })
})



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));