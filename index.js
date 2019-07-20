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

//create step 1: request for create new recipe
app.get("/recipe/new", (request, response) => {
    console.log("creating new recipe request");

    //create step 2: render new recipe form
    response.render("newRecipeForm");
});

// =============================================

//create step 3: post newRecipeForm details to json file
app.post("/recipes", (request, response) => {
    console.log("posting new recipe request");

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            const newRecipe = request.body;

            obj.recipes.push(newRecipe);

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


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));