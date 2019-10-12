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


// see all recipes, load top page
app.get('/', (request, response) => {
  // giving home.jsx file an object/context with `name` as a property
  const data = {warning: ""};
  response.render('main', data);
});

 // display the receipe form to create a new recipe
app.get('/recipes/new', (request, response) =>{
	data = {pageTitle : "Add a New Recipe"};
 	response.render('new', data);
});


// if empty build the basic screen for input
app.post('/recipes', (request, response) => {
    console.log('full body ', request.body);
  // giving home.jsx file an object/context with `name` as a property
  let data = {warning: ""};
  if (request.body.recipeTitle === "" || request.body.ingredients === "" || request.body.instructions === "") {
    data = {pageTitle : "Try again..."};
    data = {warning: "Empty title or other data..."}; 
      } else  { 
    data = {pageTitle : "Recipe Added!"};  	
    // data = {warning: "Recipe Added!"}; 
      }
  response.render('new', data);
  

  // add the new data to the read object
  // whats the current last ID?
  jsonfile.readFile(file, (err, obj) => {
  // console.log('body ', request.body);
  // console.log('obj pokemon: ', obj["pokemon"]);
  obj["recipes"].push(request.body);
    // console.log('new object:', obj)
  // run the file write
  // 
  // save the request body
  // beautify(obj, null, 2, 80)
  jsonfile.writeFile(file,obj, (err) => {
    console.error(err)
  });

  });

});


app.get('/recipes/:id/edit', (request, response) => {
  // get json from specified file
      console.log("id: ",request.params.id);
  jsonfile.readFile(file, (err, obj) => {
    // extract input data from request
    console.log(err);
    // let inputId = parseInt( request.params.id );
    let inputId = parseInt( request.params.id )

    if (inputId > obj.recipes.length) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {

  // get the recipe data  
let currentRecipe = obj.recipes[inputId];

  response.render('new', currentRecipe);
    }
  });
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));