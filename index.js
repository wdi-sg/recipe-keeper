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

//*************************
//****Get date and time****
//Format date
//**************************
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

//***********************
//******Sort Recipe******
//Read file
//Sort Recipe
//Render page with data
//***********************
const sortRecipe = (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        let recipes = obj.recipes;
        let sortType = request.params.sort;
        let property;
        if(sortType === "title"){
            property = "title";

        }else{
            property = "date";
        }

         recipes.sort(function(a, b){
             if(property === "title"){
                a[property] = a[property].charAt(0).toUpperCase() + a[property].slice(1);
                 b[property] = b[property].charAt(0).toUpperCase()+ b[property].slice(1);
             }
                return a[property] == b[property] ? 0 : +(a[property] > b[property]) || -1;
            });
         if(sortType === "latest"){
            recipes.reverse();
         }
        const data ={
            recipes : recipes,
        }
         response.render("recipesPage",data);
    });
}

//***************************
//****Display All Recipes****
//Display all recipes
//***************************
const displayRecipes = (request, response)=>{
    console.log("displaying all recipes");
    jsonfile.readFile(file, (err, obj)=>{
        response.render("recipesPage", obj);
        console.log("Done rendering pages");
    })
}

const checkId = (id, obj)=>{
    let recipes;
    let recipeId;
    for( let i=0; i<obj.recipes.length; i++ ){
      let currentRecipe = obj.recipes[i];
      console.log(currentRecipe.id)
      if( currentRecipe.id === id){
        recipeId=i;
        break;
      }
    }
        return recipeId;
}
//******************
//****ADD RECIPE****
//Check input
//Read file
//Add data
//write file
//******************
const addRecipe = (request,response)=>{
    console.log("creating new recipe");
    jsonfile.readFile(file, (err, obj) => {
     if( err ){
       console.log("error with json read file:",err);
       response.status(503).send("error reading file");
       return;
   }
   let title = request.body.title;
   let ingredients = request.body.ingredients;
   let instructions = request.body.instructions;
    if(title!=="" && ingredients !== "" && instructions !== ""){
      let date = getDateTime();
      const data = {
          id : obj.lastId+1,
          title : title,
          ingredients : ingredients,
          instructions : instructions,
          createdDate : date
       }
        obj.lastId = obj.lastId +1;
                let id = obj.lastId;
        obj.recipes.push(data);
    jsonfile.writeFile(file , obj, (err) => {
    });
        console.log("Done reading");
        let path = '/recipes/'+id;
        response.redirect(path);
    }else{
        let message1 ="";
        let message2 = "";
        let message3 = "";
            if(title ===""){
                message1 = "*Please input a title.";
            }
            if(ingredients ===""){
                  message2 = "*Please input an ingredient.";
            }
            if(instructions === ""){
                message3 = "*Please input instructions.";
            }
       const data = {
            message1: message1,
            message2: message2,
            message3: message3
        }
        response.render("createPage", data);
    }
    });
}

//**********************
//****Display Recipe****
//Display one recipe
//**********************
const displayRecipe = ( request,response)=>{
 console.log("displaying recipe");
    jsonfile.readFile(file, (err, obj) => {
        let id = parseInt(request.params.id)
        console.log("recipes");
        let currentIndex = checkId(id,obj);

        let recipe = obj.recipes[currentIndex];
        const data = {
            id : id,
            title: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        };
        response.render("recipePage",data);
    });
}

//************************
//****Edit Recipe Page****
//Get id of recipe and
//display it
//************************
const editPage = (request, response)=>{
    console.log("Edit page");
    jsonfile.readFile(file, (err,obj)=>{
        let id = parseInt(request.params.id);
        let currentIndex = checkId(id,obj)
        let recipe = obj.recipes[currentIndex];
        console.log(id);
    const data = {
            id: id,
            title: recipe.title,
            instructions : recipe.instructions,
            ingredients: recipe.ingredients
        }
        response.render("editPage", data);
    })
}

//**************************
//****Update edit recipe****
//check input
//write recipe
//**************************
const updateRecipe = (request,response)=>{
    let id = parseInt(request.params.id);
    let title = request.body.title;
    let ingredients = request.body.ingredients;
    let instructions = request.body.instructions;
    jsonfile.readFile(file, (err,obj)=>{
        let currentIndex = checkId(id,obj);
         let recipe = obj.recipes[currentIndex];
        console.log("updateRecipe"+currentIndex);
    if(title!=="" && ingredients !== "" && instructions !== ""){
            obj.recipes[currentIndex].title =  title;
            obj.recipes[currentIndex].ingredients = ingredients;
            obj.recipes[currentIndex].instructions = instructions;
        const data = {
            id: currentIndex,
            title: recipe.title,
            instructions : recipe.instructions,
            ingredients: recipe.ingredients
        }
        jsonfile.writeFile(file, obj, (err)=>{
        response.render("recipePage", data);
        });
    }else{
        let message1 ="";
        let message2 = "";
        let message3 = "";
            if(title ===""){
                message1 = "*Please input a title.";
            }
            if(ingredients ===""){
                  message2 = "*Please input an ingredient.";
            }
            if(instructions === ""){
                message3 = "*Please input instructions.";
            }
        const data = {
            id: id,
            title: recipe.title,
            instructions : recipe.instructions,
            ingredients: recipe.ingredients,
            message1: message1,
            message2: message2,
            message3: message3
        }
        response.render("editPage", data);
        }
    });
}

//*********************
//****Delete recipe****
//*********************
const deleteRecipe  = (request,response)=>{
  let id = parseInt(request.params.id);
  jsonfile.readFile(file, (err, obj) => {
    let currentIndex = checkId(id, obj);
    console.log("dxklsanx"+ currentIndex);
    obj.recipes.splice(currentIndex, 1);
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
app.get('/recipes/sort/:sort',sortRecipe);
app.get('/recipes', displayRecipes);
app.get('/recipes/:id/edit',editPage);
app.put('/recipes/:id', updateRecipe);
app.delete('/recipes/:id', deleteRecipe);

app.listen(3000, () => console.log("~~ Tuning in to port 3000 ~~"));