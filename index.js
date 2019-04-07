//Set up and configuration
const jsonfile = require('jsonfile');
const file = 'data.json';
let data;

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
const readDatabase = function () {
	jsonfile.readFile(file, (err, obj) => {
		console.log(err);
		data = obj;
	})
}

const updateDatabase = function (updatedDataObj) {
	jsonfile.readFile(file, (err, obj) => {
		console.log("Error while reading file");
		console.log(err);

		obj = updatedDataObj;

		jsonfile.writeFile(file, obj, (err) => {
			console.log("Error while writing file");
			console.log(err);
		})
	})
	
}

const getIndexOfRecipeFromReqId = function (reqId) {
	for (i=0; i<data.recipes.length; i++) {
		if (data.recipes[i].id === reqId) {
			return i;
		}
	}
}

const makeIdSequential = function () {
	let i = 1;
	data.recipes.forEach(item => {
		item.id = i;
		i++;
	});
}

const checkEmpty = function (array) {
	return array.every(item => {
		item.length>0;
	});	
}


//Res handlers
const displayFormForNewRecipe = function (req, res) {
	res.render("newRecipe");
}

const addNewRecipe = function (req, res) {

	const newRecipeInput = req.body;
	newRecipeInputValues = Object.values(newRecipeInput);

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
	updateDatabase(data);
	console.log("93");
	console.log(newRecipeObject);
	res.send("New recipe added!");
}

const listAllRecipe = function (req, res) {
    res.render("listRecipe", data);
}

const seeSingleRecipe = function (req, res) {
	const reqId = parseInt(req.params.id);
	console.log("101: "+reqId);

	if (reqId > data.recipes.length) {
		res.send(`No recipe found. Please enter id from 1 to ${data.recipes.length}`)
	} else {
		const index = getIndexOfRecipeFromReqId(reqId);
		const recipeObject = { object: data.recipes[index]};
		console.log("108");
		console.log(recipeObject);
		res.render("seeRecipe", recipeObject)
	}

}

const deleteRecipe = function (req, res) {
	console.log("118");
	const reqId = parseInt(req.params.id);
	console.log("120"+reqId);

	const index = getIndexOfRecipeFromReqId(reqId);
	data.recipes.splice(index,1);
	makeIdSequential(data);
	updateDatabase(data);
	res.send("Recipe deleted!");
	console.log("127");
	console.log(data);
}

const editRecipe = function (req, res) {
	const reqId = parseInt(req.params.id);

	if (reqId > data.recipes.length) {
		res.send(`No recipe found. Please enter id from 1 to ${data.recipes.length}`)
	} else {
		const index = getIndexOfRecipeFromReqId(reqId);
		const recipeObject = { object: data.recipes[index]};
		console.log("139");
		console.log(recipeObject);
		res.render("editRecipe", recipeObject)
	}
}

const updateRecipe = function (req, res) {
	const editedRecipeInput = req.body;
	const keysArrayOfInput = Object.keys(editedRecipeInput);
	const valuesArrayOfInput = Object.values(editedRecipeInput);
	const reqId = parseInt(req.params.id);

	console.log("155");
	let array = [""];
	console.log(checkEmpty(array));
	console.log(checkEmpty(keysArrayOfInput));
	console.log(checkEmpty(valuesArrayOfInput));
	console.log("161");

	if (checkEmpty(keysArrayOfInput) === false || checkEmpty(valuesArrayOfInput) === false) {

		const checkedKeysArray = keysArrayOfInput.map(item => {
			if (item === [""]) {
				const errorMsg = "This field cannot be left empty";
				return errorMsg;
			} else {
				return item;
			}
		})

		const checkedValuesArray = valuesArrayOfInput.map(item => {
			if (item === "") {
				const errorMsg = "This field cannot be left empty";
				return errorMsg;
			} else {
				return item;
			}
		})

		const objectHolder = {};
		objectHolder.id = reqId;
		objectHolder.keys = checkedKeysArray;
		objectHolder.values = checkedValuesArray;
		res.render("editRecipe", objectHolder)

	} else {
		const editedRecipeInputValues = Object.values(editedRecipeInput);

		const editedRecipeTitle = editedRecipeInputValues.shift();
		const editedRecipeInstruction = editedRecipeInputValues.pop();

		const editedRecipeIngredients = {};	
		for (i=0; i<editedRecipeInputValues.length; i+=2) {
		editedRecipeIngredients[editedRecipeInputValues[i]] = editedRecipeInputValues[i+1];
		}

		const index = getIndexOfRecipeFromReqId(reqId);
		const recipeObjectToBeEdited = data.recipes[index];
		recipeObjectToBeEdited["Recipe Title"] = editedRecipeTitle;
		recipeObjectToBeEdited.Ingredients = editedRecipeIngredients;
		recipeObjectToBeEdited.Instructions = editedRecipeInstruction;

		updateDatabase(data);
		console.log("205");
		console.log(recipeObjectToBeEdited);
		res.send("Recipe updated!");
	}
}


//Routes
app.get("/recipes/new", displayFormForNewRecipe)
app.post("/recipes", addNewRecipe);
app.get("/recipes", listAllRecipe);
app.get("/recipes/:id", seeSingleRecipe);
app.get("/recipes/:id/edit", editRecipe);
app.put("/recipes/:id", updateRecipe);
app.delete("/recipes/:id", deleteRecipe);

readDatabase();
const port = 3000;
app.listen(port, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));