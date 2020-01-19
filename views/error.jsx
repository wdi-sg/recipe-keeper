const jsonfile = require('jsonfile');
const express = require('express');

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


//URL -> /recipes/ && HTTP Verb -> GET && Action -> index && Purpose -> See all recipes
app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

    // check to make sure the file was properly read
    if( err ){
      console.log("error with json read file:",err);
      response.status(503).send("error reading filee");
      return;
    }
    console.log(obj.recipes);
    let listOfRecipe = obj.recipes;
    //if u wana send over data from data.json or any json file, after reading it through using jsonfile.readFile, package it as an object. Data has a key called recipeList, where it's value is an array (listOfRecipe) which comes from line 51 -> let listOfRecipe = obj.recipes
    const data = {
        recipeList: listOfRecipe
    }
    response.render('home', data);
    //response.render must be within ur jsonfile.readFile otherwise it won't work
  });
});

//In order to allow user to have a form where they can use it to add recipe
//URL -> /recipes/new && HTTP Verb -> GET && Action -> new && Purpose -> Display the form for a single recipe
app.get('/recipes/new', (request, response) => {
    response.render('create');
});

//taking data from create.jsx to be added into obj.recipe
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

//what we are doing here is getting the index from path, then ensure is same index with obj.recipe, and render it in html form
//URL -> /recipes/id && HTTP Verb -> GET && Action -> show && Purpose -> See a single recipe
app.get('/recipes/:id', (request, response) => {
    console.log(request.params.id)
  // get json from specified file which in this case is data.json
  jsonfile.readFile(file, (err, obj) => {
    // check to make sure the file was properly read
    if( err ){
      console.log("error with json read file:",err);
      response.status(503).send("error reading file");
      return;
    }
    // obj is the object from the data.json file
    // extract input data from request
    let recipeIndex = parseInt( request.params.id );
    var recipe;
    let currentRecipe = obj.recipes[recipeIndex];
    // find recipe by index of the obj.recipes's array from the data.json file
      if( currentRecipe === obj.recipes[recipeIndex] ){
        recipe = currentRecipe;
      }


    if (recipe === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
      // response.render('error'); TODO
    } else {
        const data = {
            recipeList: recipe
        }
              response.render('show', data);
    }
  });
});

//path that lead to the form for use to edit recipe
// URL -> /recipes/id/edit && HTTP Verb -> GET && Action -> edit && Purpose -> Display the form for editing a single recipe  **** this part is reading the file again
app.get('/recipes/:id/edit', (request, response) => {
  let recipeIndex = parseInt(request.params.id) - 1; // need to minus the index so recipes are the same!! if not it becomes next recipe in array

  jsonfile.readFile(file, (err, obj) => {
    // console.log(obj);
    let currentRecipe = obj.recipes[recipeIndex];
    const data = {
      recipeList: currentRecipe
    };
    console.log(currentRecipe);
    response.render("edit", data);
  });
});


//URL -> /recipes/id && HTTP Verb -> PATCH/PUT && Action -> update && Purpose -> Update a recipe **** this part is reading from the form then update in data.json
app.put('/recipes/:id', (request, response) => {
    console.log("Received POST");
    console.log(request.body);
  jsonfile.readFile(file, (err, obj) => {
    // check to make sure the file was properly read
    if (err) {
      console.log("There is an error :", err);
      response.status(503).send("error reading file");
      return;
    }

        let recipeIndex = request.params.id;
        let contents = request.body;
        obj.recipes[recipeIndex].title = contents.title;
        obj.recipes[recipeIndex].ingredients = contents.ingredients;
        obj.recipes[recipeIndex].instructions = contents.instructions;
    jsonfile.writeFile(file, obj, err => {
      if (err) console.log(err);
      const data = {
        latestRecipe: contents
      }
      response.send("You have update the recipe to as below: " + contents.title + " " + contents.ingredients + " " + contents.instructions);
      // response.render('updated', data)
      return;
    });
  });
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));