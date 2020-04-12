const jsonfile = require('jsonfile');

const file = './recipe.json';

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
    jsonfile.readFile(file,(err,obj) => {
        if (err) {
            console.log("//// error ////");
            console.error(err)
            console.log("//// error ////");
        }
        let recipeList = obj.cookbook[0];
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

app.get("/recipes/:id", (request, response) => {
    response.send("This page shows recipe from id");
})

app.get("/recipes/:id/edit", (request, response) => {
    response.send("This page forms recipe from id");
})

console.log("~~Recipe is listening~~")
app.listen(3000);