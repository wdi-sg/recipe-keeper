const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public/'));

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

// Load home page
app.get('/', (req, res) => {
  // Render home page
  res.render('home')
})

// Action for adding new recipe
app.post('/recipes', function (req, res) {
  // Read data.json file  
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj;
    //if data.json is empty, initialize with recipe object
    if (recipeBook == undefined) {
      recipeBook = {
        "recipes": [],
      }
    }
    // Get recipe from post request body and add it to recipe object
    var recipe = {
      "id": recipeBook.recipes.length + 1,
      "title": req.body.title,
      "ingredients": req.body.ingredients,
      "instructions": req.body.instructions,
      "date-updated": getDateTime(),
    }
    // If recipe has title it will be stored in recipes array, else it would be ignored
    if(recipe.title!=""){
      recipeBook.recipes.push(recipe);
    }
    jsonfile.writeFile(file, recipeBook, (err) => {

      console.log(err)

    });

  })
  // Renders successful and unsuccessful add recipe pages based on empty title submitted in form
  if(req.body.title == ""){
    res.render('recipe-rejected', req.body)
  }else{
    res.render('recipe-added', req.body)
  }

});

// Action for editing existing recipe
app.put('/recipes/:id', function (req, res) {
  // Gets id of recipe, hidden from view in edit form
  var id = parseInt(req.body.id);
  // Gets recipe object based on id
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj.recipes;
    
    // Function used to match id to recipe's id
    function isId(recipe) {
      return recipe.id === id;
    }
    // Find recipe based on id
    var recipe = recipeBook.find(isId);
    // Returns arrayId of recipe
    var index = recipeBook.indexOf(recipe);
    // Updates recipe values based on form put request
    var updatedRecipe = {
      "id": parseInt(req.body.id),
      "title": req.body.title,
      "ingredients": req.body.ingredients,
      "instructions": req.body.instructions,
      "date-updated": getDateTime(),
    }
    // If title blank, recipe not edited
    if(updatedRecipe.title != ""){
      recipeBook[index] = updatedRecipe;
    }
    var newOutput = {
      "recipes": recipeBook,
    }
    // Writes updated file to data.json
    jsonfile.writeFile(file, newOutput, (err) => {

      console.log(err)

    });

  })
  // Renders successful or unsuccessful edit based on empty title
  if(req.body.title == ""){
    res.render('edit-rejected', req.body)
  }else{
    res.render('recipe-edited', req.body)
  }

});

// Action to remove existing recipe
app.delete('/recipes/:id', function (req, res) {
  var id = parseInt(req.params.id);
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj.recipes;
    function isId(recipe) {
      return recipe.id === id;
    }
    var recipe = recipeBook.find(isId);
    var index = recipeBook.indexOf(recipe);
    recipeBook.splice(index, 1);
    var newOutput = {
      "recipes": recipeBook,
    }
    jsonfile.writeFile(file, newOutput, (err) => {

      console.log(err)

    });

  })
  res.render('recipe-deleted')

});

// Action to load add new recipe page
app.get('/recipes/new', function (req, res) {
  //debug code (output request body)

  res.render('add-recipe');
});

// Action to load single recipe page
app.get('/recipes/:id', function (req, res) {
  var id = parseInt(req.params.id);
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj.recipes;
    function isId(recipe) {
      return recipe.id === id;
    }
    var recipe = recipeBook.find(isId);
    res.render('recipe', recipe)
  })


});

// Action to load recipe editing page
app.get('/recipes/:id/edit', function (req, res) {
  var id = parseInt(req.params.id);
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj.recipes;
    function isId(recipe) {
      return recipe.id === id;
    }
    var recipe = recipeBook.find(isId);
    res.render('edit', recipe)
  })


});

// Action to load list of all recipes
app.get('/recipes/', function (req, res) {
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj;
    if (recipeBook==undefined || recipeBook==null){
      console.log(recipeBook);
      recipeBook = {
        "recipes": [],
      }
    
    jsonfile.writeFile(file, recipeBook, (err) => {

      console.log(err)

    });
    }
    res.render('view-recipes', recipeBook)
  })
});
app.listen(3000, () => {
  console.log("Starting Recipe Keeper...");

});

function getDateTime() {
  var date = new Date();
  var formatDate = date.toLocaleDateString();
  var formatTime = date.toLocaleTimeString();
  return `${formatDate} ${formatTime}`;
}