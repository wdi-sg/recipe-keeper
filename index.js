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

var individualRecipe = (request,response)=>{
    var recipeId = request.params.id;
    // console.log("You are in the individualRecipe function");
    // response.send("You are in the individualRecipe function");
};

var showAllRecipe = (request,response)=>{
    // console.log("This is the recipe function");
    // response.send("This is the recipe function");
    jsonfile.readFile(file,(err,obj)=>{
        // console.log(obj.recipe);
        // response.send(obj.recipe);
        var data = {
            recipe : obj.recipe
        }
        response.render("recipe",data);
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////routes//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/recipe/:id",individualRecipe);
app.get("/recipe", showAllRecipe);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(8080, () => console.log('~~~ Tuning in to the waves of port 8080 ~~~'));