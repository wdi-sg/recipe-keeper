const express = require('express');
const jsonfile = require('jsonfile');
const file = 'data.json';

/**
 * ===================================
 * Configurations and set up for index.js
 * ===================================
 */

// Init express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Init Method-Override for PUT and DELETE
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
// Init REACT
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */

const home = (request,response) => {
    jsonfile.readFile('data.json', (err,obj) => {
        let data = {
            recipes: obj.recipes
        }
    response.render('home',data)
    })
}

const form = (request, response) => {
    response.render('form');
}

const postRecipes = (request,response) => {

    let info = request.body


    jsonfile.readFile('data.json', (err,obj) => {

        let newData = {
        title: info.title,
        ingredients: info.ingredients,
        instructions: info.instructions,
        }

        let data = {
            recipes: obj.recipes
        }

            obj.recipes.push(newData);

            jsonfile.writeFile('data.json', obj, (err) => {
                console.log(err);
                response.render("home", data);
            });
    });
}

const edit = (request,response) => {
    jsonfile.readFile(file, (err,obj) => {
        let id = request.params.id;
        let data = {
            recipes: obj.recipes[id],
            id: id
        }
    response.render("edit", data)
    })
}

const editRecipes = (request,response) => {

    jsonfile.readFile(file, (err, obj) => {

      let data = {
        recipes: obj.recipes,
        id: request.params.id
        }

      let recipes = obj.recipes[request.params.id]

      let recipesTitle = request.body.title;
      let recipesIngredient = request.body.ingredients;
      let recipesInstructions = request.body.instructions;

      recipes.title = recipesTitle;
      recipes.ingredients = recipesIngredient;
      recipes.instructions = recipesInstructions;

      jsonfile.writeFile(file, obj, (err) => {
          console.error(err)
          response.render("home", data);
    });
  });
}

app.get('/recipes', home);
app.get('/recipes/new', form);
app.get('/recipes/edit/:id', edit);
app.put('/recipes/:id', editRecipes)
app.post('/recipes', postRecipes);


app.get('/', (request, response) => {
  response.render('home');
});


/**
 * ===================================
 * Listen to requests on port 3000 OR server's port
 * ===================================
 */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`~~~ Listening on port ${port} ~~~`));