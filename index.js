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


app.get('/', (request, response) => {
    response.render("homepage", {});
});

app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        if (request.query.recipe === undefined) {
            response.render("viewRecipe", obj);
        }

        else {
            for (let i = 0; i < obj.listOfRecipe.length; i++) {
                if (request.query.recipe === obj.listOfRecipe[i].title) {
                    response.render("viewRecipeResult",obj.listOfRecipe[i]);
                    break;
                }
            }
        }
    })
});

app.get('/recipes/new', (request, response) => {
    response.render("createRecipe", {});
});

app.post('/recipes/new/updated', (request, response) => {
    var title = request.body.title;
    var ingredients = request.body.ingredients.split('\r\n');
    var instructions = request.body.instructions.split('\r\n');

    var repeatedTitle = false;

    jsonfile.readFile(file, (err, obj) => {
        for (let i = 0; i < obj.listOfRecipe.length; i++) {
            if (obj.listOfRecipe[i].title === title) {
                repeatedTitle = true;
                break;
            }
        }

        var newRecipe = {"id": (obj.listOfRecipe.length + 1),
                            "title": title,
                            "ingredients" : ingredients,
                            "instructions": instructions
                            };

        if(repeatedTitle === false) {

            obj.listOfRecipe.push(newRecipe);
            response.render("createRecipeUpdated", newRecipe);
            jsonfile.writeFile(file, obj, (err) => {
            })
        }

        else {
        response.render("createRecipeNotUpdated", newRecipe);
        }
   })
});

app.get('/recipes/delete', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        if (request.query.recipe === undefined) {
            response.render("deleteRecipe", obj);
        }

        else {
            for (let i = 0; i < obj.listOfRecipe.length; i++) {
                if (request.query.recipe === obj.listOfRecipe[i].title) {
                    response.render("viewDeleteRecipe",obj.listOfRecipe[i]);
                    break;
                }
            }
        }
    })
});

app.delete("/recipes/delete/:id", (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
        response.render("deleteRecipeResult", obj.listOfRecipe[(request.params.id-1)]);
        for (let i = request.params.id; i <  obj.listOfRecipe.length; i++) {
            obj.listOfRecipe[i].id = obj.listOfRecipe[i].id - 1;
        }
        obj.listOfRecipe.splice((request.params.id-1),1);
        jsonfile.writeFile(file, obj, err);
    })
})

app.get('/recipes/update', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        if (request.query.recipe === undefined) {
            response.render("updateRecipe", obj);
        }

        else {
            for (let i = 0; i < obj.listOfRecipe.length; i++) {
                if (request.query.recipe === obj.listOfRecipe[i].title) {
                    response.render("viewUpdateRecipe",obj.listOfRecipe[i]);
                    break;
                }
            }
        }
    })
})

app.put('/recipes/update/:id', (request, response) => {
    var recipeUpdated = {"id": request.params.id,
                        "title": request.body.title,
                        "ingredients": request.body.ingredients.split('\r\n'),
                        "instructions": request.body.instructions.split('\r\n')
                        }

    jsonfile.readFile(file, (err, obj) => {
        obj.listOfRecipe[request.params.id-1] = recipeUpdated;
        jsonfile.writeFile(file, obj, err);
    })

    response.render("createRecipeUpdated", recipeUpdated);
})

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000'));