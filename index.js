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

app.get('/', (req, res) => {
  // running this will let express to run home.handlebars file in your views folder
  res.render('home')
})

app.post('/add-recipe', function (req, res) {
  //debug code (output request body)
  console.log("New Recipe Added");
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj;
    var recipe = {
      "id": recipeBook.recipes.length + 1,
      "title": req.body.title,
      "ingredients": req.body.ingredients,
      "instructions": req.body.instructions,
    }
    recipeBook.recipes.push(recipe);
    jsonfile.writeFile(file, recipeBook, (err) => {
    
    console.log(err)

    });

  })
  res.render('recipe-added', req.body)

});

app.post('/edit-recipe', function (req, res) {
  //debug code (output request body)
  var id = parseInt(req.body.id);
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj.recipes;
    function isId(recipe) {
      return recipe.id === id;
    }
    var recipe = recipeBook.find(isId);
    var index = recipeBook.indexOf(recipe);
    var updatedRecipe = {
      "id": parseInt(req.body.id),
      "title": req.body.title,
      "ingredients": req.body.ingredients,
      "instructions": req.body.instructions,
    }
    recipeBook[index] = updatedRecipe;
    var newOutput = {
      "recipes": recipeBook,
    }
    jsonfile.writeFile(file, newOutput, (err) => {

      console.log(err)

    });

  })
  res.render('recipe-edited', req.body)

});

app.get('/add-recipe', function (req, res) {
  //debug code (output request body)

  res.render('add-recipe');
});

app.get('/view-recipes/:id', function (req, res) {
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

app.get('/edit-recipes/:id', function (req, res) {
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

app.get('/view-recipes/', function (req, res) {
  jsonfile.readFile(file, (err, obj) => {
    var recipeBook = obj;

    res.render('view-recipes', recipeBook)
  })


});


app.listen(3000, () => {
  console.log("Starting cookbook...");

});

