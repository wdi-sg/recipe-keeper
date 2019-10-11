const jsonfile = require('jsonfile');

const FILE = 'data.json';

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

// Home page where you can add new recipes
app.get('/home', (request, response) =>{
    response.render('home')
})

// See all recipes that exist 

// Edit Recipes that currently exist 

// Delete Recipes






app.listen(3000)