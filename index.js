//////////////////////////////
//    NODE MODULES         //
////////////////////////////
const jsonfile = require('jsonfile');
const file = 'data.json';
const ingredients = 'ingredient.json';

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


//////////////////////////////
//      NEW RECIPE         //
////////////////////////////

app.get('/recipes/new', (request, response) => {
    response.render('form')
})

app.post('/recipes', (request, response) => {
    const newRecipe = request.body;

    const data = {
        title: newRecipe.title,
        ingredients: newRecipe.ingredients,
        instructions: newRecipe.instructions
    }

    jsonfile.readFile(file, (err, obj)=> {

        let recipe = obj.recipe;
        recipe.push(data);

        //Reassign ID when a recipe is removed
        for (let i = 0; i < recipe.length; i++) {
            recipe[i].id = i+1;
        }

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
        })
    })
    response.render('show', data)
})

//////////////////////////////
//      EDIT RECIPE        //
////////////////////////////

app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        let recipe = obj.recipe;
        let id = request.params.id;

        const data = {
            id: id,
            title: recipe[id - 1].title,
            ingredients: recipe[id - 1].ingredients,
            instructions: recipe[id - 1].instructions
        }

    response.render('edit', data)
    })
})

app.put('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj) => {

        let recipe = obj.recipe;
        let id = parseInt(request.params.id);

        recipe[id - 1].title = request.body.title;
        recipe[id - 1].ingredients = request.body.ingredients;
        recipe[id - 1].instructions = request.body.instructions;

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err)
        })

    const link = "/recipes/" + id;
    response.redirect(link)
    });
})


//////////////////////////////
//      DELETE RECIPE      //
////////////////////////////

app.delete('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj) => {

        let recipe = obj.recipe;
        let id = parseInt(request.params.id);

        recipe.splice((id - 1), 1);

        for (let i = 0; i < recipe.length; i++) {
            recipe[i].id = i+1;
        }

        jsonfile.writeFile(file, obj, (err) => {
            console.log(err);
            response.redirect('/recipes/')
        })
    });
})


//////////////////////////////
//      SHOW RECIPE        //
////////////////////////////

app.get('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        let recipe = obj.recipe;
        let id = request.params.id;

        const data = {
            id: id,
            title: recipe[id - 1].title,
            ingredients: recipe[id - 1].ingredients,
            instructions: recipe[id - 1].instructions
        }

    response.render('individual', data)
    })
})


//////////////////////////////
//      INDEX PAGE         //
////////////////////////////

app.get('/recipes/', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        let recipe = obj.recipe;

        const data = {
            recipe: recipe
        }

    response.render('index', data)
    })
})

//////////////////////////////
//   HANDLE ERROR PATHS    //
////////////////////////////
app.get('/*', (request, response)=> {
    response.status(404).send('Page not found.')
});


app.listen(3000, () => console.log('🔥🔥🔥 Getting the stove fired up to 3000 degrees 🔥🔥🔥'));