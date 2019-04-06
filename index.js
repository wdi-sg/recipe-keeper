
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
    let number = req.body.recipeId;
    number--;
    // parseInt(number);
    let recipeInstructions = recipejson.recipes[number];
    console.log(recipeInstructions);
    let recipeList = {ccb: recipeInstructions};
});


app.post('/recipes/:id', (req, res) => {

    // console.log(req.params.id)
    // let recipeNum = req.params.id;
    // let recipe = recipejson.recipes[recipeNum];
    // console.log(req.body.recipename);
    let number = req.body.recipeId;
    number--;
    // parseInt(number);
    console.log(number);
    let recipeInstructions = recipejson.recipes[number];
    console.log(recipeInstructions);
    let recipeList = {ccb: recipeInstructions};
    res.render("singlerecipe", recipeList);

});

app.get('/recipes/:id', (req, res) => {

    // console.log(req.params.id)
    // let recipeNum = req.params.id;
    // let recipe = recipejson.recipes[recipeNum];
    // console.log(req.body.recipename);
    console.log(req.body)
    let testNumber = req.body
    let number = req.params.id;
    parseInt(number);
    console.log(number);

        if (testNumber > recipejson.recipes.length) {
        res.send("NOT FOUND");
    }
    let recipeInstructions = recipejson.recipes[number];
    let recipeList = {ccb: recipeInstructions};



    res.render("singlerecipe", recipeList);
});

app.post('/recipe/edit', (req, res) => {
    let recipeNum = req.body.recipeid;
    console.log(recipeNum);
    parseInt(recipeNum);
    recipeNum--;

    let recipeInstructions = recipejson.recipes[recipeNum];
    console.log(recipeInstructions);
    let recipeList = {ccb: recipeInstructions};
    // res.send(recipejson.recipes[recipeNum]);
    res.render('recipeedit', recipeList);

});

app.post('/recipe/create', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/test', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


/////////////////////// PORT ACCESS /////////////////////////
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

console.log(recipejson.recipes[0].title);