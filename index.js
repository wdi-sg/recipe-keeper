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

// DISPLAY FORM FOR USER TO ADD A NEW RECIPE
app.get('/recipes/new', (request, response) => {
  response.render("New");
});


// SEE ALL THE RECIPES
app.post('/recipes/', (request, response) => {
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
            response.send('You are cooking up a storm! You have added a recipe for ' + newRecipe.title);
            return;
        })
    })
})



// DISPLAY ALL RECIPES
app.get('/recipes', (request, response) => {
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



/** Listen to requests on port 3000 **/
app.listen(3000, () => console.log('~~~ Hello Budding Chefs! You are tuning in to the waves of port 3000 ~~~'));