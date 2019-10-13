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

// Declare port to listen on
const port = 3000;

//--------------------------------
// GET/POST METHODS
//--------------------------------

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
        console.log(newRecipe);
        response.send(obj.recipes);

        // Push the newly created recipe to the object array
        obj["recipes"].push(newRecipe);

        // Save the request body
        jsonfile.writeFile(FILE, obj, (err) => {

            console.log("Error: " + err);

            // Now look inside your json file
            response.send(request.body);

        });
    });
});

// Listen on port
app.listen(port);
console.log("listening on port " + port);