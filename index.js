const jsonfile = require('jsonfile');
const file = 'recipe.json';
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
//------------------------------------------------------end of init stuff---------------------------------------------------------\\

//get for getting adding recipe page
app.get('/recipes/new', (request, response) => {
    response.render('add')
} )

//get to render form for editing
app.get('/recipes/:index/edit', (request, response) => {
    jsonfile.readFile(file, (err,obj) => {
        let index = parseInt(request.params.index);
        const data = obj.recipes[index-1];
        data.index = index;
        response.render('edit', data)
    })
})

//get for getting the list of recipes available.
app.get('/recipes/list', (request, response) => {
    jsonfile.readFile(file, (err,obj) => {
        const data = obj;
        response.render('list', data);
    })
})


//get for displaying a singular recipe
app.get('/recipes/:index', (request, response) => {
    jsonfile.readFile(file, (err,obj) => {
        let index = parseInt(request.params.index);
        const data = obj.recipes[index - 1];
        data.index = index;
        response.render('recipe', data);
    })
})

app.put('/recipes/:index', (request,response) => {
    jsonfile.readFile(file, (err,obj) => {
        let index = parseInt(request.params.index)-1;
        const recipe = request.body;
        obj.recipes[index] = recipe;
        jsonfile.writeFile(file, obj, (err) => {
            response.send("Recipe Edited")
        })
    })
})

app.delete('/recipes/:index', (request,response) => {
    jsonfile.readFile(file, (err,obj) => {
        let index = parseInt(request.params.index)-1;
        obj.recipes.splice(index, 1)
        jsonfile.writeFile(file, obj, (err) => {
            response.send("Recipe Deleted")
        })
    })
})









app.get('*', (request, response) => {
    response.render('home')
})






//post for adding recipes to json
app.post('*', (request, response) => {
    const recipe = request.body;
    jsonfile.readFile(file, (err,obj) => {
        obj.recipes.push(recipe);
        jsonfile.writeFile(file, obj, (err) => {
            response.send("Recipe Added");
        })
    })
})


//listen stuff\\------------------------------------------------------------------------------------------------------------------
app.listen(3000, () => console.log("Recipe book is open"))