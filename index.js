/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
//Require packages
const express = require('express');
const jsonfile = require('jsonfile');

//Define pokedex.json
const RECIPE = 'recipe.json';

// Init express app
const app = express();

//Use the following modules
app.use(express.json()); 
app.use(express.urlencoded({
  extended: true
}));

//Use files
app.use(express.static(__dirname+'/public'));

//React Initiation
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

//MethodOveride package initiation
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/**
 * ===================================
 * Functions
 * ===================================
 */

var rootFolderRedirect = function(request,response) {
	response.redirect('/recipes');
};

var mainPage = function(request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {
		switch(request.query.sortby){
			case 'title':
				obj.recipes.sort((a,b) => {
	              if (a.title.toLowerCase() >= b.title.toLowerCase()){
	                return 1;
	              } else if (a.title.toLowerCase() <= b.title.toLowerCase()) {
	                return -1;
	              } else {
	                return 0;
	              }
	            });
	            break
	        case 'cookTime':
				obj.recipes.sort((a,b) => {
	              if (a.cookTime.toLowerCase() >= b.cookTime.toLowerCase()){
	                return 1;
	              } else if (a.cookTime.toLowerCase() <= b.cookTime.toLowerCase()) {
	                return -1;
	              } else {
	                return 0;
	              }
	            });
	        	break;
	        case 'dateAdded':
				obj.recipes.sort((a,b) => {
	              if (a.date.toLowerCase() >= b.date.toLowerCase()){
	                return 1;
	              } else if (a.date.toLowerCase() <= b.date.toLowerCase()) {
	                return -1;
	              } else {
	                return 0;
	              }
	            });
	        	break;
	        default:
	        	break;
		}
		
		let data = {
			recipes:obj.recipes
		}
		response.render('main',data);
	});

}; 

var newRecipeForm = function(request,response) {
	response.render('newrecipe');
};


var addNewRecipe = function(request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {
		obj.lastKey = obj.recipes.length;
		let nextIndex = (obj.lastDeleted.length === 0) ? obj.lastKey : parseInt(obj.lastDeleted[0])-1;
		obj.lastDeleted.shift();
		let nextID = nextIndex+1;

		let today = new Date();
		let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes();

		newRecipe = {
			id: nextID,
			title: request.body.recipeTitle,
			date:currentDate,
			img: request.body.recipeImage,
			cookTime: request.body.cookTime,
			ingredients: request.body.recipeIngredients,
			instructions: request.body.recipeInstructions
		}

		obj.recipes.splice(nextIndex,0,newRecipe);

		jsonfile.writeFile(RECIPE, obj, (err)=>{
   		});
		response.redirect(`/recipes/${nextID}`);
	});
}; 

var individualRecipe = function(request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {

		let recipeShown = obj.recipes.find(element => {
			return element.id === parseInt(request.params.id)
		})

		data = {
			recipe: recipeShown
		}

		response.render('showrecipes',data);
	});
}; 

var editRecipeGet = function (request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {

		let recipeShown = obj.recipes.find(element => {
			return element.id === parseInt(request.params.id)
		})

		data = {
			recipe: recipeShown
		}

		response.render('editrecipes',data);
	});
};

var editRecipePut = function (request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {

		let recipeIndex = obj.recipes.findIndex(element => {
			return element.id === parseInt(request.params.id)
		});

		obj.recipes[recipeIndex].title = request.body.recipeTitle;
		obj.recipes[recipeIndex].img = request.body.recipeImage;
		obj.recipes[recipeIndex].cookTime = request.body.cookTime;
		obj.recipes[recipeIndex].ingredients = request.body.recipeIngredients;
		obj.recipes[recipeIndex].instructions = request.body.recipeInstructions;	

		jsonfile.writeFile(RECIPE, obj, (err)=>{
   		});
		response.redirect(`/recipes/${obj.recipes[recipeIndex].id}`)
	});
};

var deleteRecipeGet = function (request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {

		let recipeShown = obj.recipes.find(element => {
			return element.id === parseInt(request.params.id)
		})

		data = {
			recipe: recipeShown
		}

		response.render('deleterecipes',data);
	});
};

var deleteRecipeDelete = function (request,response) {
	jsonfile.readFile(RECIPE, (err,obj) => {
		let recipeIndex = obj.recipes.findIndex(element => {
			return element.id === parseInt(request.params.id)
		});

		obj.recipes.splice(recipeIndex,1);
		obj.lastDeleted.push(request.params.id);
		obj.lastDeleted.sort();

		
		jsonfile.writeFile(RECIPE, obj, (err)=>{
   		});
		response.redirect(`/recipes`)
	});
};




/**
 * ===================================
 * Routes
 * ===================================
 */

 app.get('/',rootFolderRedirect);

 app.get('/recipes', mainPage);

 app.get('/recipes/new',newRecipeForm);

 app.post('/recipes/new',addNewRecipe);

 app.get('/recipes/:id',individualRecipe);

 app.get('/recipes/:id/edit',editRecipeGet);

 app.put('/recipes/:id/edit',editRecipePut);

 app.get('/recipes/:id/delete',deleteRecipeGet);

 app.delete('/recipes/:id/delete',deleteRecipeDelete);

 /*
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
