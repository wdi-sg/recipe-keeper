const jsonfile = require('jsonfile');
const express = require('express');
const app = express();


//Views code
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

//file name
const file = 'recipe.json';

// tell your app to use the module
//need this for request.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//METHOD OVERWRITE
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

//*******************
//FUNCTIONS
//*******************
const saveRecipe = (request, response) =>{
  //your inputs
   // console.log(request.body);
   jsonfile.readFile(file, (err, obj)=>{
    //if there's any error
    if(err){
        response.send(err);
        return;
    }
    const recipes = obj.recipes;
    //add user input to the json file
    recipes.push(request.body);
    //save to the json file
    jsonfile.writeFile(file, obj, (err) => {
        const link ='/recipes/'+ recipes.length;
        //render recipe after adding
        response.redirect(link);
    })
  });
}

//*******************
//ROUTES
//*******************
//******redirect to recipes
app.get('/',(request, response)=>{
    response.redirect('/recipes');
})

//***** Display a list of all recipes ******
app.get('/recipes',(request, response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const data = {
            recipes: obj.recipes
        }
        response.render("home", data);
    })
})

//***** Display a form for adding new recipes ******
app.get('/recipes/new',(request, response)=>{
    response.render('add');
})

//***** Display a form for adding new recipes ******
app.get('/recipes/:id',(request, response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const recipeId = parseInt(request.params.id);
        const index = recipeId-1;
        const data = {
                id: recipeId,
                recipeName: obj.recipes[index].name,
                ingredients: obj.recipes[index].ingredients,
                instructions: obj.recipes[index].instructions
            }
        response.render('show', data);
    });
})

//***** Display recipe ******
app.get('/recipes/:id',(request, response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id);
        const data = {
                id: index,
                recipeName: obj.recipes[index-1].name,
                ingredients: obj.recipes[index-1].ingredients,
                instructions: obj.recipes[index-1].instructions
            }
        response.render('show', data);
    });
})

//***** Display edit form*****
app.get('/recipes/:id/edit', (request,response)=>{
    //read file
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        const data = {
            id : index + 1,
            recipeName: obj.recipes[index-1].name,
            ingredients: obj.recipes[index].ingredients,
            instructions: obj.recipes[index].instructions
        }
        response.render('edit', data);
    });
})

//*****Accept request for a adding new recipe ******
app.post('/recipes', saveRecipe);
//Accepts a request for the new data for recipe
app.put('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        obj.recipes[index]= request.body
        jsonfile.writeFile(file,obj, (err)=>{
        const link = "/recipes/"+ (index+1);
        response.redirect(link);
        })
    });
})

//Accepts a request to delete
app.delete('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, (err)=>{
            response.redirect('/recipes');
        });
    })
})

//*******************
//LISTENING ON PORT 3000
//*******************
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));