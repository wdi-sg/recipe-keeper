const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public/'));

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

const saveRecipe = (request, response) => {
    //your inputs
    // console.log(request.body);
    jsonfile.readFile(file, (err, obj) => {
        //if there's any error
        if (err) {
            response.send(err);
            return;
        }
        const recipes = obj.recipes;
        //add user input to the json file
        request.body['id'] = recipes.length+1
        recipes.push(request.body);
        //save to the json file
        jsonfile.writeFile(file, obj, (err) => {
            // redirect to line 68
            const link = '/recipes/' + recipes.length;
            //render recipes after adding
            response.redirect(link);
        })
    });
}

app.get('/', (request, response) => {
    response.redirect('/recipes');
})

app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const data = {
            recipes: obj.recipes
        }
        response.render("home", data);
    })
})

app.get('/recipes/new', (request, response) => {
    response.render('add');
})

app.get('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const recipeId = parseInt(request.params.id);
        const index = recipeId - 1;
        const data = {
            id : recipeId,
            title: obj.recipes[index].title,
            ingredients: obj.recipes[index].ingredients,
            instructions: obj.recipes[index].instructions,
        }
        response.render('show', data);
    });
})

app.get('/recipes/:id/edit', (request, response) => {
    //read file
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(request.params.id) - 1;
        const data = {
            id : index + 1,
            title: obj.recipes[index].title,
            ingredients: obj.recipes[index].ingredients,
            instructions: obj.recipes[index].instructions
        }
        response.render('edit', data);
    });
})

app.post('/recipes', saveRecipe);

//Accepts a request for the new data for recipes
app.put('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(request.params.id) - 1;
        obj.recipes[index].id = index+1;
        obj.recipes[index].title = request.body.title;
        obj.recipes[index].ingredients = request.body.ingredients;
        obj.recipes[index].instructions = request.body.instructions;
        jsonfile.writeFile(file, obj, (err) => {
            const link = "/recipes/" + (index + 1);
            response.redirect(link);
        })
    });
})

//Accepts a request to delete
app.delete('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(request.params.id) - 1;
        obj.recipes.splice(index, 1);
        for(let i = 0; i < obj.recipes.length; i++){
            obj.recipes[i].id = i;
        }
        jsonfile.writeFile(file, obj, (err) => {
            response.redirect('/recipes');
        });
    })
})

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));