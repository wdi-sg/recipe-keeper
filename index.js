/**
 * ==========================================
 * Configurations and set up for index.js:
 * ==========================================
 */
const jsonfile = require('jsonfile');
const file = 'data.json';

// Init express app
const express = require('express');
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

// this tells express where to look for the css files
app.use(express.static(__dirname+'/public/'));

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));



// /**
//  * ============================================================
//  *            Route - Index - Display list of recipes
//  * ===========================================================
//  */
app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, data) => {
        if( err ){
            console.log("error reading file");
            console.log(err);
        }

        response.render('homepage', data)

    })
})

// /**
//  * ============================================================
//  *            Route - Add New Recipe
//  * ===========================================================
//  */
app.get('/recipes/new', (request, response) => {
    jsonfile.readFile(file, (err, data) => {
        if( err ){
            console.log("error reading file");
            console.log(err);
        }

        response.render('addRecipe')

    })
})


app.post('/recipes', (request,response) => {

  var newRecipe = request.body;

  // save in data file
  jsonfile.readFile(file, (err, data) => {
    if( err ){
      console.log("error reading file");
      console.log(err)
    }

    // save data
    data.recipes.push(newRecipe);

    jsonfile.writeFile(file, data, (err) => {
      if( err ){
        console.log("error writing file");
        console.log(err)
        response.status(503).send("ERROR WRITING FILE");
      } else {

        response.redirect('/recipes');
      }
    });
  });
});

// /**
//  * ============================================================
//  *            Route - Show and Edit Recipe
//  * ===========================================================
//  */
app.get('/recipes/:id/', (request, response) => {
    jsonfile.readFile(file, (err, data) => {
        if( err ){
            console.log("error reading file");
            console.log(err);
        }

        let recipeIndex = request.params.id;
        const recipe = data.recipes[recipeIndex-1];

        const dataObj = {
          index: recipeIndex,
          recipeData : recipe
        };

        response.render('recipe', dataObj)

    })
})


// If response.query.method=delete -> reponse.render delete.jsx
app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, data)=>{

        let recipeIndex = request.params.id;
        const recipe = data.recipes[recipeIndex-1];

        const dataObj = {
          index: recipeIndex,
          recipeData : recipe
        };

        response.render('./editRecipe', dataObj);
    })
})

app.put('/recipes/:id', (request, response)=>{

  console.log("REQUEST BODY");
  console.log( request.body);

  jsonfile.readFile(file, (err, data)=>{

    let recipeIndex = request.params.id;
    //save data
    data.recipes[recipeIndex-1] = request.body;

    jsonfile.writeFile(file, data, (err)=>{
      // response.send("POKEMON EDITED");
    });

  });

  response.redirect('/recipes/'+request.params.id);
});



























/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));