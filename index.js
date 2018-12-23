const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const newRecipes = '/views/new-recipes'

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.get('/recipes', (request, response)=>{
    response.send('new-recipes');
})

app.listen(3000);