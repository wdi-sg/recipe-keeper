//Setting up
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

//End Of setting up
//*********
//Functions
//*********
const getDateTime = ()=>{
       const currentDateTime = new Date();
        const options = {
        year: "numeric",
        month: "short",
        day: "numeric",

    };
    const dateFormat = currentDateTime.toLocaleString("en-GB",options);
    return dateFormat;
}


const addRecipe = (request,response)=>{
    console.log("creating new recipe");
    jsonfile.readFile(file, (err, obj) => {
     if( err ){
       console.log("error with json read file:",err);
       response.status(503).send("error reading file");
       return;
}
      let date = getDateTime();
      const data = {
          title : request.body.title,
          ingredients : request.body.ingredients,
          instructions : request.body.instructions,
          createdDate : date
       }

        obj.recipes.push(data);
    jsonfile.writeFile(file , obj, (err) => {
    });
        console.log("Done reading");
        let id = obj.recipes.length;
        let path = '/recipes/'+id;
        response.redirect(path);
    });
}
const displayRecipe = ( request,response)=>{
 console.log("displaying recipe");
    jsonfile.readFile(file, (err, obj) => {
        let id = parseInt(request.params.id)
        console.log("recipes");
        let recipe = obj.recipes[id-1];
        const data = {
            id : id,
            title: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        };
        response.render("recipePage",data);
    });
}
const displayRecipes = (request, response)=>{
    console.log("displaying all recipes");
    jsonfile.readFile(file, (err, obj)=>{
        response.render("recipesPage", obj);
        console.log("Done rendering pages");
    })
}

const editPage = (request, response)=>{
    console.log("Edit page");
    jsonfile.readFile(file, (err,obj)=>{
        let id = parseInt(request.params.id);
        console.log(obj);
        let recipe = obj.recipes[id-1];
    const data = {
            id: id,
            title: recipe.title,
            instructions : recipe.instructions,
            ingredients: recipe.ingredients
        }
        console.log("asjbdjahdgjlskbcajkehsgdfkuyesb"+data);
        response.render("editPage", data);
    })
}
const updateRecipe = (request,response)=>{
    let id = parseInt(request.params.id);
    jsonfile.readFile(file, (err,obj)=>{
           let recipe = obj.recipes[id-1];
            obj.recipes[id-1].title =  request.body.title;
            obj.recipes[id-1].ingredients = request.body.ingredients;
            obj.recipes[id-1].instructions = request.body.instructions;
        const data = {
            id: id,
            title: recipe.title,
            instructions : recipe.instructions,
            ingredients: recipe.ingredients
        }
        jsonfile.writeFile(file, obj, (err)=>{
        response.render("recipePage", data);
        });
    })
}

const deleteRecipe  = (request,response)=>{
  let id = parseInt(request.params.id);
  jsonfile.readFile(file, (err, obj) => {
    obj.recipes.splice(id-1, 1);
    jsonfile.writeFile(file, obj, (err) => {
      console.log('DELETED');
      response.redirect('/recipes');
    });
  });
}


//*******
//Routes
//*******
app.get('/recipes/new',(request,response)=>{
    response.render('createPage');
})
app.post('/recipes', addRecipe);
app.get('/recipes/:id', displayRecipe);
app.get('/recipes', displayRecipes);
app.get('/recipes/:id/edit',editPage);
app.put('/recipes/:id', updateRecipe);
app.delete('/recipes/:id', deleteRecipe);




app.listen(3000, () => console.log("~~ Tuning in to port 3000 ~~"));