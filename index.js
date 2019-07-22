console.log("let's save recipes");

const express = require('express');
const jsonfile = require('jsonfile');
const file = 'recipes.json'; //or whatever your json file is called
const app = express();
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
// app.use(express.static(__dirname+'/public/')); [ create public folder for css ]
app.set('view engine', 'jsx');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

//functions//

const homepage = (req,res) => {
    res.render('home');
};

const addRecipeForm = (req,res) => {
    res.render('add-form')
};

const addRecipe = (req,res) =>{
    let newRecipe = req.body;
    jsonfile.readFile(file, (err, obj) =>{
        if(err){
            console.log(err);
        }else{
            let lastKey = parseInt(obj.lastKey)+1;
            let recipeObject = {
                "id" : lastKey,
                "title": newRecipe.recipeName,
                "ingredients": newRecipe.ingredients,
                "instructions" : newRecipe.instructions
            };
            obj.lastKey = lastKey;
            obj.recipes.push(recipeObject);
            jsonfile.writeFile(file, obj, (err) =>{
                response.send("recipe added");
            })
        }
    })
};

//Routes//
app.get("/", homepage);
app.get("/recipes/new", addRecipeForm);
app.post("/recipes", addRecipe);


app.listen(3000);