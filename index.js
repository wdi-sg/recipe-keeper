const jsonfile = require('jsonfile');
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
        const allRecipes = {
            recipes: obj.recipes
        }
        res.render('home', allRecipes);
    })
})

//------------------------------------------------------
// Edit Page //
// -  -
//------------------------------------------------------

app.get('/recipes/:id/edit', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id) - 1;
        const data = {
            id: index + 1,
            title: obj.recipes[index].title,
            ingredients: obj.recipes[index].ingredients,
            instructions: obj.recipes[index].instructions
        }
        res.render('edit', data);
    })
})

//------------------------------------------------------
// Create Page //
// -  -
//------------------------------------------------------
app.get('/recipes/new', (req, res) => {
    res.render('create')
})

//display form for adding recipe
app.get('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
            const index = parseInt(req.params.id) - 1;
            const data = {
                id: index + 1,
                title: obj.recipes[index].title,
                ingredients: obj.recipes[index].ingredients,
                instructions: obj.recipes[index].instructions
            }
            res.render('show', data);
    })
})

//------------------------------------------------------
// Show (delete) Page //
// -  -
//------------------------------------------------------

app.delete('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id)-1;
        obj.recipes.splice(index, 1);

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            res.redirect('/');
        });
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
        const recipes = obj.recipes;
        recipes.push(req.body);

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            const newRecipeLink = '/recipes/' + recipes.length;
            res.redirect(newRecipeLink);
        })
    })
})

//------------------------------------------------------
// Show (Read) Page //
// -  -
//------------------------------------------------------

app.put('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id) - 1;
        obj.recipes[index] = req.body;

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            const link = "/recipes/" + (index+1);
            res.redirect(link);
        })

    })
})





app.listen(3000, () => console.log("~~~~~~~~~port 3000 waving~~~~~~~~~"));