
/**
===================================
    Configurations and set up
===================================
**/

// Init express app
const express = require('express');
const app = express();

// Init jsonfile
const jsonfile = require('jsonfile');
const file = 'data.json';

// Tell app to use the module
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+'/public/')); // This is to allow the render to access CSS

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// This line sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// This tells express where to look for the view files
app.set('views', __dirname + '/views');

// This tells express where to look for the view files
app.set('view engine', 'jsx');


/**
===================================
    Routes and End-points
===================================
**/


// To redirect users to recipes page
app.get('/', (request,response) => {

    response.redirect('/recipes');

 });

// To display all the recipes
app.get('/recipes', (request, response) => {

    jsonfile.readFile(file, (err,obj) => {

        let data = obj;

        if (err) {
            console.log('error reading file');
            console.log(err);

        } else {

            response.render('index', data)
        }
    });

});

// To create a new recipe
app.get('/recipes/new', (request, response) => {

    jsonfile.readFile(file, (err,obj) => {

        const data = {

            arrayLength: obj.recipes.length + 1

        }

        if (err){
          console.log("error reading file");
          console.log(err);
        }

        else {
            response.render('form', data)
        }

    });
});

// To write a new recipe into data.json file
app.post('/recipes', (request,response) => {

    let recipe = request.body;
    console.log(recipe);

    jsonfile.readFile(file, (err, obj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }

        if (recipe.id < obj.recipes.length) {
            response.status(406).send(`Sorry but that ID is incorrect! Please use ID: ${obj.recipe.length + 1}`);

        } else {
            obj.recipes.push(recipe);

            jsonfile.writeFile(file, obj, (err) => {

                if( err ) {
                    console.log("error writing file");
                    console.log(err)
                    response.status(503).send("no!");

                } else {
                    response.redirect('/recipes');
                }
            });
        }
  });
});





/**
===================================
    Listen to requests on port 3000
===================================
**/
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

//