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

var updateNewRecipe = (request,response)=>{
    // console.log("Inside update new recipe function");
    // response.send("Inside update new recipe function");
    var newRecipe = request.body;
    var urlNew = "/recipe/"+newRecipe.id
    jsonfile.readFile(file,(err,obj)=>{
        // response.send(newRecipe);
        obj.recipe.push(newRecipe);
        // response.send(obj.recipe);
        jsonfile.writeFile(file,obj,(err)=>{
            if(err){
                response.send("Error in updating new recipe");
            }
            else{
                response.redirect(urlNew);
            }
        })
    })
}

var newRecipe = (request,response)=>{
    // console.log("Inside the new recipe function");
    // response.send("Inside the new recipe function");
    jsonfile.readFile(file, (err,obj)=>{
        var newId = parseInt((obj.recipe.length)+1);
        // console.log(newId);
        var data = {
            recipeId: newId
        }
        response.render('new', data);
    });
};


var updateDeleteRecipe = (request,response)=>{
    var recipeId = request.params.id;
    var url = "/recipe";
    jsonfile.readFile(file, (err,obj)=>{
        var recipeArrIndex = obj.recipe.findIndex(recipe =>recipe.id == recipeId);
        obj.recipe.splice(recipeArrIndex,1);
        // response.send(obj.recipe);
        jsonfile.writeFile(file,obj,(err)=>{
            if(err){
                response.send("Failed to update");
            }
            else{
                response.redirect(url);
            }
        })
    })
}

var deleteRecipe = (request,response)=>{
    var recipeId = request.params.id;
    // console.log("Inside delete recipe function");
    // response.send("Inside delete recipe function");
    jsonfile.readFile(file,(err,obj)=>{
        var recipeArrIndex = obj.recipe.findIndex(recipe =>recipe.id == recipeId);
        var recipeInIndex = obj.recipe[recipeArrIndex];
        // response.send(recipeInIndex);
        var data = {
            recipe: recipeInIndex
        }
        response.render('delete',data);
    });
};

var updateEditRecipe = (request,response)=>{
    var recipeId = request.params.id;
    // console.log("Inside update recipe function");
    // response.send("Inside update recipe function");
    var editedRecipe = request.body;
    editedRecipe.id = parseInt(editedRecipe.id);
    var urlId = "/recipe/"+editedRecipe.id;
    // console.log(editedRecipe);
    // response.send(editedRecipe);
    jsonfile.readFile(file,(err,obj)=>{
        var recipeArrIndex = obj.recipe.findIndex(recipe =>recipe.id == recipeId);
        obj.recipe[recipeArrIndex] = editedRecipe;
        // console.log(obj.recipe);
        // response.send(obj.recipe);
        jsonfile.writeFile(file,obj,(err)=>{
            if(err){
                response.send("Failed to update");
            }
            else{
                response.redirect(urlId);
            };
        });
    });
};

var editRecipe = (request,response)=>{
    var recipeId = request.params.id
    // console.log("HOOLAA");
    // response.send("Inside the edit recipe function");
    jsonfile.readFile(file,(err,obj)=>{
        var recipeArrIndex = obj.recipe.findIndex(recipe =>recipe.id == recipeId);
        // console.log(recipeArrIndex);
        var recipeInIndex = obj.recipe[recipeArrIndex];
        // console.log(recipeInIndex);
        var data = {
            recipe: recipeInIndex
        };
        console.log(data);
        response.render('edit',data);
    });
};;

var singleRecipe = (request,response)=>{
    var recipeId = request.params.id;
    // console.log(id);
    // response.send(id);
    jsonfile.readFile(file,(err,obj)=>{
        var recipeArrIndex = obj.recipe.findIndex(recipe => recipe.id == recipeId)
        // console.log(recipeArrIndex);
        var recipeIndex = obj.recipe[recipeArrIndex];
        var data = {
            recipe : recipeIndex
        };
        // console.log(recipeIndex);
        // response.send(recipeIndex);
        response.render("individual", data)
    });
};

var showAllRecipe = (request,response)=>{
    // console.log("This is the recipe function");
    // response.send("This is the recipe function");
    jsonfile.readFile(file,(err,obj)=>{
        // console.log(obj.recipe);
        // response.send(obj.recipe);
        // console.log(obj.recipe);
        var data = {
            recipe : obj.recipe
        };
        // console.log(data);
        // console.log(obj.recipe);
        response.render("recipe",data);
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////routes//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/recipe',updateNewRecipe);
app.get('/recipe/new',newRecipe);
app.delete('/recipe/:id',updateDeleteRecipe);
app.get('/recipe/:id/delete',deleteRecipe);
app.put('/recipe/:id',updateEditRecipe);
app.get('/recipe/:id/edit',editRecipe);
app.get('/recipe/:id',singleRecipe);
app.get('/recipe', showAllRecipe);
app.get('/', (req, res) => {
  // running this will let express to run home.handlebars file in your views folder
  res.render('home');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3002, () => console.log('~~~ Tuning in to the waves of port 3002 ~~~'));