//--------------------------------
// STANDARD CONFIG - PART 1 REQUIRE JSONFILE
//--------------------------------

// Require jsonfile
const jsonfile = require('jsonfile');
const FILE = 'recipes.json';

// Require Express
const express = require('express');

// Declare that the it is an express app
const app = express();

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

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// Declare port to listen on
const port = 3000;

//--------------------------------
// GET/POST METHODS
//--------------------------------

// Define GET method - To display all recipes
app.get('/recipes', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        // Read the file
        // Specify what do we want to display
        const data = {
            recipes: obj.recipes
        };

        // Render all recipes
        response.render('home', data);
    });
});

//Define GET method - To show user the form to fill in using React view
app.get('/recipes/new', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        let recipeId = parseInt(obj.recipes.length + 1);

        const data = {
            id: recipeId
        };

        // Render a template form here
        response.render('newRecipe', data);
    });
});

// Define POST method - For user to create new recipe
app.post('/recipes', (request, response) => {

    // Get JSON from specified file
    jsonfile.readFile(FILE, (err, obj) => {

        // Store the newly input information to a variable
        const newRecipe = request.body;
        /*console.log(newRecipe);
        response.send(obj.recipes);*/

        // Push the newly created recipe to the object array
        obj["recipes"].push(newRecipe);

        const data = {
            id: request.body.id,
            title: request.body.title,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions
        };

        response.render('newRecipeConfirmation', data);

        // Save the request body
        jsonfile.writeFile(FILE, obj, (err) => {

            console.log("Error: " + err);

            // Now look inside your json file
            response.send(request.body);

        });
    });
});

//Define GET method - To display single recipe
app.get('/recipes/:id', (request, response) => {

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        // When recipeId === obj.recipes[i].id
        // Get the value of i
        // Get title,ingredients and instructions of that recipe

        let title;
        let ingredients;
        let instructions;

        for(let i = 0; i < obj.recipes.length; i++) {

            if(recipeId == obj.recipes[i].id) {

                const data = {
                    id: obj.recipes[i].id,
                    title: obj.recipes[i].title,
                    ingredients: obj.recipes[i].ingredients,
                    instructions: obj.recipes[i].instructions
                };

            response.render('viewSingleRecipe', data);
            }
        }
    });
});

// Define GET method - To display edit form
app.get('/recipes/:id/edit', (request, response) => {

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        // When recipeId === obj.recipes[i].id
        // Get the value of i
        // Get title,ingredients and instructions of that recipe

        let title;
        let ingredients;
        let instructions;

        for(let i = 0; i < obj.recipes.length; i++) {

            if(recipeId == obj.recipes[i].id) {

                const data = {
                    id: obj.recipes[i].id,
                    title: obj.recipes[i].title,
                    ingredients: obj.recipes[i].ingredients,
                    instructions: obj.recipes[i].instructions
                };

            response.render('editRecipe', data);
            }
        }
    });
});

// Define PUT method - To update changes made by user back to JSON file
app.put('/recipes/:id', (request, response) => {

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        for(let i = 0; i < obj.recipes.length; i++) {

            if(recipeId == obj.recipes[i].id) {

                // Update values back to json file
                obj.recipes[i].id = request.body.id;
                obj.recipes[i].title = request.body.title;
                obj.recipes[i].ingredients = request.body.ingredients;
                obj.recipes[i].instructions = request.body.instructions;

                // Read the updated values for display

                const data = {
                    id: obj.recipes[i].id,
                    title: obj.recipes[i].title,
                    ingredients: obj.recipes[i].ingredients,
                    instructions: obj.recipes[i].instructions
                }

                response.render('editRecipeConfirmation', data);

            }
        }

        // Save the request body
        jsonfile.writeFile(FILE, obj, (err) => {

            console.log("Error: " + err);
        });
    });
});

// Define GET method - To display recipe to delete
app.get('/recipes/:id/delete', (request, response) => {

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        // When recipeId === obj.recipes[i].id
        // Get the value of i
        // Get title,ingredients and instructions of that recipe

        let title;
        let ingredients;
        let instructions;

        for(let i = 0; i < obj.recipes.length; i++) {

            if(recipeId == obj.recipes[i].id) {

                const data = {
                    id: obj.recipes[i].id,
                    title: obj.recipes[i].title,
                    ingredients: obj.recipes[i].ingredients,
                    instructions: obj.recipes[i].instructions
                };

                response.render('deleteRecipe', data);
            }
        }
    });
});

// Define DELETE method - To delete recipe and update back to JSON file
app.delete('/recipes/:id', (request, response) => {

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        for(let i = 0; i < obj.recipes.length; i++) {

            if(recipeId == obj.recipes[i].id) {

                const data = {
                    id: obj.recipes[i].id
                }
                // Get the position and remove the 1 object from file using splice
                obj.recipes.splice(i, 1);

                response.render('deleteRecipeConfirmation', data);

            }
        }
        // Save the request body
        jsonfile.writeFile(FILE, obj, (err) => {

            console.log("Error: " + err);
        });
    });
});

// Listen on port
app.listen(port);
console.log("listening on port " + port);