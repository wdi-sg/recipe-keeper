const jsonfile = require('jsonfile');

const recipesFile = 'recipes.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public/'));

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

app.get('/recipes', (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {

        let recipes = obj.recipes;

        let recipeData = {
            recipes : recipes
        }
        res.render('home', recipeData);
    })
})

app.get('/recipes/new', (req,res) => {
    res.render('new-recipe');
})

app.post('/recipes', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let newRecipe = req.body;
        obj.recipes.push(newRecipe);

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log('err: ' + err);
            else console.log('success in creating!');
            // res.send('good!');
            res.redirect('/recipes');
        })
    })
})

app.get('/recipes/:id', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        let currentRecipe = obj.recipes[currentId-1];

        let recipeData = {
            currentRecipe : currentRecipe,
            currentId : currentId
        }
        res.render('individual-recipe', recipeData);
    })
})

app.get('/recipes/:id/edit', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        let currentRecipe = obj.recipes[currentId-1];

        let recipeData = {
            currentRecipe : currentRecipe,
            currentId : currentId
        }
        res.render('edit-recipe', recipeData);
    })
})

app.put('/recipes/:id', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentRecipe = req.body;
        let currentId = parseInt(req.params.id);

        obj.recipes[currentId-1] = currentRecipe;

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log('err: ' + err);
            else console.log('success in editing!');
            res.redirect(`/recipes/${currentId}`);
        })
    })
})

app.get('/recipes/:id/delete', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        let currentRecipe = obj.recipes[currentId-1];

        let recipeData = {
            currentRecipe : currentRecipe,
            currentId : currentId
        }
        res.render('delete-recipe', recipeData);
    })
})

app.delete('/recipes/:id', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        // let currentRecipe = req.body;
        let currentId = parseInt(req.params.id);

        obj.recipes.splice(currentId-1,1);

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log('err: ' + err);
            else console.log('success in deleting!');
            res.redirect(`/recipes`);
        })
    })
})

app.get('*', (req, res) => {
  res.redirect('/recipes');
})


/**
 * ===================================
 * Listen to requests on port 2345
 * ===================================
 */

let port = 2345;
app.listen(port, ()=> {
    console.log('You are in port: '+ port + '!');
})