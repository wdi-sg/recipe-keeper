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

})

//Display a form for editing a single recipe
app.get('/recipes/:id/edit', (request, response) => {

})

//Update a recipe
app.put('/recipe/:id', (request,response) => {

})

//Remove a recipe
app.delete('/recipe/:id', (request, response) => {

})

app.listen(3000, () => console.log('~~~~ Tuning in to port 3000'));