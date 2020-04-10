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

        const data = {"singleRecipe" : singleRecipe }

        response.render('singlerecipe', data);
    })
})

app.post('/createarecipe', (request, response) => {

    const singleRecipe = request.body;

    jsonfile.readFile(file, (err, obj) => {
        // Add new recipe to recipe list
        obj.recipes.push(singleRecipe);

        // Get id number of recipe
        const id = obj.recipes.length - 1;

        response.redirect(`/singlerecipe/${id}`);

        jsonfile.writeFile(file, obj, (err) => {
        })

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

        const data = {"recipeTitleArray" : recipeTitleArray};

        response.render("home", data);
    })
})

app.listen(3000, () => console.log("Listening to everything..."))