//===================================
// Configurations and set up
//===================================
const _ = require('lodash');
const express = require('express');
const promise = require("bluebird");
const methodOverride = require('method-override')
const jsonfile = promise.promisifyAll(require('jsonfile'));
const file = 'data/data.json';

const app = express();

let data;

app.use(express.static('public')) // use to serve static files using express
app.use(methodOverride('_method')); // use to overcome HTML issue with sending PUT and DELETE request

// tell your app to use the module. This is to enable request.body for post request
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


//===================================
// Server And Data Loader Function
//===================================
var startServer = function () {
    // read data before starting up server
    jsonfile.readFileAsync(file)
        .then((JSONContent) => {
            data = JSONContent;
        })
        .then(() => {
            app.listen(3000);
        })
        .catch((err) => {
            console.log(err);
        });
}


// ===================================
// Request Handlers
// ===================================
var homeRequestHandler = function (request, response) {
    response.render('home');
}

var newRecipeRequestHandler = function (request, response) {
    response.render('add');
}

var addNewRecipeRequestHandler = function (request, response) {
}

var editRecipeRequestHandler = function (request, response) {
    response.render('edit');
}

var editExistingRecipeRequestHandler = function (request, response) {
}

var deleteRecipeRequestHandler = function (request, response) {
    response.render('delete');
}

var deleteExistingRecipeRequestHandler = function (request, response) {
}

var getRecipesByIdRequestHandler = function (request, response) {
    response.send('link!');
}

// ===================================
// Routes
// ===================================
app.get('/recipes', homeRequestHandler); // GET See all the recipes

app.get('/recipes/new', newRecipeRequestHandler); // GET Display the form for creating a single recipe
app.post('/recipes', addNewRecipeRequestHandler); // POST Create a new recipe

app.get('/recipes/:id/edit', editRecipeRequestHandler); // GET Display the form for editing a single recipe
app.put('/recipes/:id', editExistingRecipeRequestHandler); // PUT Update a recipe

app.get('/recipes/:id/delete', deleteRecipeRequestHandler); // GET Display the form for deleting a single recipe
app.delete('/recipes/:id', deleteExistingRecipeRequestHandler); // DELETE Remove a recipe

app.get('/recipes/:id', getRecipesByIdRequestHandler); // GET See a single recipe
app.get('/', homeRequestHandler); // GET See all the recipes

// ===================================
// Start Server
// ===================================
startServer();