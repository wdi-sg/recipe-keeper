const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const app = express();
const reactEngine = require('express-react-views').createEngine();
const methodOverride = require('method-override');

const recipeRoutes = require('./routes/recipes');

app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.engine('jsx', reactEngine);

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'jsx');

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
    res.render('index.jsx');
})

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})