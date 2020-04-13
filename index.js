// Boiler plate activation codes

const express = require('express');
const app = express();

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const jsonfile = require('jsonfile');

app.use(express.static(__dirname+'/public/'));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

const file = 'data.json'


/////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////


// Single recipe response
app.get('/singlerecipe/:id', (request,response) => {
    const id = request.params.id;

    jsonfile.readFile(file, (err,obj) => {
        // Get recipe details of single item
        const singleRecipe = obj.recipes[id];

        console.log(singleRecipe);

        const data = {
                        "singleRecipe" : singleRecipe,
                        "id" : id
                    }
        response.render('singlerecipe', data);

        // response.send(singleRecipe);
    })

})

// Create Recipe response
app.post('/createarecipe', (request, response) => {

    let singleRecipe = request.body;

    console.log(singleRecipe)

    // Get names of ingredients in array form
    const ingredientsNameArray = singleRecipe.ingredients;

    // Get amount of ingredients in array form
    const ingredientsAmtArray = singleRecipe.amount;

    // Change ingredients array into object
    singleRecipe.ingredients = [];

    // format ingredient to hold name and amount
    for (var i = 0; i < ingredientsNameArray.length; i++) {
        // create template to push into ingredients array
        let ingredientTemplate = {"name" : ingredientsNameArray[i], "amount" : ingredientsAmtArray[i]};

        // Push into ingredients array
        singleRecipe.ingredients.push(ingredientTemplate);
    }

    // remove amount key
    delete singleRecipe.amount;

    // Add date created
    date = new Date();
    singleRecipe.createdDate = date.toLocaleDateString();


    jsonfile.readFile(file, (err, obj) => {
        // Add new recipe to recipe list
        obj.recipes.push(singleRecipe);

        // Get id number of recipe
        id = obj.recipes.length - 1;

        jsonfile.writeFile(file, obj, (err) => {
            console.log('writing file')
        })

        response.redirect(`/singlerecipe/${id}`)

    })
})


// Show edit recipe page
app.get('/editrecipe/:id', (request, response) => {
    const id = request.params.id

    jsonfile.readFile(file, (err, obj) => {
        // Get data of recipe to edit
        const singleRecipe = obj.recipes[id];
        const data = {
                        "singleRecipe" : singleRecipe,
                        "id" : id
                    };

        response.render('editrecipe', data);
    })

})

// Edit Recipe response
app.put('/editarecipe/:id', (request, response) => {
    const id = request.params.id;

    const singleRecipe = request.body;

    console.log(singleRecipe);

    // Get names of ingredients in array form
    const ingredientsNameArray = singleRecipe.ingredients;

    // Get amount of ingredients in array form
    const ingredientsAmtArray = singleRecipe.amount;

    // Change ingredients array into object
    singleRecipe.ingredients = [];

    // format ingredient to hold name and amount
    for (var i = 0; i < ingredientsNameArray.length; i++) {
        // create template to push into ingredients array
        let ingredientTemplate = {"name" : ingredientsNameArray[i], "amount" : ingredientsAmtArray[i]};

        // Push into ingredients array
        singleRecipe.ingredients.push(ingredientTemplate);
    }

    // remove amount key
    delete singleRecipe.amount;

    jsonfile.readFile(file, (err, obj) => {
        if (singleRecipe.img === ""){
            singleRecipe.img = obj.recipes[id].img;
        }

        // edit recipe by changing old recipe
        obj.recipes[id] = singleRecipe;

        jsonfile.writeFile(file, obj, (err) => {
        })

        // Show user single recipe page of new recipe after creating the recipe
        response.redirect(`/singlerecipe/${id}`);

    })
})


// Delete response
app.delete("/deleterecipe/:id", (request, response) => {
    const id = request.params.id;

    jsonfile.readFile(file, (err, obj) => {
        obj.recipes.splice(id, 1);

        jsonfile.writeFile(file, obj, (err) => {

        })
        response.redirect('/');
    })
});


// About RecipeList response
app.get('/about', (request, response) => {
    response.render('about');
})

// All Recipes resposne
app.get('/allrecipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        const recipeArray = obj.recipes;

        // Get all recipe titles
        let recipeTitleArray = [];

        for (var i = 0; i < recipeArray.length; i++) {
            recipeTitleArray.push(recipeArray[i].title);
        }

        // Get all recipe images
        let recipeImageArray = [];

        for (var u = 0; u < recipeArray.length; u++) {
            recipeImageArray.push(recipeArray[u].img);
        }


        const data = {
                        "recipeTitleArray" : recipeTitleArray,
                        "recipeImageArray" : recipeImageArray
                    };

        response.render("allrecipes", data);
    })
})

// Sort By Recipe response
app.get('/searchrecipe', (request, response) => {
    // Get search query
    const recipeRequested = request.query.search.toLowerCase();

    console.log(recipeRequested);

    jsonfile.readFile(file, (err, obj) => {
        // Loop through file to find recipes that match request
        const allRecipes = obj.recipes;

        let recipeTitleArray = [];

        let recipeImgArray = [];

        let recipeIDArray = [];

        for (var i = 0; i < allRecipes.length; i++) {
            if(allRecipes[i].title.toLowerCase().includes(recipeRequested)){
                recipeTitleArray.push(allRecipes[i].title);
                recipeImgArray.push(allRecipes[i].img);
                recipeIDArray.push(i);
            }
        }

        const data = {"recipeRequested" : recipeRequested,
                      "recipeTitleArray" : recipeTitleArray,
                      "recipeImgArray" : recipeImgArray,
                      "recipeIDArray" : recipeIDArray
                     }

        response.render('sortbyrecipe', data);
    })
})

// Sort by ingredients response
app.get('/searchingredient', (request, response) => {
    // Get search query
    const ingredientRequested = request.query.search.toLowerCase();

    console.log(ingredientRequested);

    jsonfile.readFile(file, (err, obj) => {
        // Loop through file to find recipes that match ingredient request
        const allRecipes = obj.recipes;

        let recipeTitleArray = [];

        let recipeImgArray = [];

        let recipeIDArray = [];

        for (var i = 0; i < allRecipes.length; i++) {
            for (var u = 0; u < allRecipes[i].ingredients.length; u++) {
                if(allRecipes[i].ingredients[u].name.toLowerCase().includes(ingredientRequested)){
                    recipeTitleArray.push(allRecipes[i].title);
                    recipeImgArray.push(allRecipes[i].img);
                    recipeIDArray.push(i);
                }
            }
        }

        const data = {"ingredientRequested" : ingredientRequested,
                      "recipeTitleArray" : recipeTitleArray,
                      "recipeImgArray" : recipeImgArray,
                      "recipeIDArray" : recipeIDArray
                     }

        response.render('sortbyingredient', data);
    })
})



// Home page response
app.get('/', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        const recipeArray = obj.recipes;

        // Get all recipe titles
        let recipeTitleArray = [];

        for (var i = 0; i < recipeArray.length; i++) {
            recipeTitleArray.push(recipeArray[i].title);
        }

        // Get all recipe images
        let recipeImageArray = [];

        for (var u = 0; u < recipeArray.length; u++) {
            recipeImageArray.push(recipeArray[u].img);
        }


        const data = {
                        "recipeTitleArray" : recipeTitleArray,
                        "recipeImageArray" : recipeImageArray
                    };

        response.render("home", data);
    })
})

app.listen(3000, () => console.log("Listening to everything..."))