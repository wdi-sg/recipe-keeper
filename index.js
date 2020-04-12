const jsonfile = require('jsonfile');
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

var file = 'data.json';
var ingredients = 'ingredient.json';

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.get('/home', (req,res) => {
    res.render('home')
})

app.get('/recipes/create', (req,res) => {
    res.render('create')
})


app.get('/recipes/:id/edit', (req,res) => {
    jsonfile.readFile(file, (err,obj) => {
        console.log("error of readfile is: =============");
        console.log(err);
        console.log("obj of readfile is: =============");
        console.log(obj);
        var recipeHolder= {};
        recipeHolder = obj.recipes[parseInt(req.params.id)-1];
    res.render('edit', recipeHolder);
    });
});


app.put('/recipes/:id', (req,res) => {
    jsonfile.readFile(file, (err,obj) => {
        console.log("error of readfile is: =============");
        console.log(err);
        console.log("obj of readfile is: =============");
        var parsedNum = parseInt(req.params.id)-1
        var recipeHolder = {};
        recipeHolder=obj.recipes[parsedNum];
        console.log("================ putreq before")
        console.log(recipeHolder)
        recipeHolder.title = req.body.title;
        recipeHolder.ingredients = req.body.ingredients;
        recipeHolder.instructions = req.body.instructions;
        console.log("================ putreq after")
        console.log(recipeHolder)
        jsonfile.writeFile(file, obj, (err)=>{
            console.log("error of writefile is: ==========")
            console.log(err);
            console.log(obj);
        });
    res.render('single', recipeHolder);
    });
});

app.get('/recipes/:id', (req,res) => {
    jsonfile.readFile(file, (err,obj) => {
        console.log("error of readfile is: =============");
        console.log(err);
        console.log("obj of readfile is: =============");
        console.log(obj);
        var recipeHolder= {};
        recipeHolder = obj.recipes[parseInt(req.params.id)-1];
    res.render('single', recipeHolder);
    });
});

app.post('/recipes', (req,res)=>{
    jsonfile.readFile(file, (err,obj) => {
        console.log("error of readfile is: =============");
        console.log(err);
        console.log("obj of readfile is: =============");
        console.log(obj);
        const addNewRecipe = {
            id: (parseInt(obj.recipes.length) +1),
            title: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        };
        obj.recipes.push(addNewRecipe);
        jsonfile.writeFile(file, obj, (err)=>{
            console.log("error of writefile is: ==========")
            console.log(err);
            console.log(obj);
        });
    });
    res.redirect('/home');
});






















app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));