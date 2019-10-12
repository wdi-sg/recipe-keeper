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

// retrieve or ask for new recipe
 app.get('/recipes/:id', (request, response) => {
    // Debug - check input received
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
        let recipe = obj.recipes[inputId];

        // if not found or params is 'new'
        if (recipe === undefined || request.params.id === "new") {
            //add new recipe if index not taken or new
            console.log("Requesting new recipe");
            response.render('new');
        // display found recipe
        } else {
            // assign recipe an id
            recipe.id = request.params.id;
            recipe.message = "Found";
            // Debug - check recipe found
            // console.log(recipe);
            response.render('found', recipe);
        }
    });
});

// get new recipe
app.post('/recipes/new', (request, response) => {
    // Debug - check request body
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
                newRecipe.message = "Recipe's title already exists!";
                response.render('new', newRecipe);
            }
        });
        // add new recipe
        if (recipeExist === false) {

            obj.recipes.push(newRecipe);

            jsonfile.writeFile(FILE, obj, (err) => {
                if (err) {
                    console.error(err);
                }
                // assign recipe an id
                newRecipe.id = obj.recipes.length;
                console.log("New recipe id: " + newRecipe.id);
                newRecipe.message = "Added"
                response.render('found', newRecipe);
            })

        }
    })
})

// edit recipe
app.get('/recipes/:id/edit', (request, response) => {
    console.log("Received request to edit recipe: " + request.params.id);
    let inputId = parseInt(request.params.id)-1;

    jsonfile.readFile(FILE, (err, obj) =>{
        if (err) {
            console.log(err);
        }

        // find recipe by index from the recipes json file
        let editRecipe = obj.recipes[inputId];
        editRecipe.id = request.params.id;
        // Debug - check recipe to be edited
        console.log(editRecipe);
        response.render('edit', editRecipe);

    })
})

app.put('/recipes/:id', (request, response) => {
    // Debug - check request body
    console.log(request.body);
    let editedRecipe = request.body;
    let inputId = parseInt(request.params.id)-1;

    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            console.log(err);
        }

        // update recipe by index from recipes json file
        obj.recipes[inputId] = editedRecipe;
        jsonfile.writeFile(FILE, obj, (err) => {
            if (err) {
                console.log(err);
            }

            editedRecipe.id = request.params.id;
            editedRecipe.message = "Edited";
            response.render('found', editedRecipe);
        })
    })
})

// delete recipe
app.delete('/recipes/:id', (request, response) => {
    console.log("Received request to delete recipe: " + request.params.id);
    let inputId = parseInt(request.params.id)-1;

    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            console.log(err);
        }

        // remove recipe by index from recipes json file
        obj.recipes.splice(inputId, 1);
        jsonfile.writeFile(FILE, obj, (err) => {
            if (err) {
                console.log(err);
            }

            response.send("Go back to homepage");
        })

    })

})

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));