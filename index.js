/*
app.get paths

Take note of how you use the forward slash

'/' refers to localhost:3000/
'/pokemon' + 'pokemon/:id' ,this happens: 'localhost:3000/pokemon' => 'localhost:3000/pokemon/:id'
'/pokemon/' + 'pokemon/:id',this happens: 'localhost:3000/pokemon' => 'localhost:3000/pokemon/pokemon/id'
*/

// SET UP 
const express = require('express');
const app = express();

// tell your app to use the module
// this has to go in, to read request.body 
// const express has to come before the below code 
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

//SET UP METHOD-OVERRIDE for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/*
LAUNCH JSON FILE 
Make sure your file is data.json, or change it accordingly
*/
const jsonfile = require('jsonfile');
const file = 'ingredient.json';

/*
The below code launch React
*/

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

//END SET UP 

// Generating Ingredients 

var ingred = [
	{
		name: "Sugar",
		amount: "100g",
		notes: "High-quality"
	},
	{
		name: "Salt",
		amount: "10g",
		notes: "Himalayan"
	},
	{
		name: "Chicken",
		amount: "400g",
		notes: "Free-roaming"
	},
	{
		name: "Pork",
		amount: "100g",
		notes: "Organic"
	},
	{
		name: "Rice",
		amount: "100g",
		notes: "Jasmine"
	},
	{
		name: "Spaghetti",
		amount: "400g",
		notes: "Premium quality"
	},
	{
		name: "Cucumber",
		amount: "100g",
		notes: "Home-grown"
	},
	{
		name: "Lettuce",
		amount: "100g",
		notes: "Pesticide-free"
	},
	{
		name: "Beef",
		amount: "100g",
		notes: "Grass-fed"
	},
	{
		name: "Lamb",
		amount: "100g",
		notes: "Fat"
	}
]

function random(n) {
	return Math.floor(Math.random() * n);
}

//

/*
**
ROUTING 
**
*/

//The below function is used to include more fields in the recipe object.
app.get('/transform', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		
		var newList = obj.map(item => {

				var ingredientArray = [];
				var numberOfIngredients = 1 + random(6);

				for(let i = 0; i < numberOfIngredients; i++){
					ingredientArray.push(ingred[random(10)])
				}

				return {
					id: item.id,
					name: item.name,
					ingredients: ingredientArray,
					steps: "Esse enim laboris enim reprehenderit mollit tempor in reprehenderit ex commodo id laborum ea."
				}
			});

			jsonfile.writeFile(file, newList, (err) =>{
				response.send("done");
			})
		})
	})


app.get('/recipes', (request, response) => {
	jsonfile.readFile(file, (err, obj) => {
		console.log("getting recipes")
		const data = {
			allRecipes : obj
		};
			response.render('displayAll',data);
	})
})

/*
Instead of using its index as the anchor link to each recipe,
I used its id.

This is because id is static, it does not change when changes are made to the array of recipes.
So the link to each recipe will not change, unlike the scenario where index is used. 

To locate the recipe object in the array, I used the .find method to find the item.id
which matches the request.params.id 

Then i find its index (i.e. its relative position in the array) by 
first converting the array of recipe objects to an array of just the id key, 
then using an indexOf to find the index.
*/

app.delete('/recipes/:id' , (request,response) => {
	jsonfile.readFile(file, (err, obj) => {
		let currRecipe = obj.find(item => item.id == request.params.id);
		
		var idArray = obj.map(el => {
			return el.id
		})

		let theIndex = idArray.indexOf(currRecipe.id);

		obj.splice(theIndex,1)

		jsonfile.writeFile(file,obj,(err) =>{
		response.redirect('/recipes');
		})
	})
})

app.get('/recipes/:id', (request,response)=>{
	
		if(request.params.id == "new"){

			jsonfile.readFile(file, (err, obj) => {
			
			let newId = obj.length + 1;

			// As the newId is generated based on the length,
			// there is a possibility of duplicate id, if you create a recipe after deleting one.
			// Therefore, we use a while loop and keep incrementing the new index
			// Until we find an index which is not used.

			let objWiththeSameId = obj.find(element => element.id == newId);

			while (objWiththeSameId != null){
				newId++
				objWiththeSameId = obj.find(element => element.id == newId);
			}

			obj.push(
			{
	    id: newId,
	    name: "",
		    ingredients: [
		      {
		        name: "",
		        amount: "",
		        notes: ""
		      },
		    ],
	    steps: ""
	  	}
			); //end push 
			console.log(obj[obj.length - 1])

			jsonfile.writeFile(file,obj,(err) => {
				response.redirect(`/recipes/${newId}/edit`)
			})
		})

	} else {

			jsonfile.readFile(file, (err, obj) => {
				let currRecipe = obj.find(item => item.id == request.params.id)
				const data = {
					thisRecipe : currRecipe
				};
				response.render('recipe',data)
			})

	} //end else

})

app.get('/recipes/:id/edit', (request,response)=>{
	jsonfile.readFile(file,(err,obj)=>{
		let currRecipe = obj.find(item => item.id == request.params.id)
		const data = {
			ingredients: ingred,
			thisRecipe : currRecipe
		};
		response.render('edit',data);
	})
})

app.get('/recipes/:id/addIngredient', (request,response)=>{
	let id = request.params.id
	jsonfile.readFile(file,(err,obj)=>{
		let currRecipe = obj.find(item => item.id == request.params.id)
		currRecipe.ingredients.push({
			name: "",
			amount: "",
			notes: ""
		})
		jsonfile.writeFile(file,obj,(err)=>{
			response.redirect(`/recipes/${id}/edit`);
		})
	})
})

app.delete('/recipes/:id/edit', (request,response)=>{
		let id = request.params.id
		console.log("you have deleted an ingredient")
	jsonfile.readFile(file,(err,obj)=>{
		let currRecipe = obj.find(item => item.id == request.params.id)
		console.log(currRecipe.ingredients)
		currRecipe.ingredients.pop()
		console.log(currRecipe.ingredients)
		jsonfile.writeFile(file,obj,(err)=>{
			response.redirect(`/recipes/${id}/edit`);
		})
	})
})

// Display Ingredients 

app.get('/ingredients', (request,response)=>{
	jsonfile.readFile(file, (err, obj) => {
		const data = {
			ingredients: ingred,
			recipeList : obj
		};
		response.render('ingredients',data)
	})
})

// Ingredients Filter 

app.get('/ingredients/filter', (request,response)=>{
	jsonfile.readFile(file, (err, obj) => {

		let queryIngredient = request.query.selectedIngredient

		function containsQueriedIngredient(recipe){
			let result = recipe.ingredients.find(recipe => recipe.name == queryIngredient)
				if(result != null){
					return true
				} else {
					return false
				}
		}

		let filterResult = obj.filter(recipe => containsQueriedIngredient(recipe))

		const data = {
			ingredients: ingred,
			recipeList: filterResult
		};
		response.render('ingredients',data)
	})
})

app.put('/recipes/:id', (request,response) => {
	jsonfile.readFile(file,(err,obj)=>{
			let currRecipe = obj.find(item => item.id == request.params.id)
			console.log("And the request body is below:")
			console.log(request.body)
			currRecipe.name = request.body.name
			currRecipe.steps = request.body.steps
			currRecipe.ingredients = [];

			if( typeof (request.body.ingreArray) == "string") {
				
				currRecipe.ingredients.push({
					name: request.body.ingreArray,
					amount: request.body.amountArray,
					notes: request.body.notesArray
				})

			} else {
				
				for(let i = 0; i < request.body.ingreArray.length; i++){
					currRecipe.ingredients.push({
						name: request.body.ingreArray[i],
						amount: request.body.amountArray[i],
						notes: request.body.notesArray[i]
					})
				}

			}

			console.log(currRecipe)

			const data = {
				thisRecipe : currRecipe
			};
			jsonfile.writeFile(file,obj,(err)=>{	
				response.render('recipe',data);
			})
	})
})

app.listen(3000, ()=> console.log("listening at 3000"))