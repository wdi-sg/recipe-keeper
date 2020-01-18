//Configurations and set up
const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const FILE = 'data.json';

// Init express app
const app = express();

//post method config
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//for method override
app.use(methodOverride('_method'));

//for react
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
//configs end

//render page list of all recipes
app.get('/recipes',(req,res)=>{
  jsonfile.readFile(FILE, (err,obj) => {
    console.log(`recipes:` + obj);
    const data = {recipes: obj.recipes};
    res.render('home',data);
  });
});


//get page to render create recipe form
app.get('/recipes/new',(req,res) => {
    console.log('add a new recipe here');
    res.render('create');
});

//to render page for individual recipe based on id
app.get('/recipes/:id', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {

    // check to make sure the file was properly read
    if( err ){
      console.log("error with json read file:",err);
      res.status(503).send("error reading file");
      return;
    }
    // extract input data from request
    let inputId = parseInt( req.params.id );

    var recipes;
    // find recipe by id from the file
    for( let i=0; i<obj.recipes.length; i++ ){
      let currentRecipe = obj.recipes[i];
      if( currentRecipe.id === inputId ){
        recipes = currentRecipe;
      }
    }
    if (recipes === undefined) {
      // send 404 back
      res.status(404);
      res.send("Sorry, we were unable to find what you were looking for.");
    } else {
      const data = {recipes: recipes}
      res.render('info',data);
    }
  });
});

//process request to add/post new recipe into recipes database
app.post('/recipes', (req,res)=> {
    jsonfile.readFile(FILE, (err,obj) =>{
        console.log(obj);
        console.log('input received:'+ req.body);
        let newTitle = req.body.title;
        let newIng = req.body.ingredients;
        let newInst = req.body.instructions;
            let newRecipe = {
                id: obj.recipes.length + 1,
                title:newTitle,
                ingredients:newIng,
                instructions:newInst
            }
                obj.recipes.push(newRecipe);
                console.log(obj);
            jsonfile.writeFile(FILE, obj, (err) => {
              console.error(err);
              res.redirect('/recipes');
            });
    });
});


//get page to edit existing recipe from database
app.get('/recipes/:id/edit', (req, res)=>{
    console.log(req.params.id);
    jsonfile.readFile(FILE, (err,obj) =>{
        console.log(obj);
        let index = parseInt(req.params.id) -1;
        console.log(index);
        let recipeItem = obj.recipes[index];
        const data = {
            recipe:recipeItem
        }
    res.render('edit', data);
    });
});

//process request to edit recipe data
app.put('/recipes/:id', (req, res) => {
    console.log(req.body);
    var id = parseInt(req.params.id);
    let index = id -1;
    console.log(index);
    jsonfile.readFile(FILE, (err, obj) => {
    // save the request body
    let revisions = {
        id: id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    }
    // replace recipe into array;
    obj.recipes[index] = revisions;
    console.log(revisions);
        jsonfile.writeFile(FILE, obj, (err) => {
          console.error(err)
        const data = {recipes:revisions }
        res.render('info',data);
    // res.send('working');
    });
  });
});

app.listen(3000,()=>{console.log('listening to local host')});