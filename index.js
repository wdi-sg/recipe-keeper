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

//main index page
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

//add new recipe
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

//show each recipe
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

//edit recipe form
app.get("/recipes/:id/edit", (request,response)=>{
    let identifier = parseInt(request.params.id)

    jsonfile.readFile(file, (err,obj)=> {

          obj.recipes.forEach((item)=>{

            if(identifier === item.id){
                console.log(item)

                const data = {
                    recipe: item
                }
            response.render('editform', data)
            }
          })

    })
})

//edit recipe
app.put("/recipes/:id", (request,response)=> {
    let identifier = parseInt(request.params.id)

    let edit = request.body

    let editTitle =  edit.title
    let editIng = edit.ingredients
    let editIns = edit.instructions

    let data;

    jsonfile.readFile(file, (err,obj) =>{

          obj.recipes.forEach((item)=>{

            if(identifier === item.id){
                item.title = editTitle
                item.ingredients = editIng
                item.instructions = editIns

                data = {
                    recipe: item
                }

            }
            console.log("data is " + data)
          })

        jsonfile.writeFile(file,obj,{spaces:2}, (err)=>{
            console.error(err)
        })
        response.render('edited', data)
    })

})

app.delete("/recipes/:id", (request,response)=> {
    let identifier = parseInt(request.params.id)
    let data;


    jsonfile.readFile(file, (err,obj) =>{

        obj.recipes.forEach((item, index)=>{

            if(identifier === item.id){
                console.log(item)

                data = {
                    recipe: item
                }

                obj.recipes.splice(index,1)
            }
        })



        jsonfile.writeFile(file,obj,{spaces:2}, (err)=>{
            console.error(err)
        })
        response.render('delete', data)
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