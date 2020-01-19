const express = require('express');
const jsonfile = require('jsonfile');

const file = 'data.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Init Method-Override for PUT and DELETE
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// Init REACT
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */

/**
 * ===================================
 *  ALL RECIPES // GET
 * ===================================
 */

//INDEX/LIST OF HOMEPAGE WORKING
//INDEX HOMEPAGE OR LIKE A MENU PAGE WITH ALL RECIPES IN IT
//URL -> /recipes/ && HTTP Verb -> GET && Action -> index && Purpose -> See all recipes
app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

    // check to make sure the file was properly read
    if( err ){
      console.log("error with json read file:",err);
      response.status(503).send("error reading file");
      return;
    }
    console.log(obj.recipes);
    let listOfRecipe = obj.recipes;
    //if u wana send over data from data.json or any json file, after reading it through using jsonfile.readFile, package it as an object. Data has a key called recipeList, where it's value is an array (listOfRecipe)
    const data = {
        recipeList: listOfRecipe
    }
    response.render('home', data);
    //response.render must be within ur jsonfile.readFile otherwise it won't work
  });
});

/**
 * ===================================
 * NEW // GET
 * ===================================
 */


//FORM IS BEING RENDERED OUT PROPERLY
//NEW FORM FOR USER TO FILL IN
//URL -> /recipes/new && HTTP Verb -> GET && Action -> new && Purpose -> Display the form for a single recipe
app.get('/recipes/new', (request, response) => {
    response.render('create');
});

/**
 * ===================================
 * CREATE // POST
 * ===================================
 */

//MANAGE TO ADD NEW RECIPE IN FOR NOW
//CREATE A NEW RECIPE IN DATA.JSON
//URL -> /recipes && HTTP Verb -> POST && Action -> create && Purpose -> Create a new recipe  && ensure that strings is in lowercase
app.post('/recipes', (request, response) => {
    console.log("Received POST");
    console.log(request.body);
    const newRecipe = {
    title: request.body.title.toLowerCase(),
    ingredients: request.body.ingredients.toLowerCase(),
    instructions: request.body.instructions.toLowerCase()
  };

  jsonfile.readFile(file, (err, obj) => {
    // check to make sure the file was properly read
    if (err) {
      console.log("There is an error :", err);
      response.status(503).send("error reading file");
      return;
    }

    obj.recipes.push(newRecipe);

    jsonfile.writeFile(file, obj, err => {
      if (err) console.log(err);
      console.log("Manage to add " + newRecipe);
      const data = {
        latestRecipe: newRecipe
      }
      response.render('addedNew', data)
      return;
    });
  });
});

/**
 * ===================================
 * SHOW // GET
 * ===================================
 */

//MANAGE TO SHOW A SINGLE RECIPE FOR NOW
//SHOW PAGE WITH SINGLE RECIPE
//URL -> /recipes/id && HTTP Verb -> GET && Action -> show && Purpose -> See a single recipe
app.get('/recipes/:id', (request, response) => {
    console.log(request.params.id)
  // get json from specified file
  jsonfile.readFile(file, (err, obj) => {
    // check to make sure the file was properly read
    if( err ){
      console.log("error with json read file:",err);
      response.status(503).send("error reading file");
      return;
    }
    // obj is the object from the data.json file
    // extract input data from request
    let inputId = parseInt( request.params.id );
    var recipe;
    let currentRecipe = obj.recipes[inputId];
    console.log(currentRecipe);
    // find recipe by index of the obj.recipes's array in data.json file
      if( currentRecipe === obj.recipes[inputId] ){
        recipe = currentRecipe;
      }

    if (recipe === undefined) {
      // send 404 back
      response.status(404);
      response.send("Not a valid recipe, create a new one maybe?");
      // response.render('error');TODO error.jsx
    } else {
        const data = {
            recipeList: recipe
        }
        recipeIndex = parseInt(data.recipeList.id);
              response.render('show', data);
    }
  });
});

/**
 * ===================================
 * EDIT // GET
 * ===================================
 */

//MANAGE TO RENDER OUT THE EDIT FORM
//EDIT FORM
// URL -> /recipes/id/edit && HTTP Verb -> GET && Action -> edit && Purpose -> Display the form for editing a single recipe
app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file,(err, obj) => {
        if (err) console.log(err);
// using the :id, find the corresponding recipe
        let index = parseInt(request.params.id);
// rename data to be sent
        console.log(obj.recipes);
        let chosenRecipe = obj.recipes[index];
        console.log(obj.recipes[index]);
        console.log(chosenRecipe);
        const data = {
            id: index,
            recipe: chosenRecipe
        }
// add in index of recipe to data
        // selectedRecipe.index = index;
        response.render('edit', data);
    });
});


/**
 * ===================================
 * UPDATE // PUT
 * ===================================
 */

//FINALLY ABLE TO UPDATE DATA ON 19-1-2020!!!!!!!! THANK GOD!!!!!!
//URL -> /recipes/id && HTTP Verb -> PATCH/PUT && Action -> update && Purpose -> Update a recipe
app.put('/recipes/:id',(request,response)=>{
// using the :id, find the corresponding recipe
    let index = parseInt(request.params.id);
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
        console.log(request.body + " Hey this is request dot body!");
        // overwrite the current data with new data
        let contents = request.body;
        console.log(contents + " Hey this is contents!");
        console.log(obj.recipes + " Hey this is object dot recipes bracket index!");
        obj.recipes[index].title = contents.title.toLowerCase();
        obj.recipes[index].ingredients = contents.ingredients.toLowerCase();
        obj.recipes[index].instructions = contents.instructions.toLowerCase();
        jsonfile.writeFile(file,obj,(err)=>{
            if (err) console.log(err);
            const data = {
            recipe: contents
            }
        response.render('updated', data);
        });
    });
});


/**
 * ===================================
 * DELETE
 * ===================================
 */
//DELETE
//URL -> /recipes/id && HTTP Verb -> PATCH/PUT && Action -> update && Purpose -> Update a recipe
// app.delete("/recipes/:id", (request, response) => {
//   //read the file in and write out to it
// });



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));