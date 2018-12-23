const express = require('express');
const jsonfile = require('jsonfile');
// Init express app
const app = express();

const file = 'ingredient.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

 // Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/recipe', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = {};
        recipes.list = [];
        for(let i = 0; i < obj.length; i++){
            recipes.list.push(obj[i]);
        }
        response.render('recipehome', recipes);
    });
});

app.get('/recipe/new', (request, response) => {
        response.render('recipenew');
});

app.post('/recipe/add', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let newRecipe = {
            id: parseInt(obj.length + 1),
            name: request.body.name.charAt(0).toUpperCase() + request.body.name.slice(1)
        }
        obj.push(newRecipe);
        response.render('recipeadd', newRecipe);
        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
        });
    });
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));