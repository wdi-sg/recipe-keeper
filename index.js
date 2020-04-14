/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
const express = require('express');
const jsonfile = require('jsonfile');
const app = express();
const file = 'recipes.json';

//css
app.use(express.static(__dirname+'/public/'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// initialization to use method
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/**
 * ===================================
 * routes involving React.js
 * ===================================
 */

//index list of all recipes
app.get('/recipes/', (req, res) => {
	jsonfile.readFile(file, (err, obj) => {
		const recipe_lst = obj.recipes;
		data = {recipe_lst: recipe_lst};
		res.render('index', data);
	})
})

//display form to create a new recipe
app.get('/recipes/new', (req, res) => {
 	res.render('new');
 })

//handles recipe creation post request; writes recipe to existing json file
app.post('/recipes', (req, res) => {
	console.log(req.body)
	jsonfile.readFile(file, (err, obj) => {
		const recipe_lst = obj.recipes;
		const new_recipe = {};
		new_recipe.title = req.body.title;
		new_recipe.ingredients = req.body.ingredients;
		new_recipe.instructions = req.body.instructions;
		recipe_lst.push(new_recipe);

		jsonfile.writeFile(file, obj, (err) => {
			err ? console.log(err): "";
			res.send(obj);
		})	
	})
})

//show a single recipe 
app.get('/recipes/:id', (req, res) => {
	jsonfile.readFile(file, (err, obj) => {
		const index = parseInt(req.params.id);
		const recipe = obj.recipes[index-1];
		const data = {index: index, recipe: recipe};
		res.render('show', data);
	})
})

//display form to edit a recipe
app.get('/recipes/:id/edit', (req, res) => {
	const index = parseInt(req.params.id);
	const data = {index: index}
	res.render('edit', data);
})

//handles recipe changes put request; writes recipe changes to existing json file
app.put('/recipes/:id', (req, res) => {
	jsonfile.readFile(file, (err, obj) => {
		const index = parseInt(req.params.id);
		const recipe = obj.recipes[index-1];
		recipe.title = req.body.new_title;
		recipe.ingredients = req.body.new_ingredients;
		recipe.instructions = req.body.new_instructions;

		jsonfile.writeFile(file, obj, (err) => {
			err ? console.log(err): "";
			res.redirect(`/recipes/${index}`)
		})
	})
})



//handles recipe changes delete request; deletes recipes from existing json file
app.delete('/recipes/:id', (req, res) => {
	console.log(req.body)
	jsonfile.readFile(file, (err, obj) => {
		const index = parseInt(req.body.id);
		const recipe_lst = obj.recipes;
		recipe_lst.splice(index-1, 1);

		jsonfile.writeFile(file, obj, (err) => {
			err ? console.log(err): "";
			res.redirect(`/recipes/`);
		})
	})
})

app.listen(3000, () => {
	console.log('listening on port 3000');
})