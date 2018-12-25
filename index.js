/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const express = require('express');
// Init-ialize express
const app = express();
const jsonfile = require('jsonfile');
const FILE = 'data.json';

// Tell your app to use the module
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/**
 * ===================================
 * Functions
 * ===================================
 */

function getID() {
    return Math.floor((Math.random() * 10000) + 1)
}

function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return `${day}-${month}-${year}`
}

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/recipes/', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        res.send(obj);
    })
})

 app.get('/recipes/new', (req, res) => {
    res.render('new');
 })



app.post('/recipes', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        newRecipe = {};
        newRecipe["name"] = req.body.name;
        newRecipe["ingredients"] = req.body.ingredients;
        newRecipe["instructions"] = req.body.instructions;

//  Generate a unique and 'robust' id
        let newId = getID();
        while (obj.idList.includes(newId)) {
            newId = getID();
        }
        newRecipe["id"] = getID();

//  Generate date for Data
        newRecipe['date'] = getDate();

//  Push new recipe into json
        obj.recipes.push(newRecipe);
        obj.idList.push(newRecipe["id"])
        console.log(obj);
        res.send(newRecipe);

//  write JSONfile
        jsonfile.writeFile(FILE, obj, (err) => {
            console.error(err);
        });

    });
});



app.get('/recipes/:id', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
//  Find the recipe
        var recipe;
        for (let i = 0; i < obj.recipes.length; i++) {
            if (obj.recipes[i].id === parseInt(req.params.id)) {
                recipe = obj.recipes[i]
            }
        };
        console.log(recipe);

        if (obj.idList.includes(parseInt(req.params.id))) {
            res.send(recipe);
            } else {
            res.status(404);
            res.send("id not found");
        };

        jsonfile.writeFile(FILE, obj, (err) => {
            console.error(err);
        });
    })
 })



app.get('/recipes/:id/edit', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        var recipe;
        for (let i = 0; i < obj.recipes.length; i++) {
            if (obj.recipes[i].id === parseInt(req.params.id)) {
                recipe = obj.recipes[i]
            }
        };

        if (obj.idList.includes(parseInt(req.params.id))) {
            res.render('edit', recipe);
        }
        else {
            res.status(404);
            res.send("id not found");
        };
    });
})

app.put('/recipes/:id', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
//  Find the recipe
        var recipe;
        for (let i = 0; i < obj.recipes.length; i++) {
            if (obj.recipes[i].id === parseInt(req.params.id)) {
                recipe = obj.recipes[i]
            }
        };

//  Update Recipe
        recipe["name"] = req.body.name;
        recipe["ingredients"] = req.body.ingredients;
        recipe["instructions"] = req.body.instructions;

        jsonfile.writeFile(FILE, obj, (err) => {
            console.error(err);
            res.redirect('/recipes/' + req.params.id);
        });
    })
});

// app.delete('/recipes/:id', (req, res) => {

// })


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

