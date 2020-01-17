/**
* ===================================
* Configurations and set up
* ===================================
*/

const jsonfile = require('jsonfile');

const file = 'data.json';

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

// index to see all recipes
app.get('/recipes', (request, response) => {

}); // end see all recipes

// add new recipes (form)
app.get('/recipes/new', (request, response) => {

}); // end add new recipes (form)

// add new recipes (app.POST) sends data
app.post('recipes/', (request, response) => {

}); // end add new recipes (send data)

// see single recipe 
app.get('recipes/:id', (request,response) => {
  jsonfile.readFile(file, (err, obj) => {
    // check to make sure the file was properly read
    if( err ){
        console.log("error with json read file:",err);
        response.status(503).send("error reading filee");
        return;
    }
    // obj is the object from the pokedex json file
    // extract input data from request
    let recipeId = parseInt(request.params.id);
    var recipes;
    // find pokemon by id from the pokedex json file
    for( let i=0; i<obj.recipes.length; i++ ){
        let currentRecipe = obj.recipes[i];
        if( currentRecipe.id === recipeId ){
            recipes = currentRecipe;
        }
    }
    if (recipes === undefined) {
        // send 404 back
        response.status(404);
        response.send("not found");
    } else {
        let data = {
            id : parseInt(currentRecipe.id),
            title : currentRecipe.name,
            ingredients : currentRecipe.ingredients,
            instructions : currentRecipe.instructions,
        }
        response.render('single', data);
    }
});
}); // end single recipe

// catch all 
app.get('*', (request, response) => {
  response.send("accepted");
});

/**
* ===================================
* PORT
* ===================================
*/

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
