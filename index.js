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
app.get('/recipe/',(request,response) => {

        jsonfile.readFile(file,(err,obj) => {

        })

})

//Display the form for a single recipe
app.set('/recipes/new', (request, reponse) => {

})

//Create a new recipe form
app.get('/recipes', (request,response) => {
    response.render('create-recipe');
})

//value from form is savec
app.post('/recipes', (request,response) => {

    jsonfile.readFile(file, (err,obj) =>{
        const body = request.body;
        let newRecipe = obj.recipe;
        newRecipe.push(body);

        response.render('added-recipe', {recipes:newRecipe});

            jsonfile.writeFile(file, obj, (err) => {
                console.log('Is there an error?? ' + err);
            })
    })

})

//See a single recipe
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile(file, (err,obj) => {
        let currentId = parseInt(request.params.id -1);
        const recipe = obj.recipe;
        let currentRecipe = recipe[currentId];

        response.render('single-recipe', {single:currentRecipe});
    })

})

//Display a form for editing a single recipe
app.get('/recipes/:id/edit', (request, response) => {

    jsonfile.readFile(file, (err,obj)=>{
        let currentId = parseInt(request.params.id -1);
        const recipe = obj.recipe;
        let editRecipe = recipe[currentId];
        editRecipe.num = parseInt(request.params.id);
        response.render('edit-recipe', {edit:editRecipe});
    })
})

//Update a recipe
app.put('/recipe/:id', (request,response) => {

    jsonfile.readFile(file, (err,obj)=>{
        const recipe = obj.recipe;
        const body = request.body;
        let currentId = parseInt(request.params.id -1);
        let updatedRecipe = recipe[currentId];
        console.log(updatedRecipe);
        updatedRecipe = updateRecipe (body.title, body.ingredients, body.instructions);
        console.log(updatedRecipe);

        response.send("Hiiii test");

    })

})

//Remove a recipe
app.delete('/recipe/:id', (request, response) => {

})

function updateRecipe (newTitle, newIngredients, newInstructions ) {
    this.title = newTitle;
    this.ingredients = newIngredients;
    this.instructions = newInstructions;
}

app.listen(3000, () => console.log('~~~~ Tuning in to port 3000'));