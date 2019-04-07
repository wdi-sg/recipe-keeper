//setup & configurations
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

//Routes

//test route
app.get('/hello', function(request, response) {
    response.render('hello');
  });

//home page route - display all recipes
app.get('/recipes/', function(request, response) {

    jsonfile.readFile('data.json', (err, obj) => {
            console.log(obj);
            let allRecipes = obj

            response.render("home", allRecipes);

        });

});

//request handler for get request for new recipe added, render add new recipe page
app.get('/recipes/new', function(request, response) {

    response.render("new");

});

//request handler for post request for new recipe added, read and write to recipe json file
app.post('/recipes', function(request, response) {

    jsonfile.readFile('data.json', (err, obj) => {
        console.log(request.body);
        let newRecipe = request.body;

        obj.recipes.push(newRecipe);s

       jsonfile.writeFile('data.json', obj, (err) => {
        response.send("Yay new recipe added!")

    });


   });

})





  //Listen to port 3000
   app.listen(3000);