const jsonfile = require('jsonfile');

const file = 'recipe.json';

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var singleRecipe = (request,response)=>{
    var recipeId = request.params.id;
    // console.log(id);
    // response.send(id);
    jsonfile.readFile(file,(err,obj)=>{

        var recipeArrIndex = obj.recipe.findIndex(recipe => recipe.id == recipeId)
        // console.log(recipeArrIndex);

        var recipeIndex = obj.recipe[recipeArrIndex];

        var data = {
            recipe : recipeIndex
        }
        // console.log(recipeIndex);
        // response.send(recipeIndex);
        response.render("individual", data)
    });
};

var showAllRecipe = (request,response)=>{
    // console.log("This is the recipe function");
    // response.send("This is the recipe function");
    jsonfile.readFile(file,(err,obj)=>{
        // console.log(obj.recipe);
        // response.send(obj.recipe);
        // console.log(obj.recipe);
        var data = {
            recipe : obj.recipe
        }
        console.log(data);
        // console.log(obj.recipe);
        response.render("recipe",data);
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////routes//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/recipe/:id',singleRecipe);
app.get('/recipe', showAllRecipe);
app.get('/', (req, res) => {
  // running this will let express to run home.handlebars file in your views folder
  res.render('home')
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3002, () => console.log('~~~ Tuning in to the waves of port 8080 ~~~'));