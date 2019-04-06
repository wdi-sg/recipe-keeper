
///////////////// BOILERPLATE CODE ///////////////////////////
const jsonfile = require('jsonfile');

const file = 'data.json';

const json = require('./ingredient.json');
const recipejson = require('./recipe.json');

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
////////////////// END OF BOILERPLATE CODE /////////////////////

/////// START OF ROUTES //////////////

app.get('/', (req, res) => {

    res.render("homepage");

});


app.post('/recipes/:id', (req, res) => {

    // console.log(req.params.id)
    // let recipeNum = req.params.id;
    // let recipe = recipejson.recipes[recipeNum];
    // console.log(req.body.recipename);
    let number = req.body.recipename;
    parseInt(number);
    console.log(number);
    let recipeInstructions = recipejson.recipes[number];
    let recipeList = {ccb: recipeInstructions};
    res.render("singlerecipe", recipeList);

});

app.post('/test', (req, res) => {

    res.send("Harro");

});




/////////////////////// PORT ACCESS /////////////////////////
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

console.log(recipejson.recipes[2]);


    let recipeItems = recipejson.recipes[2].instructions;
    let recipeList = {ccb: recipeItems};
    console.log(recipeList);