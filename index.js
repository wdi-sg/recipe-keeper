const jsonfile = require('jsonfile');

const file = 'recipe.json';

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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ starting recipe assignment

// home page
app.get('/', (request, response) =>{
    console.log("home page");
    response.render('home');
});

// app.post for adding new recipe
app.post('/newrecipe', (request,response) => {
    console.log("creating new recipe");
    console.log(request.body);

        jsonfile.readFile(file, (err, obj) => {
            let newRecipe = request.body;
            let all = obj;
            all.recipes.push(newRecipe);
            let newRecipeDetails = {
                title: request.body.title,
                id: request.body.id,
                ingredients: request.body.ingredients,
                instructions: request.body.instructions
            }
            response.render('newrecipedisplay', newRecipeDetails);

                jsonfile.writeFile(file, all, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    // render display items
                    console.log("recipe added!");
                });
        });
});

// app.get for seeing all recipes
app.get("/allrecipes", (req,res) => {
    console.log("sifting through recipe book!")
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.recipes;
        console.log(recipes);
        res.send(recipes);
    });
});

// editing recipes
app.get('/allrecipes/:id/edit', (req,res) => {
    console.log("in editing page!")
    let id = parseInt(req.params.id);
    jsonfile.readFile(file, (err, obj) => {
        console.log("searching for recipe!");
        const data = {
            id: obj.recipes[id-1].id,
            title: obj.recipes[id-1].title,
            ingredients: obj.recipes[id-1].ingredients,
            instructions: obj.recipes[id-1].instructions
        };
        res.render('editform', data)
    });
});

app.put('/allrecipes/:id', (req,res) => {
    var recipeIndex = parseInt(req.params.id);
    var editedRecipe = req.body;

    jsonfile.readFile(file, (err, obj) => {
        console.log("editing recipe!");

        obj.recipes[recipeIndex-1] = editedRecipe;

        console.log(editedRecipe);

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
            res.send("yay edited");
        });
    });
});



app.listen(7010, () => console.log('~~~ Tuning in to the waves of port 7000 ~~~'));