const jsonfile = require('jsonfile');

const file = 'data.json';

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

/*
*****
****
ROUTES!
******
******
*/


// NEW RECIPE FORM
app.get("/recipes/new", (request,response)=>{
    response.render("new")
})

app.post("/recipes/new", (request, response)=>{
    // Object.keys(request.body).forEach((key)=>{
    //     if (request.body[key] === ""){
    //         request.send(`${key} cannot be empty.`)
    //     }
    // });

    jsonfile.readFile(file, (err,obj)=>{
        let recipes = obj.recipes
        let newRecipe = request.body
        recipes.push(newRecipe)
        const data = {
            title: newRecipe.title,
            ingredients: newRecipe.ingredients,
            insructions: newRecipe.instructions
        }

        jsonfile.writeFile(file,obj,(err)=>{
            console.error(err)
        })
        response.render('added', data)
    })


})









/**
 * ===================================
 * Listen to requests on port
 * ===================================
 */
app.listen(3000, () =>
  console.log("~~~ IT'S WORKING MEOW ~~~"),
);