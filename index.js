/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

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

const emptyObject = {"potato": "delicious"}
/**
 * ===================================
 * Routes
 * ===================================
 */

// Home page
app.get('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const data = {
            recipes: obj
        }
        response.render('home', data)
    })
})

// Shows 'New Recipe' page
app.get('/recipes/new', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        const data = {
            recipes: obj
        }
        response.render('create', data)
    })
})

// Adds new recipe
app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        let newRecipe = request.body;
        console.log(newRecipe);
        obj.recipes.push(newRecipe);

        jsonfile.writeFile(file, obj, (err) => {

            response.render('show', newRecipe)

        })
    })
})

// Shows the page for a single recipe by id
app.get('/recipes/:id/', (request, response) => {
    let index = parseInt(request.params.id) - 1;

console.log("potato")
    jsonfile.readFile(file, (err, obj) => {
        const currentRecipe = obj.recipes[index];

        response.render('show', currentRecipe)
    })
})

// Shows the page to edit recipe by id
app.get('/recipes/:id/edit', (request, response) => {
    let index = parseInt(request.params.id) - 1;

console.log("editing to add porcini mushrooms")
    jsonfile.readFile(file, (err, obj) => {
        const currentRecipe = obj.recipes[index];
        console.log(currentRecipe)
        response.render('edit', currentRecipe)
    })
})

app.put('/recipes/:id', (request, response) => {
    let index = parseInt(request.params.id) - 1;
    let updatedRecipe = request.body;

    jsonfile.readFile(file, (err, obj) => {
        obj.recipes.splice(index, 1, updatedRecipe);

        jsonfile.writeFile(file, obj, (err) => {

        })
    })
    response.render("show", updatedRecipe)
})

app.get('/recipes/:id/delete', (request, response) => {
    let index = parseInt(request.params.id) - 1;

    jsonfile.readFile(file, (err, obj) => {
        let toDelete = obj.recipes[index];
            response.render('delete', toDelete)
    })

})

app.delete('/recipes/:id', (request, response) => {
    let index = parseInt(request.params.id) - 1;

    jsonfile.readFile(file, (err, obj) => {
        let toDelete = obj.recipes[index];
        obj.recipes.splice(index, 1, emptyObject);

        jsonfile.writeFile(file, obj, (err) => {

        })
        console.log("deleted it, now you can have truffle fries")
        response.send(`The recipe for ${toDelete.title} has been removed.`)
    })
})


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));