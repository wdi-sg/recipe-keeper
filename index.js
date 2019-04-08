const express = require('express');

const app = express();

const jsonfile = require('jsonfile');

const FILE = 'ingredient.json';



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






// test
// app.get('/hello', (request, response) => {
//   response.send('hello Hatta')
// });

// read file in html
const recipe = require ('./ingredient.json')

app.get('/recipe/', (req, res, next) => {
  res.send(recipe);


});


// test
// app.get('/hi', (req, res) => {
//   const data = {
//     name: "Muhammad Hatta",
//     status: "married",
//     children: "2"
// };

//   res.render('home', data);

// });

// read file in terminal

app.get('/ingredient/', (req, res) => {

    const fs = require('fs');

fs.readFile('ingredient.json', (err, data) => {
    if (err) throw err;
    let ingredient = JSON.parse(data);
    console.log(ingredient);
});

// const recipe = require ('./ingredient.json')
res.render('recipe', ingredient)

});


// need to debug
// const ingredientRecipe = require ("./ingredient.json")
//  res.render('recipe', this.recipe[input]);

// ingredientRecipe.recipe(1);


app.listen(3000);