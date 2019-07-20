//json files
const jsonfile = require('jsonfile');
const file = 'food.json';

//express files
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

//method overrride files
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

//react files
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */

// =============================================

//create food object recipe array in json file
app.get("/create", (request, response) => {
    console.log("Creating food json file request");

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            var obj = {
                "recipes" : []
            }
            jsonfile.writeFile(file, obj, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Create food json file complete");
                }
            })
        }
    })

    response.send("Create food json file complete");
});

// =============================================

//create new step 1: request for create new recipe
app.get("/recipes/new", (request, response) => {
    console.log("creating new recipe request");

    //create new step 2: render new recipe form
    response.render("newRecipeForm");
});

//create new step 6: post newRecipeForm details to json file
app.post("/recipes", (request, response) => {
    console.log("posting new recipe request");

    //create new step 7: read existing json file data
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            //create new step 8: obtain newRecipeForm details
            const newRecipe = request.body;

            //create new step 9: push new recipe details to json object
            obj.recipes.push(newRecipe);

            //create new step 10: write/"save" the updated json file
            jsonfile.writeFile(file, obj, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("posting new recipe complete");
                }
            })
        }

    })
    response.send("posting new recipe complete");
});

// =============================================

//see all step 1: request to see all recipes
app.get("/recipes/", (request, response) => {
    console.log("See all recipes request");

    //see all step 2: read existing json file data
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            let food = obj.recipes;

            //see all step 3: create key data for index page
            const data = {
                food : food
            }
            //see all step 4: render index page
            response.render("index", data);
        }
    })
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));