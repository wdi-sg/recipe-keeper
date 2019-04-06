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

app.post('/recipes/new', (req,res) =>{
	jsonfile.read(file, (err,obj) =>{
		let recipeList;
		res.send('recipes', recipeList);
	})
})

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));






