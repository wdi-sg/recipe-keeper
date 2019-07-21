const jsonfile = require('jsonfile');

const recipesFile = 'recipes.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

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


/**
 * ===================================
 * Global Variables
 * ===================================
 */

 let d = new Date();
 let date = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} `;

/**
 * ===================================
 * Sort Function
 * ===================================
 */

let sortArray = (array, q) => {

    let compare = (a, b) => {

        let valueA = a.title.toUpperCase();
        let valueB = b.title.toUpperCase();

        if (q === 'id') {
            valueA = parseInt(a.id);
            valueB = parseInt(b.id);
        } else if (q === 'ingrd') {
            // valueA = a.ingredients # (to parseInt)
            // valueB = b.ingredients # (to parseInt)
        }

        if (valueA < valueB) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }
        return 0;
    }

    if (q === 'title-des') {
        return array.sort(compare).reverse();
    }
    return array.sort(compare);
}

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/recipes', (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let recipes = obj.recipes;
        let query = req.query.sortby;

        sortArray(recipes, query);

        let recipeData = {
            recipes : recipes
        }
        res.render('recipes', recipeData);
    })
})

app.get('/recipes/new', (req,res) => {
    res.render('new-recipe');
})

app.post('/recipes', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let oldRecipe = req.body;
        let newRecipe = {};
        newRecipe.title = oldRecipe.title;
        newRecipe.ingredients = [];
        newRecipe.instructions = oldRecipe.instructions;
        newRecipe.img = oldRecipe.img;

        for (let i=0; i<oldRecipe.name.length; i++) {
            let newIng = {
                name : oldRecipe.name[i],
                amount : oldRecipe.amount[i],
                notes : oldRecipe.notes[i]
            }
            newRecipe.ingredients.push(newIng);
        }

        newRecipe.created = date;
        newRecipe.id = obj.recipeId + 1;
        obj.recipeId ++;
        obj.recipes.push(newRecipe);

        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log('err: ' + err);
            else console.log('success in creating!');
            res.redirect('/recipes');
        })
    })
})

app.get('/recipes/:id', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        let currentRecipe;

        for (let i=0; i<obj.recipes.length; i++) {
            let id = parseInt(obj.recipes[i].id);
            if ( id === currentId ) {
                currentRecipe = obj.recipes[i];
            }
        }
        let recipeData = {
            currentRecipe : currentRecipe,
            currentId : currentId
        }
        res.render('individual-recipe', recipeData);
    })
})

app.get('/recipes/:id/edit', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        let currentRecipe;

        for (let i=0; i<obj.recipes.length; i++) {
            let id = parseInt(obj.recipes[i].id);
            if ( id === currentId ) {
                currentRecipe = obj.recipes[i];
            }
        }
        let recipeData = {
            currentRecipe : currentRecipe,
            currentId : currentId
        }
        res.render('edit-recipe', recipeData);
    })
})

app.put('/recipes/:id', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentRecipe = req.body;
        let currentId = parseInt(req.params.id);

        for (let i=0; i<obj.recipes.length; i++) {
            let id = parseInt(obj.recipes[i].id);
            if ( id === currentId ) {
                for (let j=0; j<3; j++) {
                    obj.recipes[i].ingredients[j].name = currentRecipe.name[j]
                    obj.recipes[i].ingredients[j].amount = currentRecipe.amount[j]
                    obj.recipes[i].ingredients[j].notes = currentRecipe.notes[j]
                }
                obj.recipes[i].title = currentRecipe.title;
                obj.recipes[i].instructions = currentRecipe.instructions;
                obj.recipes[i].img = currentRecipe.img;
                obj.recipes[i].updated = date;
            }
        }
        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log('err: ' + err);
            else console.log('success in editing!');
            res.redirect(`/recipes/${currentId}`);
        })
    })
})

app.get('/recipes/:id/delete', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        let currentRecipe;

        for (let i=0; i<obj.recipes.length; i++) {
            let id = parseInt(obj.recipes[i].id);
            if ( id === currentId ) {
                currentRecipe = obj.recipes[i];
            }
        }

        let recipeData = {
            currentRecipe : currentRecipe,
            currentId : currentId
        }
        res.render('delete-recipe', recipeData);
    })
})

app.delete('/recipes/:id', (req,res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let currentId = parseInt(req.params.id);
        for (let i=0; i<obj.recipes.length; i++) {
            let id = parseInt(obj.recipes[i].id);
            if ( id === currentId ) {
                obj.recipes.splice(i, 1);
            }
        }
        jsonfile.writeFile(recipesFile, obj, (err) => {
            if (err) console.log('err: ' + err);
            else console.log('success in deleting!');
            res.redirect(`/recipes`);
        })
    })
})

app.get('/ingredients', (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {

        let ingredientsArr = [];
        for (let i=0; i<obj.recipes.length; i++) {
            for (let j=0; j<obj.recipes[i].ingredients.length; j++){
                if (!ingredientsArr.includes(obj.recipes[i].ingredients[j].name)){
                    ingredientsArr.push(obj.recipes[i].ingredients[j].name);
                }
            }
        }
        let recipes = obj.recipes;
        let recipeData = {
            recipes : recipes,
            ingredients : ingredientsArr
        }
        res.render('ingredients', recipeData);
    })
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('*', (req, res) => {
  res.redirect('/');
})


/**
 * ===================================
 * Listen to requests on port 2345
 * ===================================
 */

let port = 2345;
app.listen(port, ()=> {
    console.log('You are in port: '+ port + '!');
})