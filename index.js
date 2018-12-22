const jsonfile = require('jsonfile');
const file = 'ingredient.json';
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


// listing all recipes
app.get ('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) =>{
        console.log("sup");
        response.render('mainpage', {allFood: obj});
    })
}) 

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));``


// TODO:
// LAYOUT
// Nav Bar
// 1. All Recipes - Index 
//     - Sorting methods
//         - Alphabetical (default)
//         - Ingredients needed
//     - Update recipe
//     - Delete recipe

// 2. Create new recipe
