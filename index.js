const express = require('express');
const jsonfile = require('jsonfile');
// Init express app
const app = express();

const file = 'ingredient.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

 // Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/recipe', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = {};
        recipes.list = [];
        for(let i = 0; i < obj.recipes.length; i++){
            recipes.list.push(obj.recipes[i]);
        }
        for(let i = 0; i < obj.recipes.length; i++){
            if(request.query.sortby == "asc"){
                recipes.list.sort((a, b) => {
                    if (a.name < b.name){
                        return -1;
                    }
                    if (a.name > b.name){
                        return 1;
                    }
                });
            }
            else if(request.query.sortby == "desc"){
                recipes.list.sort((a, b) => {
                    if (a.name > b.name){
                        return -1;
                    }
                    if (a.name < b.name){
                        return 1;
                    }
                });
            }
            else if(request.query.sortby == "id"){
                recipes.list.sort((a, b) => {
                    if (a.id < b.id){
                        return -1;
                    }
                    if (a.id > b.id){
                        return 1;
                    }
                });
            }
            else if(request.query.sortby == "dc"){
                recipes.list.sort((a, b) => {
                    a = a.date_created.split('/').reverse().join('');
                    b = b.date_created.split('/').reverse().join('');
                    if (a < b){
                        return 1;
                    }
                    if (a > b){
                        return -1;
                    }
                });
            }
            else if(request.query.sortby == "de"){
                recipes.list.sort((a, b) => {
                    a = a.date_edited.split('/').reverse().join('');
                    b = b.date_edited.split('/').reverse().join('');
                    if (a < b){
                        return 1;
                    }
                    if (a > b){
                        return -1;
                    }
                });
            }
            else{
                recipes.list.sort((a, b) => {
                    return a - b;
                });
            }
        }
        response.render('recipehome', recipes);
    });
});

app.get('/recipe/new', (request, response) => {
        response.render('recipenew');
});

app.post('/recipe/add', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let dateCreated = new Date();
        let dd = dateCreated.getDate();
        let mm = dateCreated.getMonth() + 1;
        let yyyy = dateCreated.getFullYear();
        dateCreated = dd + '/' + mm + '/' + yyyy;
        let newRecipe = {
            id: parseInt(obj.recipes.length + 1),
            name: request.body.name.charAt(0).toUpperCase() + request.body.name.slice(1),
            ingredients: [],
            instructions: request.body.ins.charAt(0).toUpperCase() + request.body.ins.slice(1),
            date_created: dateCreated,
            date_edited: ""
        }
        let recipes = {};
        recipes.name;
        recipes.amount;
        recipes.notes;
            if(request.body.ingredients == "ing1"){
                recipes.name = "chicken";
                recipes.amount = "1";
                recipes.notes = "de-boned";
            }
            else if(request.body.ingredients == "ing2"){
                recipes.name = "water";
                recipes.amount = "1";
                recipes.notes = "isotonic";
            }
            else if(request.body.ingredients == "ing3"){
                recipes.name = "duck";
                recipes.amount = "1";
                recipes.notes = "de-boned";
            }
            else if(request.body.ingredients == "ing4"){
                recipes.name = "butter";
                recipes.amount = "1";
                recipes.notes = "cup";
            }
            else if(request.body.ingredients == "ing5"){
                recipes.name = "brown sugar";
                recipes.amount = "3";
                recipes.notes = "cup";
            }
            else if(request.body.ingredients == "ing6"){
                recipes.name = "egg";
                recipes.amount = "2";
                recipes.notes = " ";
            }
            else if(request.body.ingredients == "ing7"){
                recipes.name = "vanilla extract";
                recipes.amount = "1";
                recipes.notes = "teaspoon";
            }
            else if(request.body.ingredients == "ing8"){
                recipes.name = "flour";
                recipes.amount = "2";
                recipes.notes = "cup";
            }
        newRecipe.ingredients.push(recipes);
        obj.recipes.push(newRecipe);
        response.redirect('/recipe');
        jsonfile.writeFile(file, obj, (err) => {
        });
    });
});

app.get('/recipe/:id/details', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let inputId = parseInt(request.params.id);
        let recipes = {};
        recipes.id;
        recipes.name;
        recipes.instructions;
        recipes.date_created;
        recipes.date_edited;
        recipes.ingredients = [];
        for(let i = 0; i < obj.recipes.length; i++){
            if(inputId === obj.recipes[i].id){
                recipes.id = obj.recipes[i].id;
                recipes.name = obj.recipes[i].name;
                recipes.instructions = obj.recipes[i].instructions;
                recipes.date_created = obj.recipes[i].date_created;
                recipes.date_edited = obj.recipes[i].date_edited;
                for(j = 0; j < obj.recipes[i].ingredients.length; j++){
                    recipes.ingredients.push(obj.recipes[i].ingredients[j])
                }
            }
        }
        response.render('recipedetails', recipes);
    });
});

app.get('/recipe/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let inputId = parseInt(request.params.id);
        let recipes = {};
        recipes.id;
        recipes.name;
        recipes.instructions;
        recipes.ingredients = [];
        for(let i = 0; i < obj.recipes.length; i++){
            if(inputId === obj.recipes[i].id){
                recipes.id = obj.recipes[i].id;
                recipes.name = obj.recipes[i].name;
                recipes.instructions = obj.recipes[i].instructions;
                for(j = 0; j < obj.recipes[i].ingredients.length; j++){
                    recipes.ingredients.push(obj.recipes[i].ingredients[j])
                }
            }
        }
        response.render('recipeedit', recipes);
    });
});

app.put('/recipe/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let dateEdited = new Date();
        let dd = dateEdited.getDate();
        let mm = dateEdited.getMonth() + 1;
        let yyyy = dateEdited.getFullYear();
        dateEdited = dd + '/' + mm + '/' + yyyy;
        let inputId = parseInt(request.params.id);
        let recipes;
        for(let i = 0; i < obj.recipes.length; i++){
            if(inputId === obj.recipes[i].id){
                obj.recipes[i].name = request.body.name;
                obj.recipes[i].ingredients = obj.recipes[i].ingredients
                obj.recipes[i].instructions = request.body.ins;
                obj.recipes[i].date_edited = dateEdited;
                recipes = obj[i];
            }
        }
        response.redirect('/recipe');
        jsonfile.writeFile(file, obj, (err) => {
        });
    });
});

app.delete('/recipe/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let inputId = parseInt(request.params.id);
        let recipes = {};
        recipes.id;
        recipes.name;
        recipes.instructions;
        recipes.ingredients = [];
        for(let i = 0; i < obj.recipes.length; i++){
            if(inputId === obj.recipes[i].id){
                recipes.id = obj.recipes[i].id;
                recipes.name = obj.recipes[i].name;
                recipes.instructions = obj.recipes[i].instructions;
                for(j = 0; j < obj.recipes[i].ingredients.length; j++){
                    recipes.ingredients.push(obj.recipes[i].ingredients[j])
                }
                obj.recipes.splice(parseInt(obj.recipes[i].id) - 1, 1)
            }
        }
        response.render('recipedelete', recipes);
        jsonfile.writeFile(file, obj, (err) => {
        });
    });
});

app.get('/recipe/:id/ingredients', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let inputId = parseInt(request.params.id);
        let recipes = {};
        recipes.id;
        recipes.ingredients = [];
        for(let i = 0; i < obj.recipes.length; i++){
            if(inputId === obj.recipes[i].id){
                recipes.id = obj.recipes[i].id;
                for(j = 0; j < obj.recipes[i].ingredients.length; j++){
                    recipes.ingredients.push(obj.recipes[i].ingredients[j])
                }
            }
        }
        response.render('recipeingredients', recipes);
    });
});

app.post('/recipe/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let dateEdited = new Date();
        let dd = dateEdited.getDate();
        let mm = dateEdited.getMonth() + 1;
        let yyyy = dateEdited.getFullYear();
        dateEdited = dd + '/' + mm + '/' + yyyy;
        let inputId = parseInt(request.params.id);
        let recipes = {};
        recipes.name;
        recipes.amount;
        recipes.notes;
        for(let i = 0; i < obj.recipes.length; i++){
            if(inputId === obj.recipes[i].id){
                if(request.body.ingredients == "ing1"){
                    recipes.name = "chicken";
                    recipes.amount = "1";
                    recipes.notes = "de-boned";
                }
                else if(request.body.ingredients == "ing2"){
                    recipes.name = "water";
                    recipes.amount = "1";
                    recipes.notes = "isotonic";
                }
                else if(request.body.ingredients == "ing3"){
                    recipes.name = "duck";
                    recipes.amount = "1";
                    recipes.notes = "de-boned";
                }
                else if(request.body.ingredients == "ing4"){
                    recipes.name = "butter";
                    recipes.amount = "1";
                    recipes.notes = "cup";
                }
                else if(request.body.ingredients == "ing5"){
                    recipes.name = "brown sugar";
                    recipes.amount = "3";
                    recipes.notes = "cup";
                }
                else if(request.body.ingredients == "ing6"){
                    recipes.name = "eggs";
                    recipes.amount = "2";
                    recipes.notes = " ";
                }
                else if(request.body.ingredients == "ing7"){
                    recipes.name = "vanilla extract";
                    recipes.amount = "1";
                    recipes.notes = "teaspoon";
                }
                else if(request.body.ingredients == "ing8"){
                    recipes.name = "flour";
                    recipes.amount = "2";
                    recipes.notes = "cup";
                }
                obj.recipes[i].date_edited = dateEdited;
                obj.recipes[i].ingredients.push(recipes);
            }
        }
        response.redirect('/recipe');
        jsonfile.writeFile(file, obj, (err) => {
        });
    });

});

app.get('/recipe/ingredients', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = {};
        recipes.ingredients = [];
        for(let i = 0; i < obj.ingredients.length; i++){
            recipes.ingredients.push(obj.ingredients[i]);
        }
        response.render('recipeingredientslist', recipes);
    });
});

app.get('/recipe/:name/recipelist', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipeIng = request.params.name;
        let recipes = {};
        recipes.list = [];
        recipes.input = recipeIng
        for(let i = 0; i < obj.recipes.length; i++){
            for(j = 0; j < obj.recipes[i].ingredients.length; j++){
                if(obj.recipes[i].ingredients[j].name == recipeIng){
                    recipes.list.push(obj.recipes[i]);
                }
            }
        }
        console.log(recipes)
        response.render('recipelist', recipes);
    });
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));