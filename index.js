
///////////////// BOILERPLATE CODE ///////////////////////////
const jsonfile = require('jsonfile');

const file = 'data.json';

const json = require('./ingredient.json');

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

    let recipe = json[0];

    res.render("homepage", recipe);

});


app.get('/recipes/:id', (req, res) => {

    console.log(req.params.id)
    let recipeNum = req.params.id;
    let recipe = json[recipeNum];

    res.render("homepage", recipe);

});



/////////////////////// PORT ACCESS /////////////////////////
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));