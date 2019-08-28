const jsonfile = require('jsonfile');

const file = 'recipes.json'
const express = require('express');
const app = express();
const methodOverride = require('method-override')
//const Request = require("request");
var React = require('react');

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname+'../public'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);
app.set('views', __dirname);
app.set('view engine', 'jsx');

//Display the form for a single recipe
app.get('/recipes/new', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        res.render('addRecipe', obj);
    });
});

//Create a new recipe
app.post('/recipes/', (req, res) => {
    jsonfile.readFile(file, (err,obj) => {
        let recipesArray = obj.recipes;
        //req.body.id = parseInt(recipesArray.id + 1);
        recipesArray.push(req.body); // req.body contains the form input
        let newRecipesJson = {recipes: recipesArray};
        
        // save the request body
        jsonfile.writeFile(file, newRecipesJson, (err) => {
            console.log(err);
            console.log("Recipe Added!");
            res.redirect('/recipes/'); // after posting new recipe, redirect to display all recipes.
        })
    })
});

//See all the recipes
app.get('/recipes/', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        console.log(obj);
        res.render('home', obj);
    });
});

//recipes/:id    GET show    See a single recipe **
app.get('/recipes/:id', (req,res) => {
    let recipeID = req.params.id;

    jsonfile.readFile(file, (err, obj) => {
        if(err) {
            console.log(err);
        }
        let searchedRecipe = obj["recipes"][recipeID-1];
        console.log(searchedRecipe);
        //res.send(searchedRecipe);
        res.render("viewSingleRecipe", searchedRecipe);
    });
});

//recipes/:id/edit   GET edit    Display the form for editing a single recipe
app.get('/recipes/:id/edit', (req,res) => {
    let recipeID = req.params.id;

    jsonfile.readFile(file, (err, obj) => {
        //console.log(obj);
        let updateRecipe = obj["recipes"][recipeID];
        console.log(updateRecipe + "Selected record");
        res.render('editRecipe', updateRecipe);
        //res.send(recipeArray);
    });
});


//recipes/:id    PATCH/PUT   update  Update a recipe
app.put('/recipes/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        // Request body (req.body) is the form information passed 
        console.log("Request body here: " + req.body.title);

        let updateRecipe =  obj.recipes[req.params.id-1];

        updateRecipe.title= req.body.title;
        updateRecipe.ingredients= req.body.ingredients;
        updateRecipe.instructions= req.body.instructions;

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err)
            console.log("Recipe updated");
            res.redirect("/recipes/");
        })
    });
});

//recipes/:id    DELETE  destroy Remove a recipe
app.delete('/recipes/:id', (req,res) => {
    let recipeID = parseInt(req.body.id);
    let recipeName = req.body.title;

    console.log("recipe ID is : " + recipeID);
    console.log("recipe name is : " + recipeName);

    jsonfile.readFile(file, (err, obj) => {

        //console.log("recipe to delete: " + obj.recipes[0].id);
        console.log("length of object: " + obj.recipes.length);

        for(let i = 0; i < obj.recipes.length; i++) {

            if(recipeID === parseInt(obj.recipes[i].id) && recipeName === obj.recipes[i].title){
                console.log("Match is found!");
                obj.recipes.splice(parseInt(obj.recipes[i].id), 1)
            }
        }

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err)
            console.log("Recipe deleted");
            res.redirect("/recipes/");
        });
    });
});



app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
