const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();

// Configure express
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Method override for PUT and DEL requests
const methodOverride = require('method-override')
const replacementMethods = { methods: ['GET', 'POST'] };
app.use(methodOverride('_method', replacementMethods));


// React Renderer
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

//
const recipesFile = 'recipes.json';


///////////////////////
// *** FUNCTIONS *** //
///////////////////////


///////////////////////
// Listen responses. //
///////////////////////

// POST request to add a new recipe to the list:
app.post('/recipes', (request, response) => {
    // Validate the input, if not valid then return/render the form again with changes to be made.
    console.log(request.body);

    const newRecipe = {
        title: request.body.title,
        ingredients: request.body.ingredients,
        method: request.body.method,
        dateCreated: new Date(),
        dateUpdated: new Date()
    }

    jsonfile.readFile(recipesFile, (err, obj) => {
        if (err) {
            console.log(err);
            response.status(501).send('Error when reading the file: ' + err);
            return;
        }

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) {
                console.log(err);
                response.status(501).send('Error when writing the file: ' + err);
                return;
            }

            const newIndex = obj.recipes.length - 1;
            const data = {
                recipe: obj.recipes[newIndex],
                message: `${newRecipe.title} has now been added to the recipe database`,
                title: 'Successfully Added',
                recipeId: newIndex
            };
            response.render('recipe', data)
            return;
        })
    })
})

// Delete record at ID.
app.delete('/recipes/:id', (request, response) => {
  // if id is not a number, return not found.
  if (isNaN(request.params.id)) {
      response.status(404).send(`Not found, ${request.params.id} is not a valid number.`);
      return;
  }
  const getRequestId = parseInt(request.params.id);

  jsonfile.readFile(recipesFile, (err, obj) => {
      if (err) {
          console.log(err);
          response.status(501).send('Error when reading the file: ' + err);
          return;
      }

      // if not in the array, return not found.
      if (!obj.recipes[getRequestId]) {
          response.status(404).send(`Recipe number ${getRequestId} not found`);
          return;
      }

      obj.recipes.splice(getRequestId, 1);

      jsonfile.writeFile(recipesFile, obj, (err) => {
          if (err) {
              console.log(err);
              response.status(501).send('Error when writing the file: ' + err);
              return;
          }
          const message = `recipe ${getRequestId} deleted`;
          const data = { message: message };
          response.render('message', data);
          return;
      })
  })
})

// PUT request to change a recipe in place
app.put('/recipes/:id', (request, response) => {
    // Validate the input, if not valid then return/render the form again with changes to be made.
    console.log('This is app.put');
    console.log('id: ' + request.params.id);
    console.log(request.body);

    const newRecipe = {
        title: request.body.title,
        ingredients: request.body.ingredients,
        method: request.body.method
    }

    jsonfile.readFile(recipesFile, (err, obj) => {
        if (err) {
            console.log(err);
            response.status(501).send('Error when reading the file: ' + err);
            return;
        }

        obj.recipes[request.params.id] = newRecipe;

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) {
                console.log(err);
                response.status(501).send('Error when writing the file: ' + err);
                return;
            }

            const data = {
                recipe: obj.recipes[request.params.id],
                message: 'Recipe updated',
                recipeId: request.params.id
            };
            response.render('recipe', data)
            return;
        })
    })
})

// Display form to add a recipe:
app.get('/recipes/new', (request, response) => {
    response.render('addrecipe');
})

// redirect /add to /new just in case.
app.get('/recipes/add', (request, response) => {
    response.status(301).redirect('/recipes/new');
})

// Edit a recipe, and push in a PUT request.
app.get('/recipes/:id/edit', (request, response) => {

    if (isNaN(request.params.id)) {
        response.status(404).send(`Not found, ${request.params.id} is not a valid number.`);
        return;
    }
    const getRequestId = parseInt(request.params.id);

    jsonfile.readFile(recipesFile, (err, obj) => {
        if (err) {
            console.log(err);
            response.status(501).send('Error when reading the file: ' + err);
            return;
        }
        const recipeToEdit = obj.recipes[getRequestId];
        const data = {
            recipe: recipeToEdit,
            recipeId: getRequestId
        };
        response.render('editrecipe', data);
    })
})

// Display a recipe by the index of the recipe in the array:
app.get('/recipes/:id', (request, response) => {
    // if id is not a number, return not found.
    if (isNaN(request.params.id)) {
        response.status(404).send(`Not found, ${request.params.id} is not a valid number.`);
        return;
    }
    const getRequestId = parseInt(request.params.id);

    jsonfile.readFile(recipesFile, (err, obj) => {
        if (err) {
            console.log(err);
            response.status(501).send('Error when reading the file: ' + err);
            return;
        }

        // if not in the array, return not found.
        if (!obj.recipes[getRequestId]) {
            response.status(404).send(`Recipe number ${getRequestId} not found`);
            return;
        }
        const recipeToDisplay = obj.recipes[getRequestId];

        const data = {
            recipe: recipeToDisplay,
            recipeId: getRequestId
        };
        response.render('recipe', data);
        return;
    })

})

// get index list of recipes.
app.get('/recipes/', (request, response) => {
  console.log('listing all recipes');
  jsonfile.readFile(recipesFile, (err, obj) => {
      if (err) {
          console.log(err);
          response.status(501).send('Error when reading the file: ' + err);
          return;
      }

      const data = {
          recipes: obj.recipes,
      };
      response.render('recipelist', data);
      return;
  })
})


// Have a nice homepage. Placeholder for now.
app.get('/', (request, response) => {
  const pageTitle = `The Freshly Baked Cookbook!`;
  const message = `Welcome to the new Freshly Baked Cookbook, the best page for amazing recipes delivered in a real sarcastic manner`;
  const data = { title: pageTitle , message: message };
  response.render('message', data);
})


// Catch all for any sort of request
app.get('*', (request, response) => {
    const message = '404 Not Found';
    const data = {
        message: message
    };
    response.render('message', data);
})


// Listen
const listenPort = 3000;
app.listen(3000, () => {
    console.log(`Listening to incoming input on port ${listenPort}`)
});
