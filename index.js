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

app.get("/recipe", (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = {};
        recipes.list = obj;
        for(let i = 0; i < obj.length; i++){
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
            else{
                recipes.list.sort((a, b) => {
                    return a - b;
                });
            }
        }

        response.render('recipehome', recipes);
    });
});

app.get('/recipe', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = {};
        recipes.list = [];
        for(let i = 0; i < obj.length; i++){
            recipes.list.push(obj[i]);
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
            id: parseInt(obj.length + 1),
            name: request.body.name.charAt(0).toUpperCase() + request.body.name.slice(1),
            ingredients: request.body.ing,
            instructions: request.body.ins.charAt(0).toUpperCase() + request.body.ins.slice(1),
            date_created: dateCreated
        }
        obj.push(newRecipe);
        response.redirect('/recipe');
        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
        });
    });
});

app.get('/recipe/:id/details', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let inputId = parseInt(request.params.id);
        let recipes = {};
        recipes.id;
        recipes.name;
        recipes.ingredients;
        recipes.instructions;
        recipes.date_created;
        recipes.date_edited;
        for(let i = 0; i < obj.length; i++){
            if(inputId === obj[i].id){
                recipes.id = obj[i].id;
                recipes.name = obj[i].name;
                recipes.ingredients = obj[i].ingredients;
                recipes.instructions = obj[i].instructions;
                recipes.date_created = obj[i].date_created;
                recipes.date_edited = obj[i].date_edited;
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
        recipes.ingredients;
        recipes.instructions;
        for(let i = 0; i < obj.length; i++){
            if(inputId === obj[i].id){
                recipes.id = obj[i].id;
                recipes.name = obj[i].name;
                recipes.ingredients = obj[i].ingredients;
                recipes.instructions = obj[i].instructions;
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
        for(let i = 0; i < obj.length; i++){
            if(inputId === obj[i].id){
                obj[i].name = request.body.name;
                obj[i].ingredients = request.body.ing;
                obj[i].instructions = request.body.ins;
                obj[i].date_edited = dateEdited;
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
        recipes.ingredients;
        recipes.instructions;
        for(let i = 0; i < obj.length; i++){
            if(inputId === obj[i].id){
                recipes.id = obj[i].id;
                recipes.name = obj[i].name;
                recipes.ingredients = obj[i].ingredients;
                recipes.instructions = obj[i].instructions;
                obj.splice(parseInt(obj[i].id) - 1, 1)
            }
        }
        response.render('recipedelete', recipes);
        jsonfile.writeFile(file, obj, (err) => {
        });
    });
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));