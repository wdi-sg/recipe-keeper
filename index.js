const jsonfile = require('jsonfile');

const file = 'recipes.json'
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const Request = require("request");
var React = require('react');

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+'/public/'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

//Display the form for a single recipe
app.get('/recipes/new', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        res.render('addRecipe', obj);
    });
});

//Create a new recipe
app.post('/recipes', (req, res) => {
    jsonfile.readFile(file, (err,obj) => {
        let recipesArray = obj.recipes;
        req.body.id = parseInt(recipesArray.id + 1);
        recipesArray.push(req.body);
        let newRecipesJson = {recipes: recipesArray};

        // save the request body
        jsonfile.writeFile(file, newRecipesJson, (err) => {
            console.log(err);
            prompt("Recipe Added!");
            res.redirect('/recipes/'); // after posting new recipe, redirect to display all recipes.
        })
    })
});

// app.post('/recipes/new', (req, res) => {
//     jsonfile.readFile(file, (err, obj) => {

//         response.send(request.body)
//         obj.recipes.push(request.body)

//         jsonfile.writeFile(file, obj, (err) => {
//             // res.render("addRecipe")
//             // res.redirect("/recipes")

//         })
//     })
// })

//See all the recipes
app.get('/recipes/', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        res.render('viewRecipes', obj);
    });
});

//recipes/:id    GET show    See a single recipe **
app.get('/recipes/:id', (req,res) => {
    let recipeID = req.params.id;

    jsonfile.readFile(file, (err, obj) => {
        if(err) {
            console.log(err);
        }
        let searchedRecipe = obj["recipes"][id];
        res.render("viewRecipes", searchedRecipe);
    });
});

//recipes/:id/edit   GET edit    Display the form for editing a single recipe
app.get('/recipes/:id/edit', (req,res) => {

    jsonfile.readFile(file, (err, obj) => {
        let recipeArray = obj.recipes[parseInt(req.params.id) -1];
        res.render('editRecipe',recipeArray);
    });
});


//recipes/:id    PATCH/PUT   update  Update a recipe
app.put('/recipes/:id', (req,res) => {
    let updateRecipe = req.params.id;
    let recipeId = req.query;

    jsonfile.readFile(file, (err, obj) => {

    });
});

//recipes/:id    DELETE  destroy Remove a recipe
app.delete('/recipes/:id', (req,res) => {
    let recipeName = req.params.id;

    jsonfile.readFile(file, (err, obj) => {
        for(let i = 0; i < obj.recipes.length; i++) {
            if(recipeName === obj.recipes[i].id){

                obj.recipes.splice(parseInt(obj.recipes[i].id) -1,1)
            }
        }

        res.render('');
        jsonfile.writeFile(file, obj, (err) => {

        });
    });
});



app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
