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

app.get('/', (req, res) => {
    // home page
    jsonfile.readFile(file, (err, obj) => {
        console.log("Loading home page")
        // put render here
        res.render('home', obj);
    })

});

app.get('/recipes/', (req, res) => {
    //
    jsonfile.readFile(file, (err, obj) => {
        console.log("reading jsonfile")
        // put render here
        res.render('recipes', obj);
    })

});

app.get('/recipes/new', (req, res) => {

    jsonfile.readFile(file, (err, obj) => {
        console.log("Entering new recipe");

        console.log("Posting from form");
        res.render('newrecipe');
    })

});

app.post('/recipes', function (request, response) {

    //debug code (output request body)
    console.log("Listing Recipes");

    jsonfile.readFile(file, (err, obj) => {
        // console.log("Entering new recipe");
        // console.log("Posting from form");
        // res.render('newrecipe');
        let newrecipe = request.body;
        let recipeList = obj.recipes;
        recipeList.push(newrecipe);
        obj.recipes = recipeList;

        // save the request body
        jsonfile.writeFile(file, obj, (err) => {
            console.error(err)

            // now look inside your json file
            response.render('recipes', obj);
        });
    })

});


app.listen(3000, () => {
    console.log('listening on port 3000');
})