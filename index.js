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



//Send request to create a new recipe
let sendNewRecipeRequest = (request, response) => {
     response.render('newrecipe');
};

//Send request to create a new recipe
app.get('/recipes/new', sendNewRecipeRequest);
































app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));