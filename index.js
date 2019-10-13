const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public'));

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

app.get("/recipes", (request,response)=>{
    jsonfile.readFile(file, (err,obj) => {

        const data = {
            recipeList: obj.recipes
        }
        response.render("home", data)
    })
})


// NEW RECIPE FORM
app.get("/recipes/new", (request,response)=>{
    response.render("new")
})


app.post("/recipes/new", (request, response)=>{
    let newRecipe = request.body
    const data = {
            title: newRecipe.title,
            ingredients: newRecipe.ingredients,
            instructions: newRecipe.instructions
        }

    jsonfile.readFile(file, (err,obj)=>{
        let recipes = obj.recipes
        let id = obj.IDs
        newRecipe.id = id
        console.log(newRecipe)
        recipes.push(newRecipe)
        obj.IDs = obj.IDs + 1

        jsonfile.writeFile(file, obj, {spaces:2}, (err)=>{
            console.error(err)
        })
    })

    response.render('added', data)
})

app.get("/recipes/:id", (request,response) => {
    let identifier = parseInt(request.params.id)


    jsonfile.readFile(file, (err,obj)=> {


        obj.recipes.forEach((item, index)=>{

            if(identifier === item.id){

                const data = {
                    recipe: item
                }

                response.render('recipe', data)

            }

        })

    })
})

app.put("/recipes/:id", (request,response)=> {
    let identifier = request.params.id
    let index = identifier-1
    let edit = request.body

    let editTitle =  edit.title
    let editIng = edit.ingredients
    let editIns = edit.instructions


    jsonfile.readFile(file, (err,obj) =>{
        console.log(obj.recipes[index])
        obj.recipes[index].title = editTitle
        obj.recipes[index].ingredients = editIng
        obj.recipes[index].instructions = editIns
        const data = {
            recipe: obj.recipes[index]
        }
        jsonfile.writeFile(file,obj,{spaces:2}, (err)=>{
            console.error(err)
        })
        response.render('edited', data)
    })

})

app.delete("/recipes/:id", (request,response)=> {
    let identifier = request.params.id
    let index = identifier-1

    jsonfile.readFile(file, (err,obj) =>{

        const data = {
            recipe: obj.recipes[index]
        }

        obj.recipes.splice(index,1)

        jsonfile.writeFile(file,obj,{spaces:2}, (err)=>{
            console.error(err)
        })
        response.render('delete', data)
    })

})

app.get("/recipes/:id/edit", (request,response)=>{
    let identifier = request.params.id
    let index = identifier - 1
    console.log(index)

    jsonfile.readFile(file, (err,obj)=> {

        const data = {
            recipe: obj.recipes[index],
            id: obj.recipes[index]["id"]
        }
        response.render('editform', data)
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