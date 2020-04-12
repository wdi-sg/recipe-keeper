const jsonfile = require('jsonfile');
const dateformat = require('dateformat');
const file = 'data.json';
const ingredient = 'ingredient.json';

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

//------------------------------------------------------
// Home Page //
// -  -
//------------------------------------------------------

app.get('/', (req, res) => {
    res.redirect('/recipes');
});

app.get('/recipes', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const allRecipes = obj;
        res.render('home', allRecipes);
    });
});

//------------------------------------------------------
// Create Page //
// -  -
//------------------------------------------------------
app.get('/recipes/new', (req, res) => {

    jsonfile.readFile(file, (err, obj) => {
        const allRecipes = obj;
        res.render('create', allRecipes);
    });
});



//display form for adding recipe
app.get('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
            const index = parseInt(req.params.id)-1;
            const recipeData = {
                index : index,
                recipe : obj.recipes[index],
            }
            res.render('show', recipeData);
    });
});

//------------------------------------------------------
// Edit Page //
// -  -
//------------------------------------------------------

app.get('/recipes/:id/edit', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id)-1;
            const recipeData = {
                index : index,
                recipe : obj.recipes[index],
            }
        res.render('edit', recipeData);
    });
});

//------------------------------------------------------
// Save changes Page //
// -  -
//------------------------------------------------------

app.post('/recipes', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            res.send(err);
            return;
        }
        const recipe = req.body;

        obj.recipes.push(recipe);

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            const newRecipeLink = '/recipes';
            res.redirect(newRecipeLink);
        });
    });
});


//------------------------------------------------------
// Show (Read) Page //
// -  -
//------------------------------------------------------

app.put('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id)-1;
        obj.recipes[index] = req.body;

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            const link = "/recipes";
            res.redirect(link);
        });
    });
});

//------------------------------------------------------
// Show (delete) Page //
// -  -
//------------------------------------------------------

app.delete('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id);
        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            res.redirect('/');
        });
    });
});


app.listen(3000, () => console.log("~~~~~~~~~port 3000 waving~~~~~~~~~"));