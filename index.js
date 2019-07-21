console.log('In the beginning');
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

console.log('Engine goes vroom!');

app.get('/', (request, response) =>{
    response.send("Get good Daniel!!");
});

app.get('/recipes/', (request, response) =>{
    jsonfile.readFile(FILE, (err,obj) => {
        let recipe = obj.recipes;
        // console.log(recipe);
        let data = {
            recipesKey : recipe
        };
        response.render('main', data);
    });
});


app.listen(3000, () => console.log('~~~ Local host love you 3000 ~~~'));