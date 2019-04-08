const jsonfile = require('jsonfile');

const file = 'data.json';

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

// view recipes
app.get('/recipes/', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        res.render('index, obj')
    })
})

// display form for a single recipe
app.get('recipes/new', (req, res) => {
    res.render('new')
});

// create a new recipe
app.post('/recipes', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {

    })
})



app.get('/', (request, response) => {
    // render a template form here
    response.send("hello world")
})




app.listen(3000, () => console.log('~~~Your listening in to riv station ~~~'))