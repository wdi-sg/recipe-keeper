const express = require("express");
const jsonfile = require("jsonfile");
const app = express();
const ingredFILE = "ingredient.json";
const recipeFILE = "recipe.json";

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");

app.set("view engine", "jsx");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//----------------------------
//----------------------------

//Submitting a new recipe 
app.post("/recipes/new", (request, response) => {
  let reqRecipeObj = request.body;
  jsonfile.readFile(recipeFILE, (err, obj) => {
    obj.lastId = obj.recipes.length;
    let newRecipeObj = {
      id: obj.lastId + 1,
      title: reqRecipeObj.title,
      ingredients: [],
      instructions: reqRecipeObj.instructions
    };
    for (const element in reqRecipeObj) {
      if (element.includes("ingred") && reqRecipeObj[element] !== "NIL") {
        newRecipeObj.ingredients.push(reqRecipeObj[element]);
      }
    }
    obj.recipes.push(JSON.parse(JSON.stringify(newRecipeObj)));
    jsonfile.writeFile(recipeFILE, obj, (err) => {
      if (err) return;
      response.send(obj);
    });
  });
});

//Display one recipe 
app.get("/recipes/:id", (request, response) => {
  jsonfile.readFile(recipeFILE, (err, obj) => {
    let idNum = parseInt(request.params.id);
    console.log(obj.recipes[idNum-1]);
    response.render("recipe-display", obj.recipes[idNum-1]);
  });
});

//Read and write edited recipe data 
app.put("/recipes/:id/edit", (request, response) => {
  console.log(request.body);
  let editedObj = request.body;
  let id = parseInt(editedObj.id);
  jsonfile.readFile(recipeFILE, (err, obj) => {
    // let oldTitle = obj.recipes[currIndex].title;
    obj.recipes[id-1].title = editedObj.title;
    obj.recipes[id-1].instructions = editedObj.instructions;
    obj.recipes[id-1].ingredients = [];
    for (const element in editedObj) {
      if (element.includes("ingred") && editedObj[element] !== "NIL") {
        obj.recipes[id-1].ingredients.push(editedObj[element]);
      }
    }
    jsonfile.writeFile(recipeFILE, obj, (err) => {
      if (err) return;
      response.render("recipe-display", obj.recipes[id-1]);
      // response.redirect("http://127.0.0.1:3000/recipes/"+id);
    });
  });
});

//Get JSON data from all files 
const getAllJsonData = callbackFunc => {
  let ingredJson;
  let recipeJson;
  jsonfile.readFile(ingredFILE, (err, obj) => {
    jsonfile.readFile(recipeFILE, (err, obj2) => {
      ingredJson = obj;
      recipeJson = obj2;
      callbackFunc({ingredJson, recipeJson});
    });
  });
}

//Form for editing a recipe 
app.get("/recipes/:id/edit", (request, response) => {
  getAllJsonData(obj => {
    obj.currentId = parseInt(request.params.id);
    // console.log(obj);
    response.render("edit-recipe", obj);
  });
});

//Form for creating a new recipe
app.get("/recipes", (request, response) => {
  jsonfile.readFile(ingredFILE, (err, obj) => {
    response.render("new-recipe", obj);
  });
});

app.listen(3000, () => console.log("Listening to port 3000"));

    // for (let i=0; i<obj.usedIngred.length; i++) {
    //   for (let z=0; z<newRecipeObj.ingredients.length; z++) {
    //     if (obj.usedIngred[i].name === newRecipeObj.ingredients[z]) {
    //       obj.usedIngred[i].inRecipe.push(newRecipeObj.title);
    //       newRecipeObj.ingredients[z] = null;
    //     }
    //   }
    // }
    // for (let x=0; x<newRecipeObj.ingredients.length; x++) {
    //   if (newRecipeObj.ingredients[x] !== null) {
    //     let newUsedIngredObj = {
    //       name: newRecipeObj.ingredients[x],
    //       inRecipe: [newRecipeObj.title]
    //     };
    //     obj.usedIngred.push(newUsedIngredObj);
    //   }
    // }
