//-----------------------------------------------------//
const jsonfile = require('jsonfile');
const FILE = 'recipes.json';

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

//-----------------------------------------------------//

app.get('/recipes', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        response.render('home', obj);

    });
})

//-----------------------NEW--------------------------//

app.get('/recipes/new', (request, response) => {

    response.render('new');
});


// Create new recipe here

app.post('/recipes', (request, response) => {

    response.send(request.body);

     jsonfile.readFile('recipes.json', (err, obj) => {

        console.log(obj);

        let newRecipe = {};
        // newRecipe.id = obj["recipes"].length +1;
        newRecipe.name = request.body.name;
        newRecipe.instructions = request.body.instructions;
        newRecipe.ingredients = request.body.ingredients;
        newRecipe.author = request.body.author;
        newRecipe.img = request.body.img;
        recipe.preparation_time = request.body.preparation_time;
        newRecipe.created_at = new Date();

            // Date + time formatting
            const options = {month: 'long'};
            let month = new Date().toLocaleDateString("en-GB", options);
            const timeOptions = {hour: 'numeric', minute: 'numeric'};
            let time = new Date().toLocaleTimeString("en-GB", timeOptions);

        newRecipe.created_at_display = new Date().getDate() +" "+ month +" "+ new Date().getFullYear() + " at " + time;

        obj["recipes"].push(newRecipe);
        console.log(time);

        jsonfile.writeFile(FILE, obj, (err) => {
            console.log(err)
        })
    })
})

//-----------------------------------------------------//

const port = 3000;
app.listen(port);
console.log("~~~~Tuned into port " +port+"~~~~");