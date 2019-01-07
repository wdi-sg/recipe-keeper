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

//create recipe render
app.get("/recipes/new", (req,res) => {
        res.render('newrecipe');
    });

// post data from form
app.post('/recipes', (request,response) => {

    jsonfile.readFile(file, (err,obj) =>{
        const body = request.body;
        let newRecipe = obj.recipes;
        newRecipe.push(body);

        response.render('addedrecipe', {recipes:newRecipe});

            jsonfile.writeFile(file, obj, (err) => {
                console.log(err);
            });
    });
});

//show all recipes
app.get('/recipes/', (request,response) => {

    jsonfile.readFile(file, (err,obj)=>{
        const rList = obj.recipes;
        console.log(rList);
        response.render('allRecipes', {all:rList});
    })
});

//See a single recipe
app.get('/recipes/:id', (request, response) => {

    jsonfile.readFile(file, (err,obj) => {
        const recipe = obj.recipes;
        let currentIndex = parseInt(request.params.id -1);
        let currentRecipe = null;
            for (let i = 0; i < recipe.length; i++) {
                if ( i === currentIndex ) {
                    currentRecipe = recipe[i];
                    currentRecipe.num = parseInt(request.params.id);
                }
            }

            if (currentRecipe === null) {
                 response.status(404);
                 response.send("not found");
                }

        response.render('singleRecipe', {single:currentRecipe});
    });
});

app.get('/recipes/:id/edit', (request, response) => {

    jsonfile.readFile(file, (err,obj)=>{
        const recipe = obj.recipes;
        let currentIndex = parseInt(request.params.id -1);
        let editRecipe = recipe[currentIndex];
        editRecipe.num = parseInt(request.params.id);

        response.render('editRecipe', {edit:editRecipe});
    });
});

//editing recipe
app.put('/recipes/:id', (request,response) => {

    jsonfile.readFile(file, (err,obj)=>{
        let currentIndex = parseInt(request.params.id -1);
        let recipe = obj.recipes[currentIndex];
        const updatedRecipe =  obj.recipes[currentIndex];
        const body = request.body;
        recipe  = new update(recipe,body.title, body.ingredients, body.instructions);

        response.render('updatedRecipe', {single:updatedRecipe});

            jsonfile.writeFile(file, obj, (err)=>{
                console.log("Is there an error : " + err);
            });
    });


app.listen(3000, () => console.log('~~~~ Tuning in to port 3000'));