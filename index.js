const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public/'));
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

//all recipe index
app.get('/recipes', (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
    let recipes = [];
    recipes = obj;
    response.render('index', recipes);
  });

});

app.get('/recipes/new', (request, response) => {
  response.render('new');
});

app.get('/recipes/:id', (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
    let inputId = parseInt(request.params.id) - 1;
    let recipe = {};
    obj["recipes"].forEach((element, index) => {
      if(index === inputId){
        recipe = {
          "currentRecipe": element,
          "currentId": inputId
        }
      }
    });
    if(recipe.currentRecipe === undefined){
      response.status(404);
      response.send("not found");
    }else {
      response.render('id', recipe);
    }
  });
});

app.get('/recipes/:id/edit', (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
    let inputId = parseInt(request.params.id) - 1;
    let recipe = {};
    obj["recipes"].forEach((element, index) => {
      if(index === inputId){
        recipe = {
          "currentRecipe": element,
          "currentId": parseInt(request.params.id)
        }
      }
    });
    if(recipe === undefined){
      response.status(404);
      response.send("not found");
    }else {
      response.render('edit', recipe);
    }
  });
});

app.post('/recipes', (request, response) => {
  jsonfile.readFile(file, (err, obj) =>{
    var currentTime = new Date().toISOString().slice(0,10);
    let recipeSubmit = {
      "title": request.body.title,
      "ingredients": request.body.ingredients,
      "instructions": request.body.instructions,
      "created": currentTime
    }
    obj["recipes"].push(recipeSubmit);
    jsonfile.writeFile(file, obj, (err) =>{
      response.redirect('/recipes');
    });
  });
});

app.put("/recipes/:id", (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
    obj["recipes"][parseInt(request.params.id-1)].title = request.body.title;
    obj["recipes"][parseInt(request.params.id-1)].instructions = request.body.instructions;
    obj["recipes"][parseInt(request.params.id-1)].ingredients = request.body.ingredients;
    jsonfile.writeFile(file, obj, (err) => {
      response.redirect("/recipes/" + (request.params.id));
    });
  });
});

app.delete("/recipes/:id", (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
    obj['recipes'].splice(request.params.id, 1);
    jsonfile.writeFile(file, obj, (err) => {
      response.redirect('/recipes');
    });
  });
});

app.listen(3000);