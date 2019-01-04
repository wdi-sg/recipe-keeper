const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override')
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


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}


//Landing page
    //List all recipes. For each list to have links to view details, edit, delete selected recipe)
    //Link to create a new recipe
app.get('/', (request,response) => {
    response.redirect   ('/recipes/');
    });

app.get('/recipes/', (request,response) => {
    jsonfile.readFile(file, (err, obj) => {
    err ? console.error(err) : null;
    const allRecipes = obj;
    response.render('recipeHome', allRecipes);
    });
});

//Create a new recipe
    //Form to create a recipe
    //Accept POST requests that creates a recipe
app.get('/recipes/new', (request, response) => {
    const ingredients = {number: [1,2,3,4,5,6]};
        response.render('recipeNew',ingredients);
});

app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        err ? console.error(err) : null;
        let maxIndex = obj.recipes.length - 1;
        let newRecipe = {
            "Id": obj.recipes[maxIndex].Id + 1,
            "Image": request.body.Image,
            "Title": request.body.Title,
            "Instructions": request.body.Instructions,
            "CreateDate": dd + "-" + mm + "-" + yyyy
        };
        newRecipe.Ingredients = [];
        for (i = 0; i<7; i ++) {
            request.body["Name"+i]?
            newRecipe.Ingredients.push ({
                "Name": request.body["Name"+i],
                "Amount": request.body["Amount"+i],
                "Notes": request.body["Notes"+i]
            }) : null;
        };
        obj.recipes.push(newRecipe);
        jsonfile.writeFile(file, obj, (err) => {
            err ? console.error(err) : null;
        response.redirect('/recipes/' + newRecipe.Id);
        });
    });
});


//View or Delete a specific recipe
app.get('/recipes/:id', (request, response) => {
    let requestParamsId = request.params.id;
    let indexArray = [];
    //view
    jsonfile.readFile(file, (err, obj) => {
        err ? console.error(err) : null;
        let selectedRecipeObject = obj.recipes.find(recipe => {
            return recipe.Id === parseInt(requestParamsId);
        })
        indexArray.push(obj.recipes.indexOf(selectedRecipeObject));
        const selectedRecipe = obj.recipes[indexArray[0]];
        response.render('recipeSelected',selectedRecipe);
    });
    //delete
    app.delete('/recipes/:id', (request, response) => {
        jsonfile.readFile(file, (err,obj) => {
            err ? console.log(err) : null;

            obj.recipes.splice([indexArray[0]],1);
            jsonfile.writeFile(file, obj, (err) => {
                err ? console.error(err) : null;
                response.redirect('/recipes/')
            });
        });
    });

});

//Edit recipe
    //Form for editing recipe with current values shown
    //Accept PUT request to update a recipe
app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        err ? console.log(err) : null;
        let selectedRecipeObject = obj.recipes.find(recipe => {
            return recipe.Id === parseInt(request.params.id);
        })
    const editRecipe = {};
    editRecipe.edit = selectedRecipeObject;
    editRecipe.id = request.params.id;
    editRecipe.ingredientsNum = selectedRecipeObject.Ingredients;
    delete editRecipe.edit.Id;
    delete editRecipe.edit.CreateDate;
    delete editRecipe.edit.EditDate;
    response.render('recipeEdit',editRecipe);
    })
})

app.put('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err,obj) => {
        err ? console.log(err) : null;
        let selectedRecipeObject = obj.recipes.find(recipe => {
            return recipe.Id === parseInt(request.params.id);
        })
        let editRecipe = selectedRecipeObject;
        editRecipe.Title = request.body.Title;
        editRecipe.Image = request.body.Image;
        editRecipe.Instructions = request.body.Instructions;
        editRecipe.Ingredients = [];
        for (i = 0; i<7; i ++) {
            request.body["Name"+i]?
            editRecipe.Ingredients.push ({
                "Name": request.body["Name"+i],
                "Amount": request.body["Amount"+i],
                "Notes": request.body["Notes"+i]
            }) : null;
        };
        editRecipe.EditDate = dd + "-" + mm + "-" + yyyy;
        jsonfile.writeFile(file, obj, (err) => {
            err ? console.error(err) : null;
            response.redirect('/recipes/' + request.params.id)
        });
    });
});


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));