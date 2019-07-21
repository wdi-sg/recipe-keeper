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
 * Routes
 * ===================================
 */

app.get('/recipes', (req, res) => {
    jsonfile.readFile(recipesFile, (err, obj) => {
        let recipes = obj.recipes;
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
        let newRecipe = req.body;
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
        console.log(recipeData);
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
                obj.recipes[i].title = currentRecipe.title;
                obj.recipes[i].ingredients = currentRecipe.ingredients;
                obj.recipes[i].instructions = currentRecipe.instructions;
                obj.recipes[i].updated = date;

            }
        }
        // obj.recipes[currentId-1] = currentRecipe;

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
        // let currentRecipe = req.body;
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

// app.get('/ingredients', (req, res) => {
    // jsonfile.readFile(recipesFile, (err, obj) => {

    //     let ingredientsArr = [];
    //     for (let i=0; i<obj.recipes.length; i++) {
    //         for (let j=0; j<obj.recipes[i].ingredients.length; j++){
    //             if (!ingredientsArr.includes(obj.recipes[i].ingredients[j].name)){
    //                 ingredientsArr.push(obj.recipes[i].ingredients[j].name);
    //             }
    //         }
    //     }
        // let recipes = obj.recipes;
        // let recipeData = {
        //     recipes : recipes
        // }
        // res.send(ingredientsArr);
        // res.render('ingredients');
    // })
// })

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