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
			let sortby = req.query.sortby;
			if (sortby) {
				switch (sortby) {
					case "id":
						recipes.sort(sortByID);
						break;
					case "title":
						recipes.sort(sortByTitle);
						break;
					case "date":
						recipes.sort(sortByDate);
						break;
				}
			}
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
				"img": newRecipe.img,
				"dateAdded": new Date(),
				"dateEdited": ""
			};
			obj.lastKey = lastKey;
			obj.recipes.push(recipeObject);
			jsonfile.writeFile(file, obj, (err) => {
				if (err){
					console.log(err);
				}
				else {
					res.redirect('/recipes/' + recipeObject.id);
				}
			})
		}
	})
};

const showRecipeDetails = (req,res) => {
	let id = parseInt(req.params.id);
	jsonfile.readFile(file,(err,obj)=> {
		if (err) {
			console.log(err);
		}
		else {
			let recipes = obj.recipes;
			let recipe = recipes.find(recipe => recipe.id === id); //get recipe object from recipes array with the unique id
			let data = {
				'recipe' : recipe,
				'dateAdded' : new Date(recipe.dateAdded),
				'dateEdited' : new Date(recipe.dateEdited)
			};
			if (data.recipe !== undefined) {
				res.render('recipe', data);
			}
			else {
				res.send(`<h2>Recipe Not Found</h2><a href="/recipes/">View all Recipes</a>`);
			}
		}
	})
};

const editRecipeForm = (req,res) => {
	let id = parseInt(req.params.id);
	jsonfile.readFile(file,(err,obj)=> {
		if (err) {
			console.log(err);
		}
		else {
			let recipes = obj.recipes;
			let recipe = recipes.find(recipe => recipe.id === id); //get recipe object from recipes array with the unique id
			let data = {
				recipe : recipe
			};
			res.render('edit-form',data)
		}
	});
};

const updateRecipe = (req,res) => {
	let id = parseInt(req.params.id);
	jsonfile.readFile(file,(err,obj)=> {
		if (err) {
			console.log(err);
		}
		else {
			let recipes = obj.recipes;
			let recipe = recipes.find(recipe => recipe.id === id); //get recipe object from recipes array with the unique id
			recipe.title = req.body.title;
			recipe.ingredients = req.body.ingredients;
			recipe.instructions = req.body.instructions;
			recipe.img = req.body.img;
			recipe.dateEdited= new Date();
			jsonfile.writeFile(file, obj, (err) => {
				if (err) {
					console.log(err);
				} else {
					res.redirect('/recipes/'+id);
				}
			});
		}
	});
};
const deleteRecipe = (req,res) => {
	let id = parseInt(req.params.id);
	jsonfile.readFile(file,(err,obj)=> {
		if (err) {
			console.log(err);
		}
		else {
			let recipes = obj.recipes;
			let recipeIndex = recipes.findIndex(recipe => recipe.id === id); //get recipe object index from recipes array with the unique id
			recipes.splice(recipeIndex,1);
			jsonfile.writeFile(file, obj, (err) => {
				if (err) {
					console.log(err);
				} else {
					res.redirect('/recipes/');

				}
			})
		}
	});
};

/* Sorting Functions */

//Sort alphabetically
function sortByTitle(a, b) {
	// Use toUpperCase() to ignore character casing
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();

	return titleA>titleB ? 1 : titleA<titleB ? -1 : 0;
}

//Sort by ID
function sortByID(a, b) {
	const indexA = a.id;
	const indexB = b.id;

	return indexA - indexB;
}

function sortByDate(a,b) {
	const dateA = new Date(a.dateAdded);
	const dateB = new Date(b.dateAdded);
	return dateA>dateB ? -1 : dateA<dateB ? 1 : 0;
}

/* Routing */
app.get('/recipes', showRecipes);
app.get('/recipes/new', addRecipeForm);
app.post('/recipes', addRecipe);
app.get('/recipes/:id', showRecipeDetails);
app.get('/recipes/:id/edit', editRecipeForm);
app.put('/recipes/:id', updateRecipe);
app.delete('/recipes/:id', deleteRecipe);



/* Listen to requests on port 3000 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));