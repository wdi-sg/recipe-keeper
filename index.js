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
    let sortType = "none";

    jsonfile.readFile(file, (err, obj) => {
        let allRecipes = obj.recipes;
        const data = {
            sortType : sortType,
            allRecipes : allRecipes
        };
        res.render('home', data);
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
        const reqId = parseInt(req.params.id);
        var index = obj.recipes.map((o) => o.id).indexOf(reqId);

        recipe = obj.recipes[index];
        console.log(recipe.title);
        console.log(recipe.id);

        res.render('show', recipe);
    });
});



app.get('/recipes/sort/:type', (req, res) => {
    let sortType = req.params.type;
    console.log("recipes/sort/type " + sortType)
    jsonfile.readFile(file, (err, obj) => {
        let allRecipes = obj.recipes;
        if(sortType === "title") {
            const data = {
                sortType : sortType,
                allRecipes : allRecipes
            };
            console.log(sortType)
            res.render('home', data);
        } else if (sortType === "id") {
            const data = {
                sortType : sortType,
                allRecipes : allRecipes
            }
            console.log(sortType)
            res.render('home', data);
        }

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
        const recipe = req.body
        recipe.id = parseInt(req.body.id);

        obj.recipes.push(recipe);

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            const newRecipeLink = '/recipes/'+recipe.id;
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
        const reqId = parseInt(req.params.id);
        var index = obj.recipes.map((o) => o.id).indexOf(reqId);
        obj.recipes[index] = req.body;
        obj.recipes[index].id = parseInt(req.body.id);

        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            const link = "/recipes/"+reqId;
            res.redirect(link);
        });
    });
});


//------------------------------------------------------
// Edit Page //
// -  -
//------------------------------------------------------

app.get('/recipes/:id/edit', (req, res) => {
    const reqId = parseInt(req.params.id);
    jsonfile.readFile(file, (err, obj) => {
        // console.log("reqID for edit" + reqId)
        var index = obj.recipes.map((o) => o.id).indexOf(reqId);
        console.log("reqID for edit: " + index)

        recipe = obj.recipes[index];

        console.log("id: " + recipe.id)
        console.log("recipet edut: " + recipe.title)

        res.render('edit', recipe);
    });
});

//------------------------------------------------------
// Show (delete) Page //
// -  -
//------------------------------------------------------

app.delete('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const reqId = parseInt(req.params.id);
        var index = obj.recipes.map((o) => o.id).indexOf(reqId);

        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, {spaces: 2}, (err) => {
            res.redirect('/');
        });
    });
});


app.listen(3000, () => console.log("~~~~~~~~~port 3000 waving~~~~~~~~~"));