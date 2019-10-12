/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

 //========require jsonfile ========
const jsonfile = require('jsonfile');

const FILE = 'data.json';

//========require express ========
const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

//======tell your app to use the module========
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')

app.use(methodOverride('_method'));

// express-react-views
// react
// react-dom
const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// set react to be the default view engine
app.set('view engine', 'jsx');

//plan
//homepage tith navigation,jsx files for home and nav, app.get / - done

//view all recipes, app.get recipes, jsx file  viewRecipe.jsx
//add recipe, app get recipes/addrecipe, jsx file with form, (method post) (title, img, ingredients,preparation(bigger div), submit btn)
//created recipe, jsx file to preview the new recipe, app.post /recipes,  viewnewrecipe
//edit recipe, jsx file with form, method-post, app.get recipes.id/edit,
//delete recipe, jsx file with form (action override, method-post), app.delete recipes/id/delete

//in views touch viewRecipes.jsx addNewRecipe.jsx viewNewRecipe.jsx editRecipe.jsx deleteRecipe.jsx

//add reciope jsx file,

/**
 * ===================================
 * Routes
 * ===================================
 */

//home page with navigation
app.get('/', (req, res) => {

res.render('home');

});

//add recipe, render add new, form file  app.get
app.get('/recipes/new', (req, res) => {

res.render('addNewRecipe');

});

//post in json file, render view new, app.post
app.post('/recipes', (req, res) => {


     jsonfile.readFile(FILE, (err, obj)=>{

        obj.recipes.push(req.body);
        res.render("viewNewRecipe", req.body);

        jsonfile.writeFile(FILE, obj, (err)=>{
            console.log(err);
        });
    });



  });



 /**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(5000, () => console.log('~~~ Tuning in to the waves of port 5000 ~~~'));