/**
 * ===================================
 * Configurations and Global Variables
 * ===================================
 */

// express module -handle http request
const express = require('express');
const app = express();

// serve static files in public directory
app.use(express.static(__dirname + '/public'));


// jsonfile module - read/write json
const jsonfile = require('jsonfile');
const recipesData = "recipes.json"
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// method override - module override http put/delete
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// react-views module
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

/**
 * ===================================
 * Functions
 * ===================================
 */

 // function to get date
function logDate(){
    var now = new Date();
    var m = now.getMonth();
    m = m + 1;
    var d = now.getDate();
    var y = now.getFullYear();

    var loggedDate = m + "/" + d + "/" + y;
    return loggedDate;
};




/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/', (req, res) => {
    //res.redirect('/recipes');
    res.redirect(301, '/recipes/');
});

app.get('/recipes/', (req, res) => {
    jsonfile.readFile(recipesData, (err, obj) => {
        console.log("all them recipes");

        // let recipeId = request.params.id;
        const alldata = {
            requestType : 1,
            recipeList : obj.recipe
        }
        const oneData = {
            requestType : 1,
            recipe : obj.recipe[1]
        }

        res.render('home', alldata);
        if (err) console.error(err);
    });
});

app.get('/recipes/new', (req, res) => {
    jsonfile.readFile(recipesData, (err, obj) => {
        console.log("all them recipes");

        // let recipeId = request.params.id;
        const alldata = {
            requestType : 2,
            recipeList : obj.recipe
        }
        const oneData = {
            requestType : 2,
            recipe : obj.recipe[1]
        }

        res.render('home', alldata);
        if (err) console.error(err);
    });
});

app.post('/recipes', (req, res) => {
    res.render('home');
});

app.get('/recipes/:id', (req, res) => {
    res.render('single');
});

app.get('/recipes/:id/edit', (req, res) => {
    res.render('edit');
});

app.put('/recipes/:id', (req, res) => {
    res.render('update');
});

app.delete('/recipes/:id', (req, res) => {
    res.render('delete');
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = 3000;
app.listen(PORT, () => console.log('\n~~~ Lets Get it ~~~'));