const jsonfile = require('jsonfile');
const file = 'allRecipes.json';
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



// listing all recipes

app.get('/', (request, response) => {
    response.redirect('/recipes');
});

app.get ('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        console.log("sup, reading all the files");
        response.render('allRecipes', obj);
    })
}) 

app.get ('/recipes/new', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        console.log("sup new");
        response.render('newRecipe', obj); // TODO: to change 
    })
}) 


app.get ('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        console.log("sup, reading my file here");
        console.log(request.url);
       
        var indexNo = parseInt(request.params.id);
        var indexInArr = findRecipe(obj, indexNo);

        response.render('eachRecipe', obj.recipes[indexInArr]);
    })
})

app.post ('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        console.log("sup, reading my file");
       
        var newRecipeObj = {
            "id": parseInt(request.params.id),
            "recipeName": request.body.name,
            "description": request.body.description,
            "imgLink": request.body.img,
            "ingredientList": request.body.ingredients,
            "instructionList": request.body.instructions
        }

        obj.recipes.push(newRecipeObj);  
        console.log(request.url);

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
            var indexNo = parseInt(request.params.id);
            var indexInArr = findRecipe(obj, indexNo);
  
            response.render('eachRecipe', obj.recipes[indexInArr]);
        });
        
    })
})

app.get ('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        console.log("sup, reading my file here");
        console.log(request.url);
       
        var indexNo = parseInt(request.params.id);
        var indexInArr = findRecipe(obj, indexNo);

        response.render('editRecipe', obj.recipes[indexInArr]);
    })
})

app.put ('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        let currentRecipes = obj;
        console.log("hey look at me");
        var indexNo = parseInt(request.params.id);
        var indexInArr = findRecipe(obj, indexNo);

        obj.recipes[indexInArr] = {
            "id": parseInt(request.params.id),
            "recipeName": request.body.name,
            "description": request.body.description,
            "imgLink": request.body.img,
            "ingredientList": request.body.ingredients,
            "instructionList": request.body.instructions
        }

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
            response.render('eachRecipe', obj.recipes[indexInArr]);
        });
    })
})

app.delete ('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        var indexNo = parseInt(request.params.id);
        var indexInArr = findRecipe(obj, indexNo);

        obj.recipes.splice(indexInArr, 1);

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
            response.render('allRecipes', obj);
        });
    })
})

function findRecipe(obj, id) {
    return obj.recipes.findIndex(function(recipe) {
        return recipe.id === parseInt(id);
    })
}

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));


// TODO     :
// LAYOUT
// Nav Bar
// 1. All Recipes - Index 
//     - Sorting methods
//         - Alphabetical (default)
//         - Ingredients needed
//     - Update recipe
//     - Delete recipe

// 2. Create new recipe
