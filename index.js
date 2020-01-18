/**
 * BOILERPLATE SETUP
 * ===================================
 */

const jsonfile = require("jsonfile");

const file = "recipes.json";

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const reactEngine = require("express-react-views").createEngine();

app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");

app.set("view engine", "jsx");

/**
 * ===================================
 * CREATE NEW RECIPE
 * ===================================
 */

app.get("/recipes/new", (req, res) => {
    response.render("New");
});

app.post("/recipes", (req, res) => {
    let duplicate = false;
    const recipesData = {
        id: req.body.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    };
    console.log(recipesData);

    const errors = [];

    const newErr = errors.map(function (err) {
        return "recipes " + err;
    });

    console.log(newErr);

    const errObj = {
        errorMessage: `There was an error!
      You forgot to input: ${newErr.join(", ")}`
    };

    if (errors.length > 0 && !duplicate) {
        response.render("New", errObj);
    } else {
        jsonfile.readFile(file, (err, obj) => {
                if (Array.isArray(obj.recipes) && obj.recipes.length > 0) {// if array is empty and the length is zero returns a false value
                    recipesData.id = obj.recipes[obj.recipes.length - 1].id + 1; //zooming in on the last ID   from the json file to the id, without having to search through the whole object/array 
                    
                    console.log("if stamt")
                } else{
                    recipesData.id = 1;
                    console.log("else stmt")
                }
            for (let i = 0; i < obj.recipes.length; i++) {
                if (
                    obj.recipes[i].title.toLowerCase() ===
                    recipesData.title.toLowerCase() ||
                    obj.recipes[i].id === recipesData.id
                ) {
                    duplicate = true;
                    errObj.errorMessage = `There was an error!
            ${recipesData.title} already exists!`;
                }
            }
            if (duplicate) {
                response.render("New", errObj);
            } else {
                
                recipesData.title += "";
                recipesData.ingredients += "";
                recipesData.instructions += "";
                obj.recipes.push(recipesData);
                jsonfile.writeFile(file, obj, err => { });
                response.redirect(`/recipes/${recipesData.id}`);
                console.log(obj.recipes.length - 1);
            }
        });
    }
});

/**
 * ===================================
 * READ SPECIFIED RECIPE
 * ===================================
 */

app.get("/recipes/:id", (request, response) => {
    // get json from specified file
    jsonfile.readFile(file, (err, obj) => {
        let inputId = parseInt(request.params.id);
        console.log(obj.recipes);
        let recipes;
        for (let i = 0; i < obj.recipes.length; i++) {
            let currentrecipes = obj.recipes[i];

            if (currentrecipes.id === inputId) {
                recipes = currentrecipes;
            }
        }

        if (recipes === undefined) {
            // send 404 back
            response.status(404);
            response.send("Recipe not created yet");
        } else {
            response.render("recipeSearch", recipes);
        }
    });
});

/**
 * ===================================
 * UPDATE/EDIT SPECIFIED RECIPE
 * ===================================
 */

app.get("/recipes/:id/edit", (request, response) => {
    let index = parseInt(request.params.id) - 1;
    jsonfile.readFile(file, (err, obj) => {
        const recipes = obj.recipes[index];
        const recipesData = {
                id: parseInt(request.params.id),
                title: obj.recipes[index].title,
                ingredients: obj.recipes[index].ingredients,
                instructions: obj.recipes[index].instructions
            };
        response.render("Edit", recipesData);
    });
});

app.put("/recipes/:id", (request, response) => {
    const index = parseInt(request.params.id) - 1;
    const recipeID = parseInt(request.params.id);
    const changedTitle = request.body.title;
    const changedIngredients = request.body.ingredients;
    const changedInstructions = request.body.instructions;

    jsonfile.readFile(file, (err, obj) => {
        const recipes = obj.recipes[index];
        obj.recipes[index].title = changedTitle;
        obj.recipes[index].ingredients = changedIngredients;
        obj.recipes[index].instructions = changedInstructions;

        jsonfile.writeFile(file, obj, err => {
            const data = {
                recipes: obj.recipes
            };
            console.log(data);
            response.redirect(`/recipes/${parseInt(index) + 1}`);
        });
    });
});

/**
 * ===================================
 * DELETE RECIPE
 * ===================================
 */

app.get("/recipes/:id/delete", (request, response) => {
    const index = parseInt(request.params.id) - 1;
    jsonfile.readFile(file, (err, obj) => {
        const recipes = obj.recipes[index];
        console.log("index is", index);
        const data = {
            name: recipes.name,
            id: recipes.id
        };
        response.render("Delete", data);
    });
});

app.delete("/recipes/:id/", (request, response) => {
    const index = parseInt(request.params.id);
    console.log("index is", index);

    jsonfile.readFile(file, (err, obj) => {
        console.log("deleted", obj.recipes[index]);
        obj.recipes.splice(index - 1, 1);
        for (let i = 0; i < obj.recipes.length; i++) {
            obj.recipes[i].id = i + 1;
        }
        console.log(obj.recipes);
        jsonfile.writeFile(file, obj, err => {
            const data = {
                recipes: obj.recipes
            };
            response.render("Index", data);
        });
    });
});
/**
 * ===================================
 * VIEW ALL RECIPES
 * ===================================
 */

app.get("/recipes/", (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const data = {
            recipes: obj.recipes
        };
        response.render("Index", data);
    });
});

app.get("*", (request, response) => {
    response.send("404 Not Found.");
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () =>
    console.log("~~~ Tuning in to the waves of port 3000 ~~~")
);