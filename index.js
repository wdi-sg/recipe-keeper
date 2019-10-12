const express = require('express');
const app = express();
const jsonfile = require('jsonfile');
const FILE = 'recipe.json';
const ingredient = 'ingredient.json';
//Allows use for request.body
const methodOverride = require('method-override')
app.use(methodOverride('_method'));


app.use(express.json());
app.use(express.urlencoded({
   extended: true,
}));
//for rendering HTML
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname+'/views');
app.set('view engine', 'jsx');


app.get('/home', (req, res) => {
    res.render('home',)
});
//this section should be for recipe route

// app.get('/recipe/show', (req, res) => {
// jsonfile.readFile(FILE, (err,obj)=>{
// });

//this sections will be for /ingredients route

app.get('/ingredient/list', (req, res) => {

});

app.listen(3000,()=>(console.log("you\'re on port 3000")));
