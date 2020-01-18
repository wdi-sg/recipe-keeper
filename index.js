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
    //if u wana send over data from data.json or any json file, after reading it through using jsonfile.readFile, package it as an object. Data has a key called recipeList, where it's value is an array (listOfRecipe)
    const data = {
        recipeList: listOfRecipe
    }
    response.render("home", data);
    //response.render must be within ur jsonfile.readFile otherwise it won't work
  });
});


//URL -> /recipes/new && HTTP Verb -> GET && Action -> new && Purpose -> Display the form for a single recipe
app.get('/recipes/new', (request, response) => {
    response.render("create");
});


//URL -> /recipes && HTTP Verb -> POST && Action -> create && Purpose -> Create a new recipe
app.post("/recipes", (request, response) => {
    console.log("Received POST");
    console.log(request.body);
    const newRecipe = {
    title: request.body.title,
    ingredients: request.body.ingredients,
    instructions: request.body.instructions,
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
      response.render("addedNew", data)
      return;
    });
  });
});


//URL -> /recipes/id && HTTP Verb -> GET && Action -> show && Purpose -> See a single recipe
// app.get('/recipes/:id', (request, response) => {
//     console.log(request.params.id)
//   // get json from specified file
//   jsonfile.readFile(file, (err, obj) => {

//     // check to make sure the file was properly read
//     if( err ){

//       console.log("error with json read file:",err);
//       response.status(503).send("error reading filee");
//       return;
//     }
//     // obj is the object from the pokedex json file
//     // extract input data from request
//     let inputId = parseInt( request.params.id );

//     var pokemon;

//     // find pokemon by id from the pokedex json file
//     for( let i=0; i<obj.pokemon.length; i++ ){

//       let currentPokemon = obj.pokemon[i];

//       if( currentPokemon.id === inputId ){
//         pokemon = currentPokemon;
//       }
//     }

//     if (pokemon === undefined) {

//       // send 404 back
//       response.status(404);
//       response.send("not found");
//     } else {
//         const data = {
//             pokeList: pokemon
//         }
//       response.render("info", data);
//     }
//   });
// });

// app.get("/recipes/:id/edit", (request, response) => {
//   let pokemonIndex = parseInt(request.params.id) - 1; // need to minus the index so pokemon are the same!! if not it becomes next pokemon in array

//   jsonfile.readFile(file, (err, obj) => {
//     console.log(obj);
//     let currentPokemon = obj.pokemon[pokemonIndex];
//     const data = {
//       indexPokemon: currentPokemon
//     };
//     console.log(currentPokemon);
//     response.render("edit", data);
//   });
// });

// app.put("/recipes/:id", (request, response) => {

// })


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));