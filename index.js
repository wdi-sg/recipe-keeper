const jsonfile = require('jsonfile');
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const moment = require('moment')
const callback = require('./functions')

//JSON
const file = 'recipes.json';

//INIT
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));

//REACT ENGINE
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
//includes all directories
app.use(express.static("."));

// ******************************************
// ******************************************
//             BOILERPLATE END
// ******************************************
// ******************************************

//CRUD requests
app.get('/recipes/new', callback.newRecipe)
app.post('/recipes', callback.saveNewRecipe)
app.get('/recipes/:id', callback.showRecipe)
app.get('/recipes/:id/edit', callback.editRecipe)
app.put('/recipes/:id', callback.updateRecipe)
app.get('/recipes/:id/delete', callback.deleteDisplay)
app.delete('/recipes/:id', callback.deleteRecipe)
app.get('/recipes', callback.showAll)
app.get('/', callback.home)

//Listen for requests
app.listen(3000, () => console.log("Listening.....TO YOUR INPUT"))