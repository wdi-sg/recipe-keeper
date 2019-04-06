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



//Send request to create a new recipe
let sendNewRecipeRequest = (request, response) => {
     response.render('newrecipe');
};
app.get('/recipes/new', sendNewRecipeRequest);



//Get user input and save it into data.json
let createNewRecipe = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let newRecipe = new Object();
        newRecipe.title = request.body.title;
        newRecipe.ingredients = request.body.ingredients;
        newRecipe.instructions = request.body.instructions;

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log(err)
            };
        });
        response.redirect('/');
    });
}
app.post('/recipes', createNewRecipe);



//Show a single recipe
let showRecipe = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let selectedRecipe = obj.recipes[request.params.id];
        response.render('showrecipe', selectedRecipe);
    });
}
app.get('/recipes/:id', showRecipe);




//Build pre-populated form for editing a recipe
let editRecipe = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipeIndex = request.params.id;
        let editItem = obj.recipes[recipeIndex];

        response.render('edit', {item: editItem, index: recipeIndex});
    });
}
app.get('/recipes/:id/edit', editRecipe);




/////////////////////////////Done//////////////////////////

















app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));