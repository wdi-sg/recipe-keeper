//Set up and configuration

const jsonfile = require('jsonfile');
const file = 'data.json';

let data;
jsonfile.readFile(file, (err, obj) => {
	console.log(err);
	data = obj;
})

const express = require('express');
const app = express();

app.use(express.static('public'));
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

//Functions 
var getIndexOfRecipeFromReqId = function (reqId) {
	for (i=0; i<data.recipes.length; i++) {
		console.log("32:"+i);
		if (data.recipes[i].id === reqId) {
			return i;
		}
	}
}

var makeIdSequential = function () {
	let i = 1;
	data.recipes.forEach(item => {
		item.id = i;
		i++;
	});
}


//Res handlers
const displayFormForNewRecipe = function (req, res) {
	res.render("newRecipe");
}

const addNewRecipe = function (req, res) {

	const newRecipeInput = req.body;
	newRecipeInputValues = Object.values(newRecipeInput);
	numberOfInputs = newRecipeInputValues.length;

	const newRecipeTitle = newRecipeInputValues.shift();
	const newRecipeInstruction = newRecipeInputValues.pop();

	const newRecipeIngredients = {};	
	for (i=0; i<newRecipeInputValues.length; i+=2) {
	newRecipeIngredients[newRecipeInputValues[i]] = newRecipeInputValues[i+1];
	}

	const newRecipeObject = {};
	newRecipeObject.id = data.recipes.length + 1;
	newRecipeObject["Recipe Title"] = newRecipeTitle;
	newRecipeObject.Ingredients = newRecipeIngredients;
	newRecipeObject.Instructions = newRecipeInstruction;

	data.recipes.push(newRecipeObject);
	console.log("73");
	console.log(newRecipeObject);
	res.send("New recipe added!");
}

const listAllRecipe = function (req, res) {
	console.log(data);
    res.send("Hello");
}

const seeSingleRecipe = function (req, res) {
	const reqId = parseInt(req.params.id);
	console.log("86: "+reqId);

	if (reqId > data.recipes.length) {
		res.send(`No recipe found. Please enter id from 1 to ${data.recipes.length}`)
	} else {
		const index = getIndexOfRecipeFromReqId(reqId);
		const recipeObject = { object: data.recipes[index]};
		console.log("93");
		console.log(recipeObject);
		res.render("seeRecipe", recipeObject)
	}

}

const deleteRecipe = function (req, res) {
	console.log("101");
	const reqId = parseInt(req.params.id);
	console.log("102"+reqId);

	const index = getIndexOfRecipeFromReqId(reqId);
	data.recipes.splice(index,1);
	makeIdSequential(data);
	res.send("Recipe deleted!");
	console.log("109");
	console.log(data);
}


//Routes
app.get("/recipes/new", displayFormForNewRecipe)
app.post("/recipes", addNewRecipe);
app.get("/recipes", listAllRecipe);
app.get("/recipes/:id", seeSingleRecipe);
app.delete("/recipes/:id", deleteRecipe);

const port = 3000;
app.listen(port, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));