const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const app = express();
const reactEngine = require('express-react-views').createEngine();
const methodOverride = require('method-override');

const adminRoutes = require('./routes/admin');
const recipeRoutes = require('./routes/recipes');

app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

app.use(recipeRoutes);

app.get('/', (req, res) => {
    res.send('Hello there. COVID 19 serious shit.')
})

app.use((req, res) => {
    res.status(404).send('<h1>Page not found!</h1>')
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})