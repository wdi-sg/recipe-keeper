const jsonfile = require('jsonfile');

const file = 'recipes.json';

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


app.get('/', (request, response) => {

  response.send("HELLO WORLD");
});

/******************* Index - See all the recipes *********************************/
app.get("/recipes", (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.recipes;
        var id = recipes.id;
        var title = recipes.title;
        var ingredients = recipes.Ingredients;
        var instructions = recipes.Instructions;


        //res.render('recipes', obj);
        response.send(request.body)
    });
});

/******************* New - Display the form for a single recipe *********************************/
app.get('/recipe/new', (request, response) => {
     
        response.render('recipe_new');
    
});

app.post('/recipe/updated', (request, response) => {

    
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.recipes;
        let newRecipe = {
            id : parseInt(request.body.id),
            title : request.body.title,
            ingredients : request.body.ingredients.split(","),
            instructions : request.body.instructions
        };
            
        
        recipes.push(newRecipe);
        
        jsonfile.writeFile(file,obj, (err)=> {
            
            response.redirect('/recipes');

        });
    });    
});

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000'));