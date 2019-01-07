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

app.set('views', __dirname + '/views/');

app.set('view engine', 'jsx');

//Show Add Recipes and Add Recipe Form
app.get('/recipes', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        res.render('home', obj);
    });
})

//Show Individual Recipe
app.get("/recipes/:id", (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        for (let i = 0; i < obj.recipes.length; i++) {
            if (i == req.params.id - 1) {
                res.render('recipe', obj.recipes[i]);
            }
        }
    });
});

//uses form data from user (from form on '/recipes') to create new recipe data in data.json
app.post("/recipes/", (req, res) => {

//getting data from user and putting it into an obj newPokemonObj
    let newRecipeObj = {
        title: req.body["title"],
        ingredients: req.body["ingredients"],
        instructions: req.body["instructions"],
    }

    console.log("newRecipeObj", newRecipeObj);

    //read json file (before writing to it)
    jsonfile.readFile(FILE, (err, obj) => {

        //what you want to be written into the json file
        obj["recipes"].push(newRecipeObj);

        //write to the json file
        jsonfile.writeFile(FILE, obj, (err) => {
        console.error(err);

        // now, newRecipeObj has been pushed into the json file (look!)

        res.send(newRecipeObj);
        });
    });
});

console.log("listening!");

app.listen(3010);