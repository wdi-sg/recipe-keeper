const express = require('express');
const jsonfile = require('jsonfile');

const FILE = 'data.json';

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



/**==================================+
            Routes
* ===================================*/


// DISPLAY ALL RECIPES
// Link Works:  http://localhost:3000/recipes/
app.get('/recipes/', (request, response) => {
    jsonfile.readFile(FILE, (err, obj) => {
      console.log(obj.recipes);
      console.log(obj);
      let listOfRecipes = obj.recipes;
      const data = {
        recipeList: listOfRecipes
      }
      response.render("Home", data);
  })
});



// DISPLAY FORM FOR USER TO ADD A NEW RECIPE
// Link Works : http://localhost:3000/recipes/new
app.get('/recipes/new', (request, response) => {
  response.render("New");
});



// SHOWS MESSAGE THAT USER HAS ADDED NEW RECIPE
// Link Works: http://localhost:3000/recipes
app.post('/recipes', (request, response) => {
    console.log('Received POST');
    console.log(request.body);
    const newRecipe = {
        title: request.body.title,
        ingredients: request.body.ingredients,
        instructions: request.body.instructions
    };

    jsonfile.readFile(FILE, (err, obj) => {
        // This ensures file is properly read
        if (err) {

            console.log("There is an error", err);
            response.status(503).send("Error");
            return;
        }

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(FILE, obj, (err) => {
            if (err) console.log(err);
            console.log('New ' + newRecipe);
            response.send('You are cooking up a storm!  👩🏾‍🍳 You have added a recipe for ' + newRecipe.title);
            return;
        })
    })
})



//  DISPLAYS A SINGLE RECIPE
// Link Works: http://localhost:3000/recipes/1
app.get('/recipes/:id', (request, response) => {
    const id = request.params.id
    jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
        console.log("Error with JSON read file:",err);
        response.status(503).send("Error reading file");
        return;
    }

    const requestedRecipe = obj.recipes[id]
    const data = {
      recipe: requestedRecipe
    }

    response.render('Queryid', data)

  })
})





/// ADD A FORM AT THE PATH: /pokemon/:id/edit
// Link Works: http://localhost:3000/recipes/1/edit but did not after clicking submit
app.get('/recipes/:id/edit',(request, response) => {
    const id = request.params.id
    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            return console.log(err)
    }
    const requestedRecipe = obj.recipes[id]
    const data = {
      id: id,
      recipe: requestedRecipe
    }
    response.render('Edit', data)
  })
})





app.put('/recipes/:id', (request, response) => {
    const id = request.params.id
    const editedRecipe = request.body
    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            return console.log(err)
        }
        Object.assign(obj.recipes[id], editedRecipe)
        const data = {
            message: "You have adjusted your secret recipe",
            recipe: editedRecipe
        }

        jsonfile.writeFile(FILE, obj, (err) => {
            if (err) {
                return console.log(err)
            }
            response.render('Revisedrecipe', data)
        })
    })
})








/*app.put('/recipes/:id', (request, response) => {

  let newData = request.body
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      return console.log(err)
    }
    let id = request.params.id;
    obj.recipes[id] = newData;

    jsonfile.writeFile(FILE, obj, (err) => {
      if (err) {
        return console.log(err)
      }
      response.render('Queryid', data);
    })
  })
})*/






















/** Listen to requests on port 3000 **/
app.listen(3000, () => console.log('~~~   👩🏾‍🍳 👩🏾‍🍳 👩🏾‍🍳  Hello Budding Chefs! You are tuning in to the waves of port 3000 ~~~ '));



//  SEE A SINGLE RECIPE  => does not work
/*app.get('/recipes/:id', (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
        console.log("Error with JSON read file:",err);
        response.status(503).send("Error reading file");
        return;
    }

    let inputId = parseInt(request.params.id);
    var recipe;

    let currentRecipe = obj.recipes[inputId];

    if ( currentRecipe === obj.recipes[inputId] ) {
        recipe = currentRecipe;
      }
    if (recipe === undefined) {
      response.status(404);
      response.send("Recipe Not Found 😐");
    } else {
        const data = {
        recipeList: recipe
        }
        response.render("Queryid", data);
    }
  });
});*/



/// ADD A FORM AT THE PATH: /pokemon/:id/edit
// Link Works: http://localhost:3000/recipes/1/edit but did not after clicking submit
/*app.get('/recipes/:id/edit',(request, response) => {
    let index = parseInt(request.params.id) - 1; // minus one
    jsonfile.readFile(FILE, (err, obj) => {
        console.log(obj)
        let recipe = obj.recipes[index];
        const data = {
            name: recipe,
        };
        response.render('Edit', data);
    })
})
*/



/*app.put('/recipes/:id', (request, response) => {

  let newData = request.body
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      return console.log(err)
    }
    let id = request.params.id;
    obj.recipes[id] = newData;

    jsonfile.writeFile(FILE, obj, (err) => {
      if (err) {
        return console.log(err)
      }
      response.render('Queryid', data);
    })
  })
})*/
