const jsonfile = require('jsonfile');

const recipeFile = './recipe.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Install Middleware to link POST and EDIT from react
const methodOverride = require('method-override')

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');




app.get("/recipes/",(request,response)=>{
    // Reading recipe.jsonfile
    jsonfile.readFile(recipeFile,(err,obj) => {
        console.log("//// Readfile initiated... ////");
        if (err) {
            console.log("//// error ////");
            console.error(err)
            console.log("//// error ////");
        }
        // Shows list of recipes in an array
        let recipeList = obj.cookbook.map(recipeItem => {
            console.log("checking current item :" + recipeItem);
            return recipeItem;
        })
        console.log(recipeList);
        // response.send("This is page shows all recipes " + recipeList);
        response.render("list", obj);
    })

})




app.get("/recipes/new", (request,response)=>{
    response.send("This page forms new recipes");
})




app.get("/recipes",(request,response)=>{
    response.send("This page sends the new recipes");
})




app.get("/recipes/:id", (request, response) => {
    let recipeID = parseInt(request.params.id);
        console.log("Now showing page id " + recipeID);
        jsonfile.readFile(recipeFile,(err,obj)=>{
            if (err) {
                console.log("//// error ////");
                console.error(err)
                console.log("//// error ////");
            }
            const recipeObject = obj.cookbook;

            let displayID =
                {
                    id: recipeID,
                    recipe: recipeObject
                };

            response.render("home", displayID);
        })
})




app.get("/recipes/:id/edit", (request, response) => {
    response.send("This page forms recipe from id");
})




let listener = console.log("~~Recipe is listening~~");

app.listen(3000, listener);