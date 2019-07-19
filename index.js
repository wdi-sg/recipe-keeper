
console.log("starting express");

const express = require('express');
const app = express();

const jsonfile = require('jsonfile');
const FILE = 'data.json';

// use files, to get hold of the data in the request.body.
// without this request.body will be undefined

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// To add the CSS File
app.use(express.static(__dirname + '/public'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');


/**
 * ===================================
 * Pages Functions
 * ===================================
 */


var redirectRecipes = function(request,response){
   response.redirect("/recipes");
 }


var getFunction = function(request, response){

  jsonfile.readFile(FILE, (err, obj)=>{
    if( err ){
      console.log("error!", err );
    }else{
      //code here
      response.render('page');
    }
  });

}


var postFunction = function(request,response){
  jsonfile.readFile(FILE, (err, obj)=>{
    if( err ){
      console.log("error!", err );
    }else{
      //code here
      jsonfile.writeFile(FILE, obj, (err)=>{
        if( err ){
          console.log("error!", err );
        }else{
          //code here
        }
      })
    }
  });
}




/**
 * ===================================
 * Routes
 * ===================================
 */
app.get('/', redirectRecipes);
app.get('/page', getFunction);

// /recipes/	           GET	index	See all the recipes
// /recipes/new	       GET	new	Display the form for a single recipe
// /recipes	           POST	create	Create a new recipe
// /recipes/:id	       GET	show	See a single recipe
// /recipes/:id/edit	   GET	edit	Display the form for editing a single recipe
// /recipes/:id	       PATCH/PUT	update	Update a recipe
// /recipes/:id	       DELETE	destroy	Remove a recipe

// app.get('/', redirectRecipes);
// app.get('/recipes/', displayAllRecipes);
// app.get('/recipes/new', displayCreateRecipeForm);
// app.post('/recipes/', createRecipe);
// app.get('/recipes/:id', showRecipe);
// app.get('/recipes/:id/edit', displayEditRecipeForm);
// app.put('/recipes/:id', updateRecipe);
// app.delete('/recipes/:id', deleteRecipe);





/**
 * ===================================
 * Listen to requests on port 4200
 * ===================================
 */
app.listen(4200, () => console.log('~~~ Tuning in to the waves of port 4200 ~~~'));
