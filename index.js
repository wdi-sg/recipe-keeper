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

function dateNow() {
    return new Date();
}

//get form for submitting new recipe
app.get("/recipes/new",(req,res)=>{
    res.render('new')
})

app.post("/recipes", (req,res)=>{
    console.log(req.body);
    jsonfile.readFile("data.json",(err,data) => {
        const newRecipe = {
            id: req.body.id,
            title: req.body.title,
            ingredients: req.body.ingredient1,
            instructions: req.body.instructions,
            date: dateNow()
        }
        data.recipes.push(newRecipe);
        jsonfile.writeFile("data.json",data, err =>{ console.log(err)})
        res.send("Recipe Submitted")
    })
    })





//get form for submitting new recipe
app.get("/recipes/new",(req,res)=>{
    res.render('new')
})

app.post("/recipes", (req,res)=>{
    console.log(req.body);
    jsonfile.readFile("data.json",(err,data) => {
            var dateNow = dateNow();

        const newRecipe = {
            id: req.body.id,
            title: req.body.title,
            ingredients: req.body.ingredient,
            instructions: req.body.instructions,
            date : dateNow
            }
        console.log(newRecipe)
        data.recipes.push(newRecipe);
        jsonfile.writeFile("data.json",data, err =>{ console.log(err)})
        res.send("Recipe Submitted")
    })
    })

// get page displaying all the recipes
app.get("/recipes/:id", (req,res) => {
    const idQuery = parseInt(req.params.id);
    jsonfile.readFile("data.json", (err,data) =>{
        const obj = {
        title: data.recipes[idQuery].title,
        ids: data.recipes[idQuery].id,
        instructions: data.recipes[idQuery].instructions,
        ingredients: data.recipes[idQuery].ingredients,
        date: data.recipes[idQuery].date
    }
    res.render('recipe',obj)
        })


        })

//get page displaying all the recipes:
app.get("/recipes/", (req,res) => {
    let titleArr =[];
    let idArr =[];
    jsonfile.readFile("data.json", (err,data) =>{
        for(i=0; i<data.recipes.length; i++){
            titleArr.push(data.recipes[i].title);
            idArr.push(data.recipes[i].id);
        }
         const obj= {
        title: titleArr,
        ids: idArr
    }
        res.render('recipes',obj)
    })
})





app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
});