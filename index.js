/* Basic boilerplate for all the npm packages installed */
const jsonfile = require('jsonfile');

const file = 'data.json';

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

/* Routes that need to be created --
URL	HTTP Verb	Action	Purpose
/recipes/	GET	index	See all the recipes
/recipes/new	GET	new	Display the form for a single recipe
/recipes	POST	create	Create a new recipe
/recipes/:id	GET	show	See a single recipe
/recipes/:id/edit	GET	edit	Display the form for editing a single recipe
/recipes/:id	PATCH/PUT	update	Update a recipe
/recipes/:id	DELETE	destroy	Remove a recipe
*/

// Test Route ===
app.get('/hello', function(req, res) {
	res.render('hello');
});

app.get('/recipes/', function(req, res) {

	jsonfile.readFile(file, (err, obj) => {
		console.log(obj);
		let allRecipes = obj;
		res.render('home', allRecipes);
	})
})

app.get('/recipes/new', function(req, res) {
	res.render('new');
});

app.post('/recipes', function(request, response) {

    jsonfile.readFile(file, (err, obj) => {
        console.log(request.body);
        let newRecipe = request.body;

        obj.recipes.push(newRecipe);

       jsonfile.writeFile(file, obj, (err) => {
        response.send("Added new recipe.")

    });


   });

})


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));






