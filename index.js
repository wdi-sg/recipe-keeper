// const jsonfile = require('jsonfile');
// const express = require('express');
// const methodOverride = require('method-override');

// const app = express();

// app.use(methodOverride('_method'));
// app.use(express.json());
// app.use(express.urlencoded ({
//     extended: true,
// }))

// const reactEngine = require('express-react-views').createEngine();

// app.engine('jsx', reactEngine);

// app.set('views',__dirname+'/views');

// app.set('view engine', 'jsx');

const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

const methodOverride = require('method-override');
const { response } = require('express');

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

app.get('/', (req,res) => {
    res.send('hello!');
})

app.get('/recipes/new', (req,res) => {
    res.render('form')
})

app.post('/recipes', (req,res) => {

    jsonfile.readFile( 'data.json', (err,obj) => {

        let id = obj.recipes.length;
        req.body.id = id;
        obj.recipes.push(req.body);

        jsonfile.writeFile( 'data.json', obj, (err) => {
            if (err) throw (err);
        } );
    })
    res.send(req.body);
})

app.get('/recipes/', (req, res) => {
    jsonfile.readFile( 'data.json', (err,obj) => {
        res.render('recipes', obj);
    })
})

app.get('/recipes/:id', (req,res) => {
    jsonfile.readFile( 'data.json', (err,obj) => {
        let recipes = obj.recipes;
        let id = req.params.id - 1;
        let selectedRecipe = recipes[id];

        res.render('recipe', selectedRecipe);
    })
})

app.get('/recipes/:userInput/edit', (req,res) => {
    jsonfile.readFile( 'data.json', (err,obj) => {
        let recipes = obj.recipes;
        let id = req.params.userInput - 1;
        let selectedRecipe = recipes[id];

        res.render('edit', selectedRecipe);
    })
})

app.put('/recipes/:userInput', (req,res) => {
    jsonfile.readFile( 'data.json', (err,obj) => {
        let recipes = obj.recipes;
        let id = req.params.userInput - 1;
        let updatedRecipe = recipes[id];
        
        updatedRecipe.ingredients = req.body.ingredients;
        updatedRecipe.instructions = req.body.instructions;

        jsonfile.writeFile( 'data.json', obj, (err) =>{
            if (err) throw (err);
        })
        
        res.send(updatedRecipe);
    })
})

app.delete( '/recipes/:userInput', (req,res) => {
    jsonfile.readFile( 'data.json', (err,obj) => {
        let recipes = obj.recipes;
        let id = req.params.userInput - 1;
        let updatedRecipe = recipes[id];

        let totalRecipes = recipes.splice(id, 1);

        jsonfile.writeFile( 'data.json', obj, (err) =>{
            if (err) throw (err);
        })

        res.send('deleted');
    })
})

app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
});