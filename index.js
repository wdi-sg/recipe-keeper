/* Modules and Configurations */
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

/* Functions */
const showRecipes = (req,res) => {
	jsonfile.readFile(file, (err,obj)=> {
		if (err){
			console.log(err);
		}
		else {
			let recipes = obj.recipes;
			let data = {
				recipes: recipes
			};
			res.render('home',data)
		}
	});
};
const addRecipeForm = (req,res) => {
	res.render('add-form')
};
const addRecipe = (req,res) => {
	let newRecipe = req.body;
	jsonfile.readFile(file, (err,obj)=> {
		if (err) {
			console.log(err);
		} else {
			let lastKey = obj.lastKey + 1;
			let recipeObject = {
				"id": lastKey,
				"title": newRecipe.title,
				"ingredients": newRecipe.ingredients,
				"instructions": newRecipe.instructions,
				"img": newRecipe.img
			};
			obj.lastKey = lastKey;
			obj.recipes.push(recipeObject);
			jsonfile.writeFile(file, obj, (err) => {
				res.redirect('/recipes/' + recipeObject.id);
			})
		}
	})
};

const showRecipeDetails = (req,res) => {
	let id = parseInt(req.params.id);
	let content = "";
	jsonfile.readFile(file,(err,obj)=> {
		if (err) {
			console.log(err);
		}
		else {
			let recipes = obj.recipes;
			let data = {};
			for (let recipe of recipes) {
				if (id === recipe.id) {
					data = {
						'recipe' : recipe,
						'index' : recipes.indexOf(recipes)
					};
				}
			}
			if (data.recipe !== undefined) {
				res.render('recipe', data);
			}
			else {
				res.send(`<h2>Recipe Not Found</h2><a href="/recipes/">View all Recipes</a>`);
			}
		}
	})
};

/* Routing */
app.get('/recipes', showRecipes);
app.get('/recipes/new', addRecipeForm);
app.post('/recipes', addRecipe);
app.get('/recipes/:id', showRecipeDetails);
// app.get('/recipes/:id/edit', editRecipeForm);
// app.put('/recipes/:id', updateRecipe);
// app.delete('/recipes/:id', removeRecipe);


// /recipes/	GET	index	See all the recipes
// /recipes/new	GET	new	Display the form for a single recipe
// /recipes	POST	create	Create a new recipe
// /recipes/:id	GET	show	See a single recipe
// /recipes/:id/edit	GET	edit	Display the form for editing a single recipe
// /recipes/:id	PATCH/PUT	update	Update a recipe
// /recipes/:id	DELETE	destroy	Remove a recipe


/* Listen to requests on port 3000 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));