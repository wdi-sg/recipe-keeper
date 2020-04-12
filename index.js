// Boiler plate activation codes

const express = require('express');
const app = express();

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const jsonfile = require('jsonfile');

app.use(express.static(__dirname+'/public/'));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

const file = 'data.json'


/////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////


// Single recipe response
app.get('/singlerecipe/:id', (request,response) => {
    const id = request.params.id;

    jsonfile.readFile(file, (err,obj) => {
        // Get recipe details of single item
        const singleRecipe = obj.recipes[id];

        console.log(singleRecipe);

        const data = { "data" : [{"singleRecipe" : singleRecipe}, {"id" : id}]}
        response.render('singlerecipe', data);

        // response.send(singleRecipe);
    })

})

// Create Recipe response
app.post('/createarecipe', (request, response) => {

    const singleRecipe = request.body;

    jsonfile.readFile(file, (err, obj) => {
        // Add new recipe to recipe list
        obj.recipes.push(singleRecipe);

        // Get id number of recipe
        id = obj.recipes.length - 1;

        jsonfile.writeFile(file, obj, (err) => {
            console.log('writing file')
        })

        response.redirect(`/singlerecipe/${id}`)

    })
})


// Show edit recipe page
app.get('/editrecipe/:id', (request, response) => {
    const id = request.params.id

    jsonfile.readFile(file, (err, obj) => {
        // Get data of recipe to edit
        const singleRecipe = obj.recipes[id];
        const data = { "data" : [{"singleRecipe" : singleRecipe}, {"id" : id}]}

        response.render('editrecipe', data);
    })

})

// Edit Recipe response
app.put('/editarecipe/:id', (request, response) => {
    const id = request.params.id;

    const singleRecipe = request.body;

    console.log(singleRecipe);

    jsonfile.readFile(file, (err, obj) => {
        if (singleRecipe.img === ""){
            singleRecipe.img = obj.recipes[id].img;
        }

        // edit recipe by changing old recipe
        obj.recipes[id] = singleRecipe;

        jsonfile.writeFile(file, obj, (err) => {
        })

        // Show user single recipe page of new recipe after creating the recipe
        response.redirect(`/singlerecipe/${id}`);

    })
})


// Delete response
app.delete("/deleterecipe/:id", (request, response) => {
    const id = request.params.id;

    jsonfile.readFile(file, (err, obj) => {
        obj.recipes.splice(id, 1);

        jsonfile.writeFile(file, obj, (err) => {

        })
        response.redirect('/');
    })
});



// Home page response
app.get('/', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        const recipeArray = obj.recipes;

        // Get all recipe titles
        let recipeTitleArray = [];

        for (var i = 0; i < recipeArray.length; i++) {
            recipeTitleArray.push(recipeArray[i].title);
        }

        const data = {"recipeTitleArray" : recipeTitleArray};

        response.render("home", data);
    })
})

app.listen(3000, () => console.log("Listening to everything..."))