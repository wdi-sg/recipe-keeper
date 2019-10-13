const  jsonfile = require('jsonfile');
const express = require('express');
const methodOverride = require('method-override');



const FILE = 'recipes.json';




//Init express app
const app = express();
const reactEngine = require('express-react-views').createEngine();

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');






// app.get('/recipes', (request,response) => {
//     jsonfile.readFile(FILE,(err,obj) => {
//         var receipes = obj.recipes;
//         var content = {
//             recipes:recipes
//         }
//         response.render('allrecipes',content);
//     })
// })
//****************************************************************
///show new-recipe for entry!
app.get('/recipes/new',(request,response) => {
    jsonfile.readFile(FILE,(err,obj) =>{
        // get json from recipes.json to find and display the ID no for the new-recipe form.
        var id = obj.recipes.length+1;
        var data = {
            id:id
        }
        response.render('new-recipe',data);
    })
})
//****************************************************************



app.get('/recipes/:id/edit',(request, response)=> {

    jsonfile.readFile(FILE, (err,obj) => {

        let editRecipeId = parseInt(request.params.id);
        console.log(editRecipeId)
        let editRecipe = obj.recipes[editRecipeId - 1];
        var array;

        response.render("editRecipe", editRecipe)
    });
});








//****************************************************************
app.post('/recipes',(request,response) =>{
    var newRecipe = request.body
    newRecipe.id = request.body.id;

    jsonfile.readFile(FILE,(err,obj) => {
        if (err){
            console.log(err);
        } else{
            if (true){
                obj.recipes.push(newRecipe);

                jsonfile.writeFile(FILE,obj,{spaces: 2} ,(err) =>{
                    if (err != null) {
                        console.log(err);
                    }
                    else{
                        response.send(`recipe added`)
                    }
                })
            }
        }
    })
})

//****************************************************************
//show single recipe from ID

app.get('/recipes/:id',(request,response)=>{
    jsonfile.readFile(FILE,(err,obj)=>{
        let id = parseInt(request.params.id) - 1;
        let recipe = obj.recipes[parseInt(id)];

        if(err){
            console.log(err);
        }
        else {
            for ( i = 0; i < obj.recipes.length; i++){
                if(recipe === id ){
                    return recipe;
                }
            }if(recipe === undefined){
                response.status(404);
                response.send("Recipe not found");
            }
            else{
                let data = {
                    id:id,
                    recipe:recipe,
                    ingredients:recipe.Ingredients
                }
                response.render('id',data);
            }
        }
    })
})


























app.listen(5000, () => console.log('~~~ Tuning in to the waves of port 5000 ~~~'));