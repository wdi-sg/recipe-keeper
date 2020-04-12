const jsonfile = require('jsonfile');

const recipeFile = './recipe.json';

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




app.get("/recipes/",(request,response)=>{
    // Reading recipe.jsonfile
    jsonfile.readFile(recipeFile,(err,obj) => {
        if (err) {
            console.log("//// error ////");
            console.error(err)
            console.log("//// error ////");
        }
        // Shows list of recipes in an array
        let recipeList = obj.cookbook.map(recipeItem => {
            console.log("checking current item :" + recipeItem);
            return recipeItem;
        });
        console.log(recipeList);
        response.send("This is page shows all recipes " + recipeList);
    })

})




app.get("/recipes/new", (request,response)=>{
    response.send("This page forms new recipes");
})




app.get("/recipes",(request,response)=>{
    response.send("This page sends the new recipes");
})



// create a route for id+
// collect id in the route as a variable+
// find the recipe file+
// find id within recipe file+
// display html page that shows content in id+
app.get("/recipes/:id", (request, response) => {
    let recipeID = request.params.id;
    console.log("Now showing page id " + recipeID);
        jsonfile.readFile(recipeFile,(err,obj)=>{
            if (err) {
            console.log("//// error ////");
            console.error(err)
            console.log("//// error ////");
            }
            let data = obj.cookbook;
            // response.send("This page shows recipe number : " + recipeID + ": " + showRecipe);
            response.render("home", data);
        })
})




app.get("/recipes/:id/edit", (request, response) => {
    response.send("This page forms recipe from id");
})




console.log("~~Recipe is listening~~")
app.listen(3000);