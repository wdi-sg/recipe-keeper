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
  response.render('index');
});

app.get('/recipes/new', (request, response) => {
  response.render('new');
});

app.get('/recipes/:id', (request, response) => {
  jsonfile.readFile(file, (err, obj) => {
    let inputId = parseInt(request.params.id) - 1;
    let recipe;
    obj["recipes"].forEach((element, index) => {
      if(index === inputId){
        recipe = element;
      }
    });
    if(recipe === undefined){
      response.status(404);
      response.send("not found");
    }else {
      response.render('id', recipe);
    }
  });
});

app.post('/recipes', (request, response) => {
  jsonfile.readFile(file, (err, obj) =>{
    let recipeSubmit = {
      "title": request.body.title,
      "ingredients": request.body.ingredients,
      "instructions": request.body.instructions
    }
    obj["recipes"].push(recipeSubmit);
    jsonfile.writeFile(file, obj, (err) =>{
      response.redirect('/recipes');
    });
  });
});
app.listen(3000);