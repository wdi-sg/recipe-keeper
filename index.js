const express = require('express');
const jsonfile = require('jsonfile');

const file = 'data.json';
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();

app.use(methodOverride('_method'));
// init express app
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(__dirname+'/public/'));


app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// set react to be the default view engine
app.set('view engine', 'jsx');





app.get('/recipes/new', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {res.render('addRecipe', obj)})

});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));