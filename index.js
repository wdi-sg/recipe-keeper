//Configurations and set up
const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const FILE = 'data.json';

// Init express app
const app = express();

//post method config
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//for method override
app.use(methodOverride('_method'));

//for react
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

//configs end

//list of recipes
app.get('/recipes',(req,res)=>{
  jsonfile.readFile(FILE, (err,obj) => {
    console.log(`recipes:` + obj);
    const data = {recipes: obj.recipes};
    res.render('home',data);
  });
});


//get page to render create recipe form
app.get('/recipes/new',(req,res) => {
    console.log('add a new recipe here');
    res.render('create');
});

//to add/post new recipe into recipes database
app.post('/recipes', (req,res)=> {
    jsonfile.readFile(FILE, (err,obj) =>{
        console.log(obj);
        console.log('input received:'+ req.body);
        let newTitle = req.body.title;
        let newIng = req.body.ingredients;
        let newInst = req.body.instructions;
        let newRecipe = {
            title:newTitle,
            ingredients:newIng,
            instructions:newInst
        }
            obj.recipes.push(newRecipe);
            console.log(obj);
        jsonfile.writeFile(FILE, obj, (err) => {
          console.error(err);
          res.redirect('/recipes');
        });
    });
});



app.listen(3000,()=>{console.log('listening to local host')});