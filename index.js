const jsonfile = require('jsonfile');
const FILE = 'data.json';

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

/////GENERATES FORM TO ADD NEW RECIPE//////
app.get('/recipes/new', (request, response) => {
    response.render('New');
});

/////SHOWS NEWLY ADDED RECIPE AFTER FORM SUBMISSION//////
app.post('/recipes', (request, response) => {
    let newRecipe = request.body;
    newRecipe.id = parseInt(newRecipe.id);

    const data = {
        "id": newRecipe.id,
        "title": newRecipe.title,
        "ingredients": newRecipe.ingredients,
        "instructions": newRecipe.instructions
    };

    jsonfile.readFile(FILE, (err, obj) => {
        obj.recipes.push(newRecipe);

    jsonfile.writeFile('data.json', obj, (err) => {
        console.error(err)

        response.render('Recipes', data);
    });
    });
});

/////SHOWS INDIVIDUAL RECIPE PAGE////
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {
        let inputId = parseInt(request.params.id);
        var recipe;
        let recipeList = obj.recipes;

        //look inside data.json for the recipe
        recipeList.forEach(function(recipeItem){
            console.log(recipeItem);
            if (recipeItem.id === inputId){
                recipe = recipeItem;
                const data = {
                    id: recipe.id,
                    title: recipe.title,
                    ingredients: recipe.ingredients,
                    instructions: recipe.instructions
                };

            response.render('Recipes', data);
            };
        });

        if (recipe === undefined && request.params.id!== "new") {
            // send 404 back
            response.status(404);
            response.send("This recipe does not exist");
        };
    });
});

/////SHOWS FORM TO EDIT INDIVIDUAL RECIPE/////
app.get('/recipes/:id/edit', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {
        let inputId = parseInt(request.params.id);
        var recipe;
        let recipeList = obj.recipes;

        recipeList.forEach(function (recipeItem){
            if (recipeItem.id === inputId){
                recipe = recipeItem;
                const data = {
                    id: recipe.id,
                    title: recipe.title,
                    ingredients: recipe.ingredients,
                    instructions: recipe.instructions
                };
            response.render('Edit', data);
            };
        });
    });
});

/////CHANGES THE INDIVIDUAL RECIPE/////
app.put('/recipes/:id', (request,response) => {
    let userInput = request.body;
    let index = parseInt(request.params.id) - 1;

    jsonfile.readFile(FILE, (err, obj) => {
        let recipeList = obj.recipes;
        const editedRecipe = userInput;
        recipeList[index] = editedRecipe;

        const data = {
            id: editedRecipe.id,
            title: editedRecipe.title,
            ingredients: editedRecipe.ingredients,
            instructions: editedRecipe.instructions
        };

    jsonfile.writeFile(FILE, obj, (err) => {
        console.log(err);
    });

    response.render('Recipes', data);
    });
});

/////REQUEST PAGE TO DELETE RECIPE/////
app.get("/recipes/:id/delete", (request, response) => {
    let index = parseInt(request.params.id) - 1;

    jsonfile.readFile(FILE, (err, obj) => {
        let targetRecipe = obj.recipes[index];

        const data = {
            id: targetRecipe.id,
            title: targetRecipe.title,
            ingredients: targetRecipe.ingredients,
            instructions: targetRecipe.instructions
        };

    response.render('delete', data);
    });
})


/////DELETE THE PAGE/////
app.delete("/recipes/:id", (request, response) => {
  let index = parseInt(request.params.id) - 1;

  jsonfile.readFile(FILE, (err,obj) =>{
    let recipeList = obj.recipes;
    recipeList.splice(index,1)

    jsonfile.writeFile(FILE, obj, (err)=>{
        console.log(err)
        response.send("This recipe has been deleted")
        })
    })
})

/**
 * ===================================
 * Listen to requests on port 8000
 * ===================================
 */
app.listen(8000, () => console.log('~~~ Tuning in to the waves of port 8000 ~~~'));