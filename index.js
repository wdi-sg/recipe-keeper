const jsonfile = require('jsonfile');

const file = 'recipe.json';

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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ starting recipe assignment

// home page
app.get('/', (request, response) =>{
    console.log("home page");
    response.render('home');
})



app.listen(7010, () => console.log('~~~ Tuning in to the waves of port 7000 ~~~'));