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

//Welcome page//
app.get('/', (request, response) => {
    response.render("home")
  })

app.post('/', (request, response) => {
    response.redirect('/recipes/new')
  })


//form for adding a new recipe//
app.get('/recipes/new', (request, response) => {
  response.render('new')
})

app.post('/recipes/new', (request, response) =>{

    jsonfile.readFile(file, (err, obj) => {
      console.log(file)
      const recipe = request.body;
      obj.recipes.push(recipe)

    jsonfile.writeFile(file, obj, (err) => {
      const data = {
        "id": recipe.id,
        "ingredients": recipe.ingredients,
        "instructions": recipe.instructions
      }
      console.log(data);
    response.send(obj.recipes)
    } )
  })
})

app.get("/recipes/:id", (request, response)=> {
  const id = request.params.id
  const data = {
    id: id
  }
  response.render("DeletePage", data)
})

app.delete("/recipes/:id", (request, response)=> {
  response.send("NEED TO DELETE RECIPE" + request.params.id)
  jsonfile.readFile(file, (err, obj)=> {
    const newRecipesArray = obj.recipes.filter((recipe)=> {
      return recipe.id !== request.params.id
    })
    console.log(newRecipesArray)
  })
})




app.listen(3000);
