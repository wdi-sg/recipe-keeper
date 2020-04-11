const jsonfile = require('jsonfile');
const file = 'ingredient.json';
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

//########## Add Recipe Function ############
const saveRecipe = (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const recipe = obj.recipes;
        recipe.push(req.body);



    jsonfile.writeFile(file, obj, (err) => {
        const link = '/recipe/' + recipe.length;
        res.redirect(link);
    })

    })
}

//############# Routes ##############
//###################################
//###################################
app.get('/', (req, res) => {
    res.redirect('/recipe');
})

//############ Display full recipe list ##############
app.get('/recipe', (req, res) => {

    jsonfile.readFile(file, (err, obj) => {
        const recipe = obj.recipes;
        const data = {
                recipeObj: recipe
        }

    res.render('home', data);
  })
})

app.get('/recipe/add', (req, res) => {
    res.render('add');
})

//############## Displays individual recipe item #################
app.get('/recipe/:id', (req, res) => {

    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id);
        const recipe = obj.recipes;
        const data = {
            num: index,
            title: recipe[index - 1].title,
            ingredients: recipe[index - 1].ingredients,
            instructions: recipe[index - 1].instructions
        }
        res.render('show', data);
    })
})

app.get('/recipe/:id/edit', (req, res) => {

    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id) - 1;
        const recipe = obj.recipes;
        const data = {
            id: index + 1,
            title: recipe[index].title,
            ingredients: obj.recipes[index].ingredients,
            instructions: obj.recipes[index].instructions
        }
        res.render('edit', data);
    })
})

app.post('/recipe', saveRecipe);

app.put('/recipe/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id) - 1;
        obj.recipes[index] = req.body;

        jsonfile.writeFile(file, obj, (err) => {
            const link = '/recipe/' + (index + 1);
            res.redirect(link);
        })


    })
})

app.delete('/recipe/:id', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const index = parseInt(req.params.id) - 1;
        obj.recipes.splice(index, 1);

        jsonfile.writeFile(file, obj, (err) => {
            res.redirect('/recipe');
        })
    })
})





app.listen(4000, () => {
    console.log(new Date().toISOString() + " - App is running on port 4000.");
})