const express = require('express');
const app = express();
const { check } = require('express-validator')

const jsonfile = require('jsonfile');
const file = 'ingredient.json'; //or whatever your json file is called

// react engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

// Express
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Method OVerride
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// Add CSS file in a public folder
app.use(express.static(__dirname+'/public/'));



/* =========================================
// Display all the recipes
==========================================*/

app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.ingredient;
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        let data = {
            recipeKey : recipes,
            recipeId : recipes.id
        }

        // console.log(recipes);
        // response.send(recipes);
        response.render('home', data);
    });
});



/* =========================================
// Display a new recipe form
==========================================*/
app.get('/recipes/new', (request, response) => {
     jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.ingredient;
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        let data = {
            recipeKey : recipes,
            recipeId : recipes.id
        }
        console.log('num of recipes: ' , recipes.length);
        response.render('new', data);
    });
});



/* =========================================
// Add new recipe to json file
==========================================*/
app.post('/recipe', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        let newId = parseInt(request.body.id);
        let newName = request.body.name;

        console.log("new id: " + newId);
        console.log("new name: " + newName);

        let newRecipe = {
            id: newId,
            name: newName
        };

        console.log(newRecipe);

        // Add new recipe to json file
        obj.ingredient.push(newRecipe);


        // save the request body into json file
        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log('error writing file!');
                console.log(err);
                response.status(503).send("no!");
            }
        }); ////// end of writing json file //////
    });////// end of reading json file //////
    console.log("send response");
    response.send("New Recipe Added!");
});



/* =========================================
// See a single recipe
==========================================*/
app.get('/recipes/:id', (request, response) => {
    console.log("user entered: " + request.params.id);

    jsonfile.readFile(file, (err, obj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }

        let userInputId = parseInt(request.params.id);
        // find recipe with user entered id
        let realIndex = obj.ingredient.findIndex(a => a.id === userInputId);
        console.log("array index: " + realIndex);

        let selectedRecipe = obj.ingredient[realIndex];

        // IMPT noted the id here is the value of selectedRecipe.id, not the array index
        console.log("user viewing recipe no. " + selectedRecipe.id + ", " + selectedRecipe.name);

        let data = {
            recipeData : selectedRecipe
        };

        response.render('onerecipe', data);
    });
});


/* ===========================================
// Display the form for editing a single recipe
===============================================*/
app.get('/recipes/:id/edit', (request, response) => {
    // read pokedex json file
     jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log('error reading file');
            console.log(err);
        }

        // let selectedId = (request.params.id) - 1; // -1 becos of index 0
        // let selectedRecipe = obj.ingredient[selectedId];
        // console.log("user editing recipe no. " + selectedRecipe.id + ", " + selectedRecipe.name);

        // var data = {
        //     selectedIdKey: selectedId,
        //     recipeData: selectedRecipe
        // }

        let userInputId = parseInt(request.params.id);

        // find recipe with user entered id
        let realIndex = obj.ingredient.findIndex(a => a.id === userInputId);
        console.log("array index: " + realIndex);

        let selectedRecipe = obj.ingredient[realIndex];

        // IMPT noted the id here is the value of selectedRecipe.id, not the array index
        console.log("user editing recipe no. " + selectedRecipe.id + ", " + selectedRecipe.name);

        let data = {
            userEnteredIdKey : userInputId,
            recipeData : selectedRecipe
        };

        response.render('edit', data);
    });
});

/* ===========================================
// Update a single recipe
===============================================*/
app.put('/recipes/:id', (request, response) => {
    console.log("Begin storing updated recipe...");

    var updatedRecipe = request.body;
    // start of reading json file
    jsonfile.readFile(file, (err, obj) => {
        console.log("got file");
        if( err ){
          console.log("error reading file");
          console.log(err)
        }

        var index = parseInt(request.body.id); // Convert request id to number
        var updatedName = request.body.name;

        console.log("id: " + index);
        console.log("new name: " + updatedName);

        var updatedRecipe = {
            id: index,
            name: updatedName
        };
        console.log("updated recipe no. " + updatedRecipe.id + ", " + updatedRecipe.name);

        // find recipe with request id
        let realIndex = obj.ingredient.findIndex(a => a.id === index);
        console.log("array index: " + realIndex);

        // replace old content with this new content into the position real-index no. of ingredient array
        obj.ingredient[realIndex] = updatedRecipe;

        console.log("about to write file");
        jsonfile.writeFile(file, obj, (err) => {
            console.log("write file done");
            if( err ){
                console.log("error writing file");
                console.log(err)
                response.status(503).send("no!");
            } else {
                console.log("~~~~~~~yay. recipe " + updatedRecipe.id + " updated!");
                console.log( "send response");
                response.send("Recipe no. " + updatedRecipe.id + ", " + updatedRecipe.name + " updated!");
            }
        });
    });
});



/* =========================================
// Remove a recipe
==========================================*/













/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));