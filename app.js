const jsonfile = require('jsonfile');
const express = require('express');
const methodOverride = require('method-override')

const file = 'data.json';
const app = express();

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

//home page
app.get("/recipes/", (request, response)=>{
    jsonfile.readFile('recipes.json', (err, obj)=>{
        response.render('home', obj)
    })
})

//form for new recipes
app.get("/recipes/new", (request, response)=>{
    response.render('newrecipe')
})

//takes input for new recipes and stores it to disk
app.post("/recipes", (request, response)=>{
    jsonfile.readFile('recipes.json', (err, obj)=>{
        obj.recipes.push(request.body)
        obj.recipes.sort(function(a,b){
            let nameA = a.title
            let nameB = b.title
            if(nameA > nameB){
                return 1
            } else if(nameA<nameB){
                return -1
            }
            return 0
        })
        console.log(obj.recipes)
        jsonfile.writeFile('recipes.json', obj, err=>{console.log(err)})
        response.send("Recipe submitted. <a href='/recipes/'>Back to homepage</a>")
    })
})

//rendering individual recipe page
app.get("/recipes/:index", (request, response)=>{
    let recipeInd = parseInt(request.params.index)
    let chosenObj;
    jsonfile.readFile('recipes.json', (err, obj)=>{
        chosenObj = obj.recipes[recipeInd]
        if(!chosenObj){
            response.status(404).send("No such recipe found. <a href='/recipes/'>Back to homepage</a>")
        } else {
            chosenObj.index = recipeInd
            response.render('indivrecipe', chosenObj)
        }
    })
})

//rendering form for editing individual recipe
app.get("/recipes/:index/edit", (request, response)=>{
    jsonfile.readFile('recipes.json', (err, obj)=>{
        let chosenRecipe = obj.recipes[request.params.index]
        chosenRecipe.index = request.params.index
        response.render('editrecipe', chosenRecipe)
    })
})

//updating recipe at selected index
app.put("/recipes/:index", (request,response)=>{
    jsonfile.readFile('recipes.json', (err, obj)=>{
        obj.recipes[request.params.index] = request.body
        jsonfile.writeFile('recipes.json', obj, err=>{console.log(err)})
        response.send("Recipe updated. <a href='/recipes/'>Back to homepage</a>")
    })
})

//deleting recipe  at selected index
app.delete("/recipes/:index", (request, response)=>{
    jsonfile.readFile('recipes.json', (err, obj)=>{
        obj.recipes.splice(request.params.index, 1)
        jsonfile.writeFile('recipes.json', obj, err=>{console.log(err)})
        response.send("Recipe deleted. <a href='/recipes/'>Back to homepage</a>")
    })
})

app.get("/ingredients", (request, response)=>{
    jsonfile.readFile('recipes.json', (err, obj)=>{
        response.render('ingredients', obj)
    })
})


app.listen(3000, ()=>{console.log("Listening on port 3000")})