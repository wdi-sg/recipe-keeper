const jsonfile = require('jsonfile');
const file = 'data.json';
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

//see all recipes
app.get('/recipes', (request,response) => {

});

//Display the form for a single recipe
app.get('/recipes/new', (request, response) => {
    response.render('create-recipe');
});

//Value from Form
app.post('/recipes', (request,response) => {

    jsonfile.readFile(file, (err,obj) =>{
        const body = request.body;
        let newRecipe = obj.recipe;
        newRecipe.push(body);

        response.render('added-recipe', {recipes:newRecipe});

            jsonfile.writeFile(file, obj, (err) => {
                console.log('Is there an error?? ' + err);
            });
    });
});

//See a single recipe
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile(file, (err,obj) => {
        let currentIndex = parseInt(request.params.id -1);
        const recipe = obj.recipe;
        let currentRecipe = recipe[currentIndex];
        currentRecipe.num = parseInt(request.params.id);

        response.render('single-recipe', {single:currentRecipe});
    });
});

//Display a form for editing a single recipe
app.get('/recipes/:id/edit', (request, response) => {

    jsonfile.readFile(file, (err,obj)=>{
        let currentIndex = parseInt(request.params.id -1);
        const recipe = obj.recipe;
        let editRecipe = recipe[currentIndex];
        editRecipe.num = parseInt(request.params.id);
        response.render('edit-recipe', {edit:editRecipe});
    });
});

//Update a recipe
app.put('/recipes/:id', (request,response) => {

    jsonfile.readFile(file, (err,obj)=>{
        let currentIndex = parseInt(request.params.id -1);
        let recipe = obj.recipe[currentId];
        const updatedRecipe =  obj.recipe[currentIndex];
        const body = request.body;
        // console.log(updatedRecipe);
        recipe  = new update(recipe,body.title, body.ingredients, body.instructions);

        // console.log(updatedRecipe);
        response.render('updated-recipe', {single:updatedRecipe});

            jsonfile.writeFile(file, obj, (err)=>{
                console.log("Is there an error : " + err);
            });
    });
});

//Remove a recipe
app.delete('/recipes/:id', (request, response) => {

    jsonfile.readFile(file, (err,obj)=>{
       let currentIndex = parseInt(request.params.id -1);
       let deleteRecipe = obj.recipe[currentIndex];
       obj.recipe.splice(currentIndex, 1);

       response.send(obj.recipe);

            jsonfile.writeFile(file, obj, (err) =>{
                console.log(err);
            })
    })

})

function update (recipe, newTitle, newIngredients, newInstructions ) {
    recipe.title = newTitle;
    recipe.ingredients = newIngredients;
    recipe.instructions = newInstructions;
}

app.listen(3000, () => console.log('~~~~ Tuning in to port 3000'));