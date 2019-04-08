//-----------------------------------------------------//
const jsonfile = require('jsonfile');
const FILE = 'recipes.json';

const express = require('express');

const app = express();

app.use(express.static('public'));

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

//-----------------------HOME--------------------------//

app.get('/recipes', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        response.render('home', obj);

    });
})

//-----------------------NEW--------------------------//

app.get('/recipes/new', (request, response) => {

    response.render('new');
});

app.post('/recipes', (request, response) => {

     jsonfile.readFile('recipes.json', (err, obj) => {

        if (request.body.name.length < 5) {
            response.send("oops");
        } else {
            let newRecipe = {};
        newRecipe.id = obj["recipes"].length +1;
        newRecipe.name = request.body.name;
        newRecipe.instructions = request.body.instructions;
        newRecipe.ingredients = request.body.ingredients;
        newRecipe.author = request.body.author;
        newRecipe.img = request.body.img;
        newRecipe.preparation_time = request.body.preparation_time;
        newRecipe.created_at = new Date();

            // Date + time formatting
            const options = {month: 'long'};
            let month = new Date().toLocaleDateString("en-GB", options);
            const timeOptions = {hour: 'numeric', minute: 'numeric'};
            let time = new Date().toLocaleTimeString("en-GB", timeOptions);

        newRecipe.created_at_display = new Date().getDate() +" "+ month +" "+ new Date().getFullYear() + " at " + time;

        obj["recipes"].push(newRecipe);
        console.log(time);

        jsonfile.writeFile(FILE, obj, (err) => {
            console.log(err)

            response.render('home', obj);
        })
        }


    })
})

//----------------INDIVIDUAL RECIPES-------------------//

app.get('/recipes/:id', (request, response) => {

    let recipeIndex = parseInt(request.params.id);

     jsonfile.readFile(FILE, (err, obj) => {

        recipeIndex = obj["recipes"].findIndex(x => x.id === recipeIndex);
        response.render('recipe', obj["recipes"][recipeIndex]);

    })
})

//-------------------EDIT RECIPES----------------------//

app.get('/recipes/:id/edit', (request, response) => {

    let recipeIndex = parseInt(request.params.id);

     jsonfile.readFile(FILE, (err, obj) => {

        recipeIndex = obj["recipes"].findIndex(x => x.id === recipeIndex);

        response.render('edit', obj["recipes"][recipeIndex]);

    })

})

app.put('/recipes/:id', (request, response) => {

    let recipeIndex = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        recipeIndex = obj["recipes"].findIndex(x => x.id === recipeIndex);

        let recipeObj = obj["recipes"][recipeIndex];
        recipeObj.name = request.body.name;
        recipeObj.img = request.body.img;
        recipeObj.ingredients = request.body.ingredients;
        recipeObj.instructions = request.body.instructions;
        recipeObj.preparation_time = request.body.preparation_time;
        recipeObj.author = request.body.author;


        jsonfile.writeFile(FILE, obj, (err) => {
            console.log(err);
        });

        response.render('recipe', obj["recipes"][recipeIndex]);

    })

})

//------------------DELETE RECIPES---------------------//

app.get('/recipes/:id/delete', (request, response) => {

    let recipeIndex = parseInt(request.params.id);

     jsonfile.readFile(FILE, (err, obj) => {

        recipeIndex = obj["recipes"].findIndex(x => x.id === recipeIndex);

        response.render('delete', obj["recipes"][recipeIndex]);

    })

})

app.delete('/recipes/:id', (request, response) => {

    let recipeIndex = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {

        recipeIndex = obj["recipes"].findIndex(x => x.id === recipeIndex);

        obj["recipes"].splice(recipeIndex, 1);


        jsonfile.writeFile(FILE, obj, (err) => {
            console.log(err);
        });

        response.render('home', obj);

    })

})



//-----------------------------------------------------//

const port = 3000;
app.listen(port);
console.log("~~~~Tuned into port " +port+"~~~~");