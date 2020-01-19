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



/**=======================================***+
            Routes
** ========================================***/

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
     const id = parseInt(request.params.id);
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
// Link Works: http://localhost:3000/recipes/1/edit
app.get('/recipes/:id/edit',(request, response) => {
    const id = parseInt(request.params.id);

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


// THIS WORKS
app.put('/recipes/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const editedRecipe = request.body
    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            return console.log(err)
        }
        Object.assign(obj.recipes[id], editedRecipe)
        const data = {
            message: "You have revised your recipe",
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




// DISPLAYS RECIPE THAT USER WANTS TO DELETE
app.get('/recipes/:id/delete',(request, response) => {
    const id = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            return console.log(err)
    }
    const queryRecipe = obj.recipes[id]
    const data = {
      id: id,
      recipe: queryRecipe
    }
    response.render('Delete', data)
  })
})



// DELETES A RECIPE
// work in progress
app.delete('/recipes/:id', (request, response) => {
    const id = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {
        if (err) {
            return console.log(err)
        }

        const data = {
            message: "You have deleted your recipe",
            id: id,
        }

        obj.recipes.splice(id, 1)
        jsonfile.writeFile(FILE, obj, (err) => {
            if (err) {
                return console.log(err)
            }
            response.render('Deletedrecipe', data);
        })
    })
})





/** Listen to requests on port 3000 **/
app.listen(3000, () => console.log('~~~   👩🏾‍🍳 👩🏾‍🍳 👩🏾‍🍳  Hello Budding Chefs! Welcome to the 🥗 Plant Based 🥗 Recipe Keeper! You are now tuning in to the waves of port 3000 ~~~ '));
