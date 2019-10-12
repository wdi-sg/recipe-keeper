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
    res.render('home')
});

//////////////////////////////////////////////////////
//this sections will be for /ingredients route
//test to show ingredient list
app.get('/ingredient/list', (req, res) => {
  // let recipes = 'recipe.json';
    console.log("showing all ingredient");
  jsonfile.readFile(ingredient,(err,obj)=>{
for(let i = 0; i< obj.length; i++)
            console.log(obj[i].name);
    })

  });

app.get('/recipe/new', (req, res) => {
  console.log("MMM~~ a new Recipe");
    res.render('addrecipe');
});
////////////////////////////////////////////////////////////////
//this section will show recipes

app.get('/recipe/show', (req, res) => {

});

app.listen(3000,()=>(console.log("you\'re on port 3000")));
