// Init express app
const express = require('express');
const app = express();

// Init jsonfile
const jsonfile = require('jsonfile');
const file = 'recipes.json';


// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// this tells express where to look for the public files
app.use(express.static(__dirname+'/public/'));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));


// tell your app to use the module
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


//////////////////////////////////////////////////////////////////////////////////
//Shows all Recipes
app.get('/', (request, response) => {
    response.redirect('/recipes');
    });

//////////////////////////////////////////////////////////////////////////////////
//Shows all Recipes
app.get('/recipes', (request, response) => {

    // let sortby = request.query.sortby;

    jsonfile.readFile(file, (err, obj) => {
        if (err){
            console.log(err);
        }
        else {
            var recipes = obj.recipes;
        }

        var content = {
                recipesList:recipes
        }

        response.render('main',content);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////
//Shows form for new Recipe entry
app.get('/recipes/new', (request, response) => {

  // get json from specified file
  jsonfile.readFile(file, (err, obj) => {

    // var id = request.params.id;
    // var recipes = obj.recipes[id];
    var num = obj.recipes.length+1;

    var data = {
      // recipeId : parseInt(id),
      // recipesList : recipes,
      num : num
    }
      // response.send(form);
      response.render('new',data);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////
//Creates and write new recipe to JSON
app.post('/recipes', function(request, response) {

    //debug code (output request body)
    console.log(request.body);

    var newRecipe = request.body;


    newRecipe.id = request.body.id;
    // console.log(newRecipe);

    //read file
    jsonfile.readFile(file, (err, obj) => {
        if (err){
            console.log(err);
        }
        else {
            if (true){
                obj.recipes.push(newRecipe);

                    //write file
                jsonfile.writeFile(file, obj, (err) => {
                    if (err !== null) {
                        console.log(err);
                    }
                    else{
                       // obj.recipes[i].id = obj.recipes.length+1
                        response.send(`Recipe added!`);
                    }
                });
            }
            else{
                response.send(`ID number should be asaas`)
            }

        }
    });
});

///////////////////////////////////////////////////////////////////////////////////////////
//Get a specific Recipe from ID
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {

        let id = parseInt(request.params.id)-1;
        let recipe = obj.recipes[parseInt(id)];

        if (err){
            console.log(err);
        }
        else {
            // find recipe by id from the recipes json file
            for( let i=0; i<obj.recipes.length; i++ ){
                // let currentRecipe = obj.pokemon[i];
                // if( currentRecipe.id === inputId ){
                //     pokemon = currentRecipe;
                // }
                if(recipe.id === id){
                    return recipe;
                }
            }
            if (recipe === undefined) {
              // send 404 back
              response.status(404);
              response.send("Recipe not found");
            }
            else {
                let data = {
                    id:id,
                    recipe:recipe,
                    ingredients:recipe.ingredients
                }
                // console.log(data)
                response.render('id',data);
            }
        }
    });
});

////////////////////////////////////////////////////////////////////////
//Request to edit a specific Recipe
app.get('/recipes/:id/edit', (request, response) => {

  jsonfile.readFile(file, (err, obj) => {
    if( err ){
      console.log("error reading file");
      console.log(err);
      // respond.send("Recipe not found")
    }

    // console.log(obj);
    var id = request.params.id;
    var food = obj.recipes.find( recipe => recipe.id === id );
    // console.log(food)
    // console.log(food.ingredients)

    // var arr = food.ingredients;
    // console.log(arr)

    // food.ingredients.push(arr);
// console.log(food.ingredients)

    var data = {
      recipeId : id,
      food : food
    }
    // console.log(data)
    response.render('edit',data);
  });

});
////////////////////////////////////////////////////////////////////////
//Updates a specific Recipe
app.put('/recipes/:id', (request, response) => {

    var id = parseInt(request.params.id)-1;
    var newRecipe = request.body;
    // console.log(newRecipe);

  jsonfile.readFile(file, (err, obj) => {
    if( err ){
      console.log("error reading file");
      console.log(err)
    }
    // save data
    obj.recipes[id] = newRecipe;

    jsonfile.writeFile(file, obj, (err) => {
      if( err ){
        console.log("error writing file");
        console.log(err)
        response.status(503).send("Error writing file!");
      }else{

        // console.log( "send response");
        response.send("<h1>Recipe updated!!!</h1>");
      }
    });
  });
});
////////////////////////////////////////////////////////////////////////
//Request to delete a specific Recipe
app.get('/recipes/:id/delete', (request, response) => {

  jsonfile.readFile(file, (err, obj) => {
    if( err ){
      console.log("error reading file");
      console.log(err)
    }

    // console.log(obj);
    var id = request.params.id;
    var food = obj.recipes[parseInt(id)-1];

    var data = {
      recipeId : parseInt(id),
      food : food
    }

    response.render('delete', data);
  });

});
////////////////////////////////////////////////////////////////////////
//Delete a specific Recipe
app.delete('/recipes/:id', (request, response) => {
    var recipeId = request.params.id;

  jsonfile.readFile(file, (err, obj) => {

    if( err ){
      console.log("error reading file");
      console.log(err)
    }
    // delete data
    obj.recipes.splice(recipeId-1,1);
    console.log('Delete successful')

    const changedObj = obj;


    jsonfile.writeFile(file, changedObj, (err) => {
      if( err ){
        console.log("error writing file");
        console.log(err)
        response.status(503).send("Error writing file!");
      }else{
        console.log( "send response");
        response.send("<h1>Recipe deleted!!!</h1>");
      }
    });
  });
});



////////////////////////////////////////////////////////////////////////////////////////////
//Sort Recipe
//Sort alphabetically
// function sortByName(a, b) {
//   // Use toUpperCase() to ignore character casing
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   let comparison = 0;
//   if (nameA > nameB) {
//     comparison = 1;
//   } else if (nameA < nameB) {
//     comparison = -1;
//   }
//   return comparison;
// }

// //Sort by ID
// function sortByID(a, b) {
//   const indexA = a.id;
//   const indexB = b.id;

//   let comparison = 0;
//   if (indexA > indexB) {
//     comparison = 1;
//   } else if (indexA < indexB) {
//     comparison = -1;
//   }
//   return comparison;
// }
// //Sort by Weight
// function sortByWeight(a, b) {
//   const indexA = parseFloat(a.weight);
//   const indexB = parseFloat(b.weight);

//   let comparison = 0;
//   if (indexA > indexB) {
//     comparison = 1;
//   } else if (indexA < indexB) {
//     comparison = -1;
//   }
//   return comparison;
// }
// //Sort by Height
// function sortByHeight(a, b) {
//   const indexA = parseFloat(a.height);
//   const indexB = parseFloat(b.height);

//   let comparison = 0;
//   if (indexA > indexB) {
//     comparison = 1;
//   } else if (indexA < indexB) {
//     comparison = -1;
//   }
//   return comparison;
// }

//////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));