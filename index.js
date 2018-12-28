const jsonfile = require('jsonfile');
const file = 'recipes.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const newRecipes = '/views/new-recipes'

app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.get('/recipes/new', (request, response) => {
	response.render('newRecipe');
});

app.get('/recipes', (request,response) => {
	jsonfile.readFile(file, (err,obj)=>{
		err ? console.error(err) : 0;
		response.render('recipes', obj)
	})
});

app.post('/recipes/new', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		request.body.id = obj.recipes.length + 1;
		obj.recipes.push(request.body);
		jsonfile.writeFile(file, obj, err => {
			err ? console.error(err) : 0;
			response.send("written!");
		});
	});
});

app.get('/recipes/:id', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		response.render('new-recipe', getRecipe(request.params.id, obj));
	});
});

function getRecipe(id, obj){
	return obj.recipes.find(recipe => {
		return recipe.id === parseInt(id);
	});
}

app.listen(3000);