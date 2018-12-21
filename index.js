const jsonfile = require('jsonfile');
const express = require('express');
const methodOverride = require('method-override');
const reactEngine = require('express-react-views').createEngine();

const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('jsx', reactEngine);

app.set('views', __dirname + 'views');
app.set('view engine', 'jsx');

const recipes = 'recipe.json';


// ****   /recipes   main page, see all recipes

app.get('/', (req, res) => {
    jsonfile.readFile(recipes, (err, obj) => {
        let recArr = obj
        res.render('mainPage', {recArr:recArr});
    });
});