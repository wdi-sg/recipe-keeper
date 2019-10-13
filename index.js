const express = require('express');
const app = express();
const jsonfile = require('jsonfile');
const FILE = 'recipe.json';
const ingredient = 'ingredient.json';
//Allows use for request.body
const methodOverride = require('method-override')
app.use(methodOverride('_method'));


app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
//for rendering HTML
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


app.get('/', (req, res) => {
  res.render('home')
});

//////////////////////////////////////////////////////
//this sections will be for /ingredients route
//test to show ingredient list
app.get('/ingredient/list', (req, res) => {
  // let recipes = 'recipe.json';
  console.log("showing all ingredient");
  jsonfile.readFile(ingredient, (err, obj) => {
    for (let i = 0; i < obj.length; i++)
      console.log(obj[i].name);
  })

});

app.get('/recipe/new', (req, res) => {
  console.log("MMM~~ a new Recipe");
  res.render('addrecipe');
});
////////////////////////DONE/////////////////////////////////
//this function should push request.body into recipe.json
//&return error if error is found
app.post('/recipe/new', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }
    console.log("building new recipe!~!");
    //take note that u have to pre-save "recipes" in recipe.json
    //or the function will not work...
    obj['recipes'].push(req.body);
    jsonfile.writeFile(FILE, obj, (err) => {
      let title = `<p>Title: ${req.body.Title}</p>`;
      let category = `<p>Cat: ${req.body.Category}</p>`;
      let ingredientOne = `<p>ingredient 1: ${req.body.ingredient1}</p>`;
      let ingredientTwo = `<p>ingredient 2: ${req.body.ingredient2}</p>`;
      let ingredientThree = `<p>ingredient 3: ${req.body.ingredient3}</p>`;
      let instruction = `<p>instructns.: ${req.body.instructions}</p>`;
      let backHome = `<button method="GET" target ="/home" method="GET" value="back"/> Back to front page</button>`;
      let resp = title + category + ingredientOne + ingredientTwo + ingredientThree + instruction + backHome;
      res.send(resp);
      console.log("adding recipe");
      console.log("Yay recipe added");
    });
  })
});

/////////////////////////////////DONE///////////////////////////////

// app.get('/recipe', (req, res) => {
//   jsonfile.readFile(FILE, (err,obj)=>{
//       let showHand='FILE';
//     res.send('allRecipes',showHand)
//   })
// });

//this section will show recipes by cuisine category
app.get('/recipe/:Category', (req, res) => {
  console.log(req.query);
    console.log("showing" + req.query.path);
    jsonfile.readFile(FILE, (err, obj) => {
      let recipeBook = obj['recipes'];
      let result = recipeBook.filter(recipeBook => recipeBook.Category === req.query.path);
      console.log(result);
      res.send(result);
      for (let i = 0; i < recipeBook.length; i++) {}
    })
});
app.listen(3000, () => (console.log("you\'re on port 3000")));
