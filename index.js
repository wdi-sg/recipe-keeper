//boilerplate setup for modules
const jsonfile = require('jsonfile');
const file = 'recipes.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const reactEngine = require('express-react-views').createEngine();
const PORT = 3000;

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


app.get('/recipes', (request,response) => {
	jsonfile.readFile(file, (err,obj)=>{
		if (err) { console.err(err) };
		response.render('mainpage', obj)
	})
});

app.get('/', (request,response) => {
	jsonfile.readFile(file, (err,obj)=>{
		if (err) { console.err(err) };
		response.redirect('/recipes');
	})
});

app.get('/recipes/new', (request, response) => {
	response.render('recipeNew');
});


app.listen(PORT);