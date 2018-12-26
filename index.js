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
	response.render('new-recipe');
})

app.get('/recipes', (request,response) => {
	jsonfile.readFile(file, (err,obj)=>{
		response.send('recipes shown here');
	})
})

app.post('/recipes', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		err ? console.error(err) : 0;
		obj.recipes.push(request.body);
		jsonfile.writeFile(file, obj, err => {
			err ? console.error(err) : 0;
			response.send("written!");
		});
	});
})

app.listen(3000);