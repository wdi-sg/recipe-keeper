
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
 * Common Functions
 * ===================================
 */

var findRecipe = function(object, requestedId){
  for (var i = 0; i < object.length; i++) {
    console.log(`${object[i].title}`);

    if(parseInt(object[i].id) === requestedId ){
      return object[i];
    }
  }
};

var findRecipeIndex = function(object, requestedId){
  for (var i = 0 ; i < object.length ; i++){
    if ( object[i].id === requestedId){
      return i;
    }
  }
}

 // function findRecipe(object, requestedId){
 //   for (var i = 0; i < object.length; i++) {
 //     console.log(`${object[i].title}`);
 //
 //     if(parseInt(object[i].id) === requestedId ){
 //       return object[i];
 //     }
 //   }
 // }


/**
 * ===================================
 * Pages Functions
 * ===================================
 */


var redirectToRecipes = function(request,response){
   response.redirect("/recipes");
 }



var displayAllRecipes = function(request, response){

  jsonfile.readFile(FILE, (err, obj)=>{
    if( err ){
      console.log("error!", err );
    }else{
      //code here
      const data = {
        recipes : obj.recipes
      }
      response.render('main', data);
    }
  });

}

var displayCreateRecipeForm = function(request, response){

  jsonfile.readFile(FILE, (err, obj)=>{
    if( err ){
      console.log("error!", err );
    }else{

      //assigning an index, todo should be random
      var lastIndex = obj.recipes.length + 1 ;
      var data = {
        lastIndex : lastIndex,
      }
      response.render('createRecipe',data);
    }
  });

}



var addNewRecipe = function(request, response){

  var newRecipe = request.body;
  var newRecipeId = parseInt(request.body.id);
  // save in data file
  jsonfile.readFile(FILE, (err, obj) => {
    if( err ){
      console.log("error reading file");
      console.log(err);
    }

    console.log(obj.recipes);
    console.log("new Recipe" + newRecipe);
    console.log("new Recipe // IDEA: " + newRecipeId);

    // save data
    newRecipe.id = newRecipeId;
    obj.recipes.push(newRecipe);


    jsonfile.writeFile(FILE, obj, (err) => {
      if( err ){
        console.log("error writing file");
        console.log(err)
      }else{

        var data = {
          createdSuccess : true
        }

        var recipeCreated = `/recipes/${obj.recipes.length}`;

        response.redirect(recipeCreated);
      }

    });

  });

}


var showRecipe = function(request, response){



  jsonfile.readFile(FILE, (err, obj)=>{
    if( err ){
      console.log("error!", err );
    }else{

      var requestedId = parseInt(request.params.id);
      var thisRecipe = findRecipe(obj.recipes, requestedId);


      var data = {
        recipe : thisRecipe,
      }

      response.render('single', data);
    }
  });

}

var displayEditRecipeForm = function(request, response){
  jsonfile.readFile(FILE, (err,obj) => {
    if(err){
      console.log("error!", err );
    } else{

      var requestedId = parseInt(request.params.id);
      var thisRecipe = findRecipe(obj.recipes, requestedId);

      var data = {
        recipe : thisRecipe,
      }

      response.render('editRecipe', data);
    }
  });
}

var updateRecipe = function(request,response){

  var updatedRecipe = request.body;

  jsonfile.readFile(FILE, (err,obj) => {
    if(err){
      console.log("error!", err );
    } else{

      //to replace with Find recipe function
      obj.recipes[parseInt(request.params.id) - 1] = updatedRecipe;

      var id = parseInt(request.params.id) - 1;
      var thisRecipe = obj.recipes[id];

      var data = {
        recipe : thisRecipe,
        updatedSuccess : true
      }

      jsonfile.writeFile(FILE, obj, (error) => {
      if( error ){
        console.log(error)
      }

      // response.send(obj.pokemon[parseInt(request.params.id) - 1].name + ' updated!');

      response.render('single', data);
    });
    }
  });
}


var displayConfirmDeleteForm = function(request,response){


  jsonfile.readFile(FILE, (error, obj) => {
    if( error ){
      console.log(error);
    }

    console.log(obj);

    var requestedId = parseInt(request.params.id);
    var thisRecipe = findRecipe(obj.recipes, requestedId);

    var data = {
      recipe : thisRecipe,
    }

    response.render('deleteRecipe', data);
  });

};


var deleteRecipe = function(request,response){

  jsonfile.readFile(FILE, (err,obj) => {
    if(err){
      console.log("error!", err );
    } else {

      var requestedId = parseInt(request.params.id);
      var thisRecipeIndex = findRecipeIndex(obj.recipes, requestedId);

      thisRecipe = obj.recipes[thisRecipeIndex];

      var data = {
        recipe : thisRecipe,
      }
      //this must change to findIndex
      obj.recipes.splice(thisRecipeIndex, 1);

      jsonfile.writeFile(FILE, obj, (error) => {
      if( error ){
        console.log(error)
      }

      // response.send(obj.pokemon[parseInt(request.params.id) - 1].name + ' updated!');

        response.redirect('/recipes');
      });
    }

  });
};


/**
 * ===================================
 * Routes
 * ===================================
 */

// app.get('/page', getFunction);

// /recipes/	           GET	index	See all the recipes
// /recipes/new	       GET	new	Display the form for a single recipe
// /recipes	           POST	create	Create a new recipe
// /recipes/:id	       GET	show	See a single recipe
// /recipes/:id/edit	   GET	edit	Display the form for editing a single recipe
// /recipes/:id	       PATCH/PUT	update	Update a recipe
// /recipes/:id	       DELETE	destroy	Remove a recipe

app.get('/', redirectToRecipes);
app.get('/recipes/', displayAllRecipes);
app.get('/recipes/new', displayCreateRecipeForm);
app.post('/recipes/', addNewRecipe);
app.get('/recipes/:id', showRecipe);
app.get('/recipes/:id/edit', displayEditRecipeForm);
app.put('/recipes/:id', updateRecipe);
app.get('/recipes/:id/delete', displayConfirmDeleteForm);
app.delete('/recipes/:id', deleteRecipe);





/**
 * ===================================
 * Listen to requests on port 4200
 * ===================================
 */
app.listen(4200, () => console.log('~~~ Tuning in to the waves of port 4200 ~~~'));
