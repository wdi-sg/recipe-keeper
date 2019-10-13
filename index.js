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
  let data = {warning: ""};
  response.render('main', data);
});

 // display the receipe form to create a new recipe
app.get('/recipes/new', (request, response) =>{
  let data = {};
	data.postType = "/recipes";
  data.pageTitle = "Add a New Recipe";
  // let data = {};
  console.log(data)
 	response.render('new', data);
});


// if empty build the basic screen for input
app.post('/recipes', (request, response) => {
    console.log('full body ', request.body);
  // giving home.jsx file an object/context with `name` as a property
  let data = {warning: ""};
  if (request.body.recipeTitle === "" || request.body.ingredients === "" || request.body.instructions === "") {
    data.pageTitle = "Try again...";
    data.warning = "Empty title or other data..."; 
      } else  { 
    data.pageTitle = "Recipe Added!";  	
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
  // remove the ID key from used in the form, as we use the array id for the id
  delete obj["recipes"].id;
  jsonfile.writeFile(file,obj, (err) => {
    console.error(err)
  });

  });

});


//  show the recipe to edit
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

  // add the ID for the render  
  obj.recipes[inputId].pageTitle = "Edit the Recipe";
	obj.recipes[inputId].id = inputId;
	obj.recipes[inputId].postType = "/recipes/"+inputId+"?_method=put";
	let data = obj.recipes[inputId];

  	response.render('new', data);
    }
  });
});


// edit the recipe, overwirte existing
// if empty build the basic screen for input
app.put('/recipes/:id', (request, response) => {
    console.log('edit the recipe started');
    let recipeIndex = request.params.id;
  // giving home.jsx file an object/context with `name` as a property
  let data = {};
  if (request.body.recipeTitle === "" || request.body.ingredients === "" || request.body.instructions === "") {
     data=request.body;
     data.warning= "Empty name or other data..."; 
      } else  { 
      data=request.body;
      data.pageTitle = "Recipe Has Been Edited!";
      data.id = request.params.id;
      data.postType = "/recipes/"+request.params.id+"?_method=put";
      }
  response.render('new', data);
  
  jsonfile.readFile(file, (err, obj) => {

  // remove the id key
      delete request.body.id;
      delete request.body.postType;
      delete request.body._locals;
      delete request.body.pageTitle;
      // console.error(request.body)                                                
  // save the request body
obj["recipes"][recipeIndex]= request.body;


  jsonfile.writeFile(file,obj, (err) => {
    console.error(err)
  });

  });

console.log('completed writing')
});


 // see all recipes
app.get('/recipes/', (request, response) =>{
  jsonfile.readFile(file, (err, obj) => {
        const data = {
            recipeobj: obj
        }
  data.pageTitle = "All Recipes";
  // let data = {};
   // console.log(data.recipeobj)
  response.render('showall', data);
  });
  });

// delete the recipe
app.get('/recipes/:id/delete', (request, response) => {
  jsonfile.readFile(file, (err, obj) => {


    let itemToChange = request.params.id;
    obj.recipes.splice(itemToChange,1);
             const data = {
            recipeobj: obj
        }       
  data.pageTitle = "Recipe Deleted";
  // let data = {};

   // console.log(data.recipeobj)
  response.render('showall', data);
  });
  });


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));