/**
 * ===================================
 * Configurations and Global Variables
 * ===================================
 */
const express = require('express');
const jsonfile = require('jsonfile');
const file = 'data.json';
const app = express();
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
/**
 */
let recipeId = null;
let recipeMatchingId = null;

/**
 * ===================================
 * Routes
 * ===================================
 */

 /*==== Redirect to home page ==== */
app.get('/', (request, response) =>{
    response.redirect('/recipes')
});

  /*==== Request for Home Page ==== */
app.get('/recipes', (request, response) =>{
    let sortRequest = request.query.sortby;

    jsonfile.readFile(file, (err, obj) =>{
        if (err){
            console.log(`Json file read error`);
            console.log(err)
        }

        response.render('homePage', sortRecipes(sortRequest, obj));
    });
})

/*==== Request to create New Recipes ==== */
app.get('/recipes/new', (request, response) =>{
    response.render('createPage');
});

/*==== Post New Recipes ==== */
app.post('/recipes', (request, response)=>{
    let newRecipe = request.body;

    jsonfile.readFile(file, (err, obj) =>{
         if (err){
            console.log("Json file read error");
            console.log(err)
        }

        obj.recipes.push(newRecipe);

        jsonfile.writeFile(file, obj, (err) =>{
            if (err){
                console.log("Json file write error");
                console.log(err)

            } else {
                console.log ("New recipe added!");
                //let url = "/recipes/"+newRecipe.id;
                response.redirect("/recipes")
            }
        });
    });
});


/*==== Request Single Recipe Page ==== */
app.get('/recipes/:id', (request, response) =>{
    recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, obj) =>{
        if (err){
            console.log("Json file read error");
            console.log(err)
        }

        recipeMatchingId = obj.recipes.find(recipes => parseInt(recipes.id)===recipeId);
        response.render("singleRecipe", recipeMatchingId);
    });
});

/*==== Request Edit Page ==== */
app.get('/recipes/:id/edit', (request, response) =>{
    recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, obj) =>{
        if (err){
            console.log("Json file read error");
            console.log(err)
        }
        recipeMatchingId = obj.recipes.find(recipes => parseInt(recipes.id) === recipeId)
        response.render('editPage', recipeMatchingId);
    });
});


/*==== Accept Edit ==== */
app.put('/recipes/:id', (request, response) =>{
    let editedRecipe = request.body;

    jsonfile.readFile (file, (err, obj) =>{
        if (err){
            console.log("Json file read error");
            console.log(err)
        }

        let index = obj.recipes.findIndex(recipes => parseInt (recipes.id) === recipeId);
        obj.recipes[index] = editedRecipe;

        jsonfile.writeFile(file, obj, (err) =>{
            if (err){
                console.log("Json file write error");
                console.log(err)
            } else {
                response.send(`${editedRecipe.name} has been updated!`);
            }
        })
    })
})

/*==== Request to delete recipe ==== */
app.get('/recipes/:id/delete', (request, response) =>{
    recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, obj) =>{
        if (err){
            console.log("Json file read error");
            console.log(err)
        }

        recipeMatchingId = obj.recipes.find(recipes => parseInt(recipes.id) === recipeId)
        response.render('deletePage', recipeMatchingId);
    });
});

/*==== Delete recipe ==== */
app.delete ('/recipes/:id', (request, response)=>{
    let deletedRecipe = request.body;

    jsonfile.readFile(file, (err, obj)=>{
        if (err){
            console.log("Json file read error");
            console.log(err)
        }

        let index = obj.recipes.findIndex(recipes=> parseInt(recipes.id) === recipeId);
        obj.recipes.splice(index, 1);

        jsonfile.writeFile(file, obj, (err) =>{
            if (err){
            console.log("Json file write error");
            console.log(err)
            } else {
                response.send(`${deletedRecipe.name} has been deleted!`);
            }
        })
    });
});



/**
 * ===================================
 * Sorting Functions
 * ===================================
 */

var sortRecipes = function (sortRequest, obj){

    switch (sortRequest){

        case "name":
        return {"recipes": obj.recipes.sort(function (a,b) {
            if (a.name < b.name)
                return -1
            if (a.name > b.name)
                return 1
            return 0;
            }),
        };

        case "id":
        return {"recipes": obj.recipes.sort(function (a,b) {
            if (a.id < b.id)
                return -1
            if (a.id > b.id)
                return 1
            return 0;
            }), "sortRequest":sortRequest
        }

        default:
            obj.sortRequest = "id";
            return obj;
    }
};





app.listen(8080, () => console.log('~~~ Tuning in to the waves of port 8080 ~~~'));