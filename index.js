// ===================================
//           Boilerplate
// ===================================


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

// ===================================
//              Routes
// ===================================

app.get('/', (request, response) => {
    response.redirect('/recipes');
})

// All recipes

app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        let allRecipes = obj.recipes
       
        let data = {
            recipes: allRecipes
        }

        response.render('all', data);
    });
});

// New recipes

app.get('/recipes/new', (request, response) => {
    response.render('new');
})

app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        
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
})


// Single recipe page

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
})
// Edit recipes

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
}); 

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
  

    jsonfile.readFile(file, (err, obj) => {
      

      obj.recipes[searchedIndex] = data;
      Object.assign(obj.recipes[searchedIndex], data)

      jsonfile.writeFile(file, obj, (err) => {
        console.error(err)

        response.render('single', data);
      });
    });
})


    
    
app.delete("/recipes/:id", (request, response) => {
    jsonfile.readFile(file, (error, obj) => {
      const all = parseInt(request.params.id) -1;
      obj.recipes.splice(all, 1)
      jsonfile.writeFile(file, obj, (error) => {
        response.redirect('/recipes/');
      })
    })
  })

 

// ===================================
//   Listen to requests on port 3000
// ===================================

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));