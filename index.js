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
    //
    jsonfile.readFile(file, (err, obj) => {
        console.log("Entering new recipe");
        console.log("New recipe id: ", Number(obj.id.length));

        let i;
        for (i = 0; i <= obj.id.length; i++) {
            if (i == obj.id.length) {
                return i;
            }
        }
        const newRecipe = obj.id.push(re);

        // console.log("Posting from form");
        // res.render('newrecipe', obj.id[i]);
    })

});

app.post('/recipes', function (request, response) {

    //debug code (output request body)
    console.log("Listing Recipes");


    // save the request body
    jsonfile.writeFile(file, request.body, (err) => {
        console.error(err)

        // now look inside your json file
        response.render(request.body);
    });
});






app.listen(3000);