const jsonfile = require('jsonfile');
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

const homepage = 'home.jsx';
const editpage = 'edit.jsx';
const createpage = 'create.jsx';
const deletepage = 'delete.jsx';
const Arecipe = 'recipePage.jsx';

let recipeId = null;
let recipeMatchingId = null;

console.log("starting express");
///NO NEED TO EDIT ANYTHING ABOVE


//Redirect to front page
app.get('/', (request, response) => {
    response.redirect('/recipes');
});

//Displays all the recipes.
app.get('/recipes', (request, response) => {
    let sortRequest = request.query.sortby;

    jsonfile.readFile('data.json', (err, obj) => {
        if (err) {
            console.log("Something went wrong when displaying the front page.")
        }
        response.render(homepage, sortRecipes(sortRequest, obj));
    });
});

//Form to create new recipes
app.get('/recipes/new', (request, response) => {
    response.render(createpage);
});

//Displays a single recipe base on its ID.
app.get('/recipes/:id', (request, response)=>{
    recipeId = parseInt(request.params.id);

    jsonfile.readFile('data.json', (err,obj) => {
        if (err) {
            console.log("Something went wrong when displaying the Recipe page.")
        }

        recipesMatchingId = obj.recipes.find(recipes => parseInt(recipes.id) === recipeId);
        response.render(Arecipe, recipesMatchingId);
    });
})

/*==== Request Edit Page ==== */
app.get('/recipes/:id/edit', (request, response) => {
    recipeId = parseInt(request.params.id);

    jsonfile.readFile('data.json', (err,obj) => {
        if (err) {
            console.log("Something went wrong when displaying the edit page.")
        }

        recipesMatchingId = obj.recipes.find(recipes => parseInt(recipes.id) === recipeId);;
        //creates a "copy" of the matching poke but is not a direct reference to it (i think)
        response.render(editpage, recipesMatchingId);
    });
})

//Accepts the changes to the edit recipe.
app.put('/recipes/:id', (request, response) => {
    let recipebody = request.body;

    jsonfile.readFile('data.json', (err, obj) => {
        if (err) {
            console.log("Something went wrong while trying to read the file.");
            console.log(err)
        }

        let index = obj.recipes.findIndex(recipes => parseInt(recipes.id) === recipeId);
        obj.recipes[index] = recipebody;

        jsonfile.writeFile('data.json', obj, (err) => {
            if (err) {
                console.log("There was an error writing the edited Pokemon to file.");
                console.log(err)
            } else {
                response.send(`${recipebody.name} has been updated!`);
            }
        });
    });
});

//Request to delete the recipe
app.get('/recipes/:id/delete', (request, response) => {
    recipeId = parseInt(request.params.id);

    jsonfile.readFile('data.json', (err,obj) => {
        if (err) {
            console.log("Something went wrong when displaying the delete page.")
        }

        recipesMatchingId = obj.recipes.find(recipes => parseInt(recipes.id) === recipeId);
        response.render(deletepage, recipesMatchingId);
    });
})

// Deletes the pokemon
app.delete('/recipes/:id', (request, response) => {
    let recipebody = request.body;

    jsonfile.readFile('data.json', (err, obj) => {
        if (err) {
            console.log("Something went wrong while trying to read the file.");
            console.log(err)
        }

        let index = obj.recipes.findIndex(recipes => parseInt(recipes.id) === recipeId);
        obj.recipes.splice(index, 1);

        jsonfile.writeFile('data.json', obj, (err) => {
            if (err) {
                console.log("There was an error deleting Recipe from file.");
                console.log(err)
            } else {
                response.send(`${recipebody.name} has been deleted!`);
                //update to show default home page
            }
        });
    });
});

//Functions
function sortRecipes(sortRequest, obj){
    switch(sortRequest) {
        case "name":
            return {"recipes": obj.recipes.sort(function(a,b) {
                if (a.name < b.name) //a goes higher
                    return -1
                if (a.name > b.name) //b goes higher
                    return 1
                return 0               //a and b remain "equal"
                })
            };

        //random important note: syntax-wise, it seems to break code if first return is on a line by itself (because return just ends the function?)

        //random important note 2: dot notation is a lot cleaner than bracket

        case "num":
            return {"recipes": obj.recipes.sort(function(a,b) {
                if (a.num < b.num)
                    return -1
                if (a.num > b.num)
                    return 1
                return 0
                }), "sortRequest": sortRequest
                //adds temporary property of sortRequest to obj
            };

        default:
            obj["sortRequest"] = "num";
            return obj;
    }
};

// No need to edit anything below
const PORT = 3000;
app.listen(PORT, ()=>{ console.log("Starting to listen! at Port 3000"); })