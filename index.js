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

//edit recipe step 1: request to create new list
app.get("/recipes/:id/edit", (request, response) => {
    console.log("requesting to edit recipe");

    //edit recipe step 2: replace space value to dash value
    let id = request.params.id.replace(" ","-");

    //edit recipe step 3: read existing json file data
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            let recipe;

            //edit recipe step 4: use for loop to find title string in json
            for (let i = 0; i < obj.recipes.length; i++) {

                //edit recipe step 5: check if request is found in json
                if (request.params.id === obj.recipes[i].title) {
                    recipe = obj.recipes[i];
                }
            }
            //edit recipe step 6: create key data for render page
            const data = {
                id : id,
                recipe : recipe
            }
        //edit recipe step 7: render see edit form page
        response.render("editRecipeForm", data);
        }
    })
});


//edit recipe step 1: request to create new list
app.put("/recipes/:id", (request, response) => {
    console.log("requesting to post edited recipe");

    let id = request.params.id.replace("-", " ");

    const recipe = request.body;

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            for (let i = 0; i < obj.recipes.length; i++) {
                if (obj.recipes[i].title === id) {
                    obj.recipes[i] = recipe;
                }
            }
            jsonfile.writeFile(file, obj, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Food edited complete");
                }
            })
        }
        response.send("Food edited complete");
    })
});

// =============================================

//create recipes object step 1: request to create new list
app.get("/create", (request, response) => {
    console.log("requesting to create recipes array in json file");

    //create recipes object step 2: read existing json file data
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            //create recipes object step 3: prepare data to be written into json file
            var obj = {
                "recipes" : []
            }

            //create recipes object step 4: write/"save" the updated json file
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

//create new step 1: request to create new recipe
app.get("/recipes/new", (request, response) => {
    console.log("requesting to create new recipe");

    //create new step 2: render new recipe form
    response.render("newRecipeForm");
});

//create new step 6: post newRecipeForm details to json file
app.post("/recipes", (request, response) => {
    console.log("requesting to post new recipe request");

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
                    console.log("post new recipe complete");
                }
            })
        }

    })
    response.send("post new recipe complete");
});

// =============================================

//see all step 1: request to see all recipes
app.get("/recipes/", (request, response) => {
    console.log("requesting to see all recipes");

    //see all step 2: read existing json file data
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            let food = obj.recipes;

            //see all step 3: create key data for render page
            const data = {
                food : food
            }
            //see all step 4: render see all page
            response.render("index", data);
        }
    })
});

// =============================================

//see single recipe step 1: request to see chosen recipe
app.get("/recipes/:id", (request, response) => {
    console.log("requesting to see single recipe");

    //see single recipe step 2: read existing json file data
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {

            let recipe;

            //see single recipe step 3: use for loop to find title string in json
            for (let i = 0; i < obj.recipes.length; i++) {

                //see single recipe step 4: check if request is found in json
                if (request.params.id === obj.recipes[i].title) {
                    recipe = obj.recipes[i]
                }
            }
        //see single recipe step 5: create key data for render page
        const data = {
            recipe : recipe
        }
        //see single recipe step 6: render see single page
        response.render("recipe", data);
        }
    })
});

// =============================================

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));