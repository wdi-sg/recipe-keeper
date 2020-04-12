const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const app = express();
const reactEngine = require('express-react-views').createEngine();
const methodOverride = require('method-override');

const recipeRoutes = require('./routes/recipes-routes');
const ingredientRoutes = require('./routes/ingredients-routes');

const errorController = require('./controllers/404');

app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.engine('jsx', reactEngine);

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'jsx');

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/recipes', recipeRoutes);

app.use('/ingredients', ingredientRoutes);

app.get('/', (req, res) => {
    res.render('index.jsx');
})

app.use(errorController.get404Page);

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})