// NPM Packages / Set-up that we need for this app
// require express package and saving it in a var(app.get/app.post,etc). It's a convention to name it app
const express = require('express');
const app = express();
// require jsonfile package
const jsonfile = require('jsonfile');
// data.json is in the same directory(as index.js)
// data.json currently consist of an empty arr. We will write recipes(obj) in it
const file = 'data.json';
// Need this for put / delete routes
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// To serve static files such as images, CSS files, and JavaScript files
app.use(express.static(__dirname+'/public/'));
// Need this to 'read' request.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view(jsx) files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Get route to view all recipes
app.get('/recipes/', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        // We pass in the entire json(obj)?
        res.render('index', obj);
    })
})

// Displays the form for new recipe
app.get('/recipes/new', (req, res) => {
    res.render('new');
})

// Create new recipe
app.post('/recipes', (req, res) => {
    // req.body gives an obj containing the data from the new form
    jsonfile.readFile(file, (err, obj) => {
        // By right we should check for err
        // We will push req.body inside recipesArr
        const recipesArr = obj["recipes"];
        const recipe = req.body; // {}
        // Giving every obj created an unique id(length of arr)
        recipe["id"] = recipesArr.length + 1;
        recipesArr.push(recipe);
        // There is definitely a better way to do this..
        const redirectLink = `/recipes/${recipesArr.length}`;
        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log("ERROR Encountered");
            }
        })
        // After recipe 'created' direct user to a page that shows that recipe
        // There is definitely a better way to do this..
        res.redirect(redirectLink);
    })
})

// See a single recipe
// We can add a if statement to check if json file contains anything at all?
app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Read json file
    jsonfile.readFile(file, (err, obj) => {
        // Store the recipes inside a var [{},{}]
        const recipesArr = obj["recipes"];
        // Create a var to store the recipe with the id inputted {}
        let recipe;
        for (let i = 0; i < recipesArr.length; i++) {
            if (id === recipesArr[i]["id"]) {
                recipe = recipesArr[i];
            }
        }
        if (recipe !== undefined) {
            res.render('recipe', recipe);
        } else {
            // We will res.send for now..
            res.send("Recipe NOT Found");
        }
    })
})

// Display the form for editing a recipe
app.get('/recipes/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj["recipes"];
        let data; // {}
        for (let i = 0; i < recipesArr.length; i++) {
            if (id === recipesArr[i]["id"]) {
                data = recipesArr[i]
            }
        }
        // console.log(data);
        res.render('edit', data);
    })
})

// Update a recipe
app.put('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj["recipes"];
        let selectedRecipe;
        for (let i = 0; i < recipesArr.length; i++) {
            if (id === recipesArr[i]["id"]) {
                selectedRecipe = recipesArr[i];
            }
        }
        // req.body = {}
        // We can't do something like selectedRecipe = req.body as we want to keep the "id" property
        selectedRecipe["title"] = req.body["title"];
        selectedRecipe["ingredients"] = req.body["ingredients"];
        selectedRecipe["instructions"] = req.body["instructions"];
        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log("ERROR Encountered");
            }
        })
        const redirectLink = `/recipes/${id}`;
        res.redirect(redirectLink);
    })
})

// Remove a recipe
app.delete('/recipes/:id', (req, res) => {
    // Arr starts counting at 0..
    const id = parseInt(req.params.id) - 1;
    jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj["recipes"];
        // I definitely need this arr.splice(index, 1)
        recipesArr.splice(id ,1);
        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log("ERROR Encountered");
            }
        })
        // We should render a page that shows all recipe
        // but we will do this for now..
        res.send("Deleted");
    })
})



app.listen(3000, () => console.log('Server Started?'));