const jsonfile = require('jsonfile');
const file = 'recipes.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();

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
	response.render('recipeForm');
});

app.get('/recipes', (request,response) => {
	jsonfile.readFile(file, (err,obj)=>{
		err ? console.error(err) : 0;
		response.render('recipes', obj)
	})
});

app.get('/', (request,response) => {
	jsonfile.readFile(file, (err,obj)=>{
		err ? console.error(err) : 0;
		response.redirect('/recipes');
	})
});

app.post('/recipes/new', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		request.body.id = obj.recipes[obj.recipes.length -1].id + 1;
		obj.recipes.push(request.body);
		jsonfile.writeFile(file, obj, err => {
			err ? console.error(err) : 0;
			response.redirect('/recipes/');
		});
	});
});

app.put('/recipes/:id', (request, response) => {
	jsonfile.readFile(file, (err,obj) => {
		err ? console.error(err) : 0;
		let recipeToEdit = getRecipe(request.params.id, obj);
		updateRecipe(request.body, recipeToEdit);
		jsonfile.writeFile(file, obj, err => {
			err ? console.error(err) : 0;
			response.redirect('/recipes/' + request.params.id);
		})
	});
});

app.delete('/recipes/:id', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		obj.recipes.splice(obj.recipes.indexOf(getRecipe(request.params.id, obj)), 1);
		jsonfile.writeFile(file, obj, err => {
			err ? console.error(err) : 0;
			response.render('recipes', obj);
		})
	})
});

app.get('/recipes/:id', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		response.render('recipe', getRecipe(request.params.id, obj));
	});
});

app.get('/recipes/:id/edit', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		response.render('recipeForm', getRecipe(request.params.id, obj));
	});
});

function updateRecipe(obj, recipe){
	Object.keys(recipe).forEach(key => {
		key === "id" ? 0 : recipe[key] = obj[key];
	});
}

function getRecipe(id, obj){
	return obj.recipes.find(recipe => {
		return recipe.id === parseInt(id);
	});
}

app.listen(3000);