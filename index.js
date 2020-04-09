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
  console.log(reqRecipeObj);
  jsonfile.readFile(recipeFILE, (err, obj) => {
    let newRecipeObj = {
      title: reqRecipeObj.title,
      ingredients: [],
      instructions: reqRecipeObj.instructions
    };
    for (const element in reqRecipeObj) {
      console.log(element);
      if (element.includes("ingred") && reqRecipeObj[element] !== "NIL") {
        newRecipeObj.ingredients.push(reqRecipeObj[element]);
      }
    }
    obj.recipes.push(JSON.parse(JSON.stringify(newRecipeObj)));
    console.log(obj);
    for (let i=0; i<obj.usedIngred.length; i++) {
      for (let z=0; z<newRecipeObj.ingredients.length; z++) {
        if (obj.usedIngred[i].name === newRecipeObj.ingredients[z]) {
          obj.usedIngred[i].inRecipe.push(newRecipeObj.title);
          newRecipeObj.ingredients[z] = null;
        }
      }
    }
    for (let x=0; x<newRecipeObj.ingredients.length; x++) {
      if (newRecipeObj.ingredients[x] !== null) {
        let newUsedIngredObj = {
          name: newRecipeObj.ingredients[x],
          inRecipe: [newRecipeObj.title]
        };
        obj.usedIngred.push(newUsedIngredObj);
      }
    }
    console.log(obj);
    jsonfile.writeFile(recipeFILE, obj, (err) => {
      if (err) return;
      response.send(obj);
    });
  });
});

//Form for creating a new recipe
app.get("/recipes", (request, response) => {
  jsonfile.readFile(ingredFILE, (err, obj) => {
    response.render("new-recipe", obj);
  });
});

app.listen(3000, () => console.log("Listening to port 3000"));