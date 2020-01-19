/**
* ===================================
* Configurations and set up
* ===================================
*/

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


/**
* ===================================
* Routes
* ===================================
*/

// index to see all recipes
app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let allRecipes = [];
        let listOfRecipes = obj.recipes;
        for (i = 0; i < listOfRecipes.length; i++) {
            let currentRecipe = listOfRecipes[i].title;
            allRecipes.push(currentRecipe);
            console.log(currentRecipe);
        }

        let data = {
            title: allRecipes
        }

        response.render('all', data);
    });
}); // end see all recipes

// add new recipes (form)
app.get('/recipes/new', (request, response) => {
    response.render("form");
}); // end add new recipes (form)

// add new recipes (app.POST) sends data
app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        // save the request body
        let recipes = obj.recipes;
        let recipeTitle = request.body.title;
        let recipeId = parseInt(recipes.length + 1);
        let recipeIngredients = request.body.ingredients;
        let recipeInstructions = request.body.instructions;
        let data = {
            id : recipeId,
            title : recipeTitle,
            ingredients : recipeIngredients,
            instructions : recipeInstructions,
        }

        if (recipeTitle === "") {

        console.log("Enter Pokemon name")
        response.redirect(301, '/pokemon/new');
        return false;
        }

        response.send(data);
        obj.recipes.push(data);

        jsonfile.writeFile(file, obj, err => {
        console.error(err)

        // now look inside your json file
        // response.send(request.body);
        response.render('all', data);
        });
    });
}); // end add new recipes (send data)

// see single recipe 
app.get('/recipes/:id', (request,response) => {
    jsonfile.readFile(file, (err, obj) => {
        // check to make sure the file was properly read
        if( err ){
          console.log("error with json read file:",err);
          response.status(503).send("error reading filee");
          return;
        }
        // obj is the object from the pokedex json file
        // extract input data from request
        let currentRecipe = parseInt(request.params.id);
    
        var recipes;
    
        // find pokemon by id from the pokedex json file
        for( let i=0; i<obj.recipes.length; i++ ){
            let currentRecipes = obj.recipes[i];
            let data = {
                id : parseInt(currentRecipes.id),
                title : currentRecipes.title,
                ingredients : currentRecipes.ingredients,
                instructions : currentRecipes.instructions,
            }
    
          if( currentRecipes.id === currentRecipe ){
            recipes = currentRecipes;
            response.render('single', data);
          }
        }
    
        if (recipes === undefined) {
          // send 404 back
          response.status(404);
          response.send("not found");
        } else {
    
          //response.send(pokemon);
        }
    });
}); // end single recipe

// edit recipes
app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
      let searchedId = parseInt(request.params.id);
      let searchedIndex = searchedId - 1;
      let currentRecipe = obj.recipes[searchedIndex];
      console.log(currentRecipe.id)
      let data = {
          "id": currentRecipe.id,
          "title": currentRecipe.title,
          "ingredients": currentRecipe.ingredients,
          "instructions": currentRecipe.instructions,
        }
      response.render('edit', data);
    })
}); // end edit recipes

// post EDIT recipes data
app.put('/recipes/:id', (request,response) => {
    let searchedId = parseInt(request.params.id);
    let searchedIndex = searchedId - 1;
    let recipeTitle = request.body.title;
    let recipeId = parseInt(request.body.id);
    let recipeIngredients = request.body.ingredients;
    let recipeInstructions = request.body.instructions;
    let data = {
        id : parseInt(recipeId),
        title : recipeTitle,
        ingredients : recipeIngredients,
        instructions : recipeInstructions,
    }
    // response.send('hey put '+request.params.id);
  
    jsonfile.readFile(file, (err, obj) => {
      // save the request body
  
      obj.recipes[searchedIndex] = data;
      Object.assign(obj.recipes[searchedIndex], data)
  
      jsonfile.writeFile(file, obj, (err) => {
        console.error(err)
  
        response.render('single', data);
      });
    });
});// end EDIT recipes

// delete recipes
app.get('/recipes/:id/delete',(request, response)=>{
    jsonfile.readFile(file, (err, obj) => {
        // save the request body

        let searchedId = parseInt(request.params.id);
        let searchedIndex = searchedId - 1;
        console.log(searchedId)
        let currentRecipe = obj.recipes[searchedId];
    // response.send('hey put '+request.params.id);
        let data = {
            "id": currentRecipe.id,
            "name": currentRecipe.name,
        }

        jsonfile.writeFile(file, obj, (err) => {
        console.error(err)

        response.render('delete', data);
        }); 
    });
}); // end delete recipes

// action recipes DELETE
app.delete("/recipes/:id", (request, response) => {
    let searchedId = parseInt(request.params.id);
    let searchedIndex = searchedId - 1;
    console.log(searchedIndex)
    jsonfile.readFile(file, (err, obj) => {
        obj.recipes.splice(searchedIndex, 1);
        console.log(searchedIndex)
        jsonfile.writeFile(file, obj, err => {
        response.render('all', data);
    });
});
});

// catch all 
app.get('*', (request, response) => {
  response.send("accepted");
});

/**
* ===================================
* PORT
* ===================================
*/

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
