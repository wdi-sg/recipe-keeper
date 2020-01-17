const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();

// Configure express
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Method override for PUT and DEL requests
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// React Renderer
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

//
const recipesFile = 'recipes.json';


///////////////////////
// *** FUNCTIONS *** //
///////////////////////


///////////////////////
// Listen responses. //
///////////////////////

// POST request to add a new recipe to the list:
app.post('/recipes', (request, response) => {
    // Validate the input, if not valid then return/render the form again with changes to be made.
    console.log(request.body);

    const newRecipe = {
        title: request.body.title,
        ingredients: request.body.ingredients,
        method: request.body.method
    }

    jsonfile.readFile(recipesFile, (err, obj) => {
        if (err) {
            console.log(err);
            response.status(501).send('Error when reading the file: ' + err);
        }

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) {
                console.log(err);
                response.status(501).send('Error when writing the file: ' + err);
            }
            response.send('it worked!');
        })
    })
})

// Display form to add a recipe:
app.get('/recipes/new', (request, response) => {
    response.render('addrecipe');
})

app.get('/recipes/add', (request, response) => {
  response.status(301).redirect('/recipes/new');
})



// Catch all for any sort of request
app.get('*', (request, response) => {
    const message = 'It works!';
    const data = {
        message: message
    };
    response.render('message', data);
})


// Listen
const listenPort = 3000;
app.listen(3000, () => {
    console.log(`Listening to incoming input on port ${listenPort}`)
});
