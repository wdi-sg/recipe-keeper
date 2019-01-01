const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}


//Landing page
    //List all recipes. For each list to have links to view details, edit, delete single recipe)
    //Link to create a new recipe

//Create recipe
    //Form to create a recipe
    //Accept POST requests that creates a recipe
app.get('/recipes/new', (request, response) => {
        const recipe = {};
        recipe.sample = {
            "Title": "Boiled duck",
            "Ingredients": "1 duck, de-boned" ,
            "Instructions": "Boil duck in water for 20 minutes. Take it out. Serve."
        };
        response.render('recipeNew', recipe);
});

app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        err ? console.error(err) : null;
        let newRecipe = {
            "Id": obj.recipes.length + 1,
            "Title": request.body.Title,
            "Ingredients": request.body.Ingredients,
            "Instructions": request.body.Instructions,
            "CreatedOn": dd + "-" + mm + "-" + yyyy
        }
        obj.recipes.push(newRecipe);
        jsonfile.writeFile(file, obj, (err) => {
        err ? console.error(err) : null;
        response.send(newRecipe);
        });
    });
});

//Edit recipe
    //Form for editing recipe
    //Accept PUT request to update a recipe

//Delete recipe

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));