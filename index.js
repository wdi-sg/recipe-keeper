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
        newRecipe.img = request.body.img;

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log(err);
            }
        });
        response.redirect('/recipes/');
    });
}
app.post('/recipes', createNewRecipe);



//Show a single recipe
let showRecipe = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let index = request.params.id;
        let selectedRecipe = obj.recipes[request.params.id];
        response.render('showrecipe', {input: selectedRecipe, inputNum: index});
    });
}
app.get('/recipes/:id', showRecipe);




//Build pre-populated form for editing a recipe
let sendEditRecipeRequest = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipeIndex = request.params.id;
        let editItem = obj.recipes[recipeIndex];

        response.render('edit', {item: editItem, index: recipeIndex});
    });
}
app.get('/recipes/:id/edit', sendEditRecipeRequest);




//Update data.json with edited recipe
let editRecipe = (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        let index = request.params.id;
        obj.recipes[index].title = request.body.title;
        obj.recipes[index].ingredients = request.body.ingredients;
        obj.recipes[index].instructions = request.body.instructions;
        obj.recipes[index].img = request.body.img;

        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log(err);
            }
            response.redirect('/recipes/' + index);
        });
    });
}
app.put('/recipes/:id', editRecipe);



//Delete selected recipe
let deleteRecipe = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let index = request.params.id;
        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, (err) => {
            response.redirect('/recipes/');
        });
    })
}
app.delete('/recipes/:id',deleteRecipe);



//Will render home screen
let home = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let allRecipes = obj
        response.render("home", allRecipes);
    });
}
app.get('/recipes/', home);



/////////////////////////////Done//////////////////////////




app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));