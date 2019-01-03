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
    //List all recipes. For each list to have links to view details, edit, delete selected recipe)
    //Link to create a new recipe
app.get('/', (request,response) => {
    response.redirect   ('/recipes/');
    });

app.get('/recipes/', (request,response) => {
    jsonfile.readFile(file, (err, obj) => {
    err ? console.error(err) : null;
    const allRecipes = obj;
    response.render('recipeHome', allRecipes);
    });
});

//Create a new recipe
    //Form to create a recipe
    //Accept POST requests that creates a recipe
app.get('/recipes/new', (request, response) => {
        const recipe = {};
        recipe.sample = {
            "Title": "Boiled duck",
            "Image": "images/boiledduck.png",
            "Ingredients": "1 duck, 500ml water" ,
            "Instructions": "Boil duck in water for 20 minutes. Take it out. Serve."
        };
        response.render('recipeNew', recipe);
});

app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        err ? console.error(err) : null;
        let newRecipe = {
            "Id": obj.recipes.length + 1,
            "Image": request.body.Image,
            "Title": request.body.Title,
            "Ingredients": request.body.Ingredients,
            "Instructions": request.body.Instructions,
            "CreateDate": dd + "-" + mm + "-" + yyyy
        }
        obj.recipes.push(newRecipe);
        jsonfile.writeFile(file, obj, (err) => {
        err ? console.error(err) : null;
        response.redirect('/recipes/' + newRecipe.Id); //to modify later;
        });
    });
});

//View a specific recipe
app.get('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
    err ? console.error(err) : null;
    const selectedRecipe = obj.recipes[request.params.id - 1];
    response.render('recipeSelected',selectedRecipe);
    });
});

//Edit recipe
    //Form for editing recipe with current values shown
    //Accept PUT request to update a recipe
app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        err ? console.log(err) : null;
    const editRecipe = {};
    editRecipe.edit = obj.recipes[request.params.id - 1];
    editRecipe.id = request.params.id;
    delete editRecipe.edit.Id;
    delete editRecipe.edit.CreateDate;
    response.render('recipeEdit',editRecipe);
    })
})

app.put('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err,obj) => {
        err ? console.log(err) : null;
        obj.recipes[request.params.id-1].Title = request.body.Title;
        obj.recipes[request.params.id-1].Image = request.body.Image;
        obj.recipes[request.params.id-1].Ingredients = request.body.Ingredients;
        obj.recipes[request.params.id-1].Instructions = request.body.Instructions;
        obj.recipes[request.params.id-1].EditDate = dd + "-" + mm + "-" + yyyy;
        jsonfile.writeFile(file, obj, (err) => {
            err ? console.error(err) : null;
            response.redirect('/recipes/' + request.params.id)
        });
    });
});



//Delete recipe



app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));