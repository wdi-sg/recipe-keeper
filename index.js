const express = require("express");
const jsonfile = require("jsonfile");
const app = express();
const ingredFILE = "ingredient.json";
const recipeFILE = "recipe.json";
// const sortFILE = "sort.json";
let duplicate;

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

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

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/recipes/delete", (request, response) => {
  response.render("recipe-delete");
});

app.get("/view", (request, response) => {
  jsonfile.readFile(recipeFILE, (err, obj) => {
    response.render("recipe-viewall", obj);
  });
});

function checkDuplicate(object, ingred) {
  duplicate = false;
  for (const keyName in object) {
    if (keyName === ingred) {
      // console.log('true');
      duplicate = true;
    }
  }
}

app.get("/sort/ingredient", (request, response) => {
  // response.render("recipe-sort");
  jsonfile.readFile(recipeFILE, (err, obj) => {
    obj.sort = {};
    for (let i = 0; i < obj.recipes.length; i++) {
      for (let z = 0; z < obj.recipes[i].ingredients.length; z++) {
        if (!obj.recipes[i].delete) {
          checkDuplicate(obj.sort, obj.recipes[i].ingredients[z]);
          if (duplicate === true) {
            let ingredName = obj.recipes[i].ingredients[z];
            obj.sort[ingredName].push(obj.recipes[i].title + "-" + obj.recipes[i].id);
          } else {
            let ingredName = obj.recipes[i].ingredients[z];
            obj.sort[ingredName] = [];
            obj.sort[ingredName].push(obj.recipes[i].title + "-" + obj.recipes[i].id);
          }
        }
      }
    }
    console.log(obj.sort);
    let alphaSorted = {};
    Object.keys(obj.sort)
      .sort()
      .forEach((key) => {
        alphaSorted[key] = obj.sort[key];
      });
    // console.log(alphaSorted);
    obj.sort = JSON.parse(JSON.stringify(alphaSorted));
    console.log(obj.sort);
    let ingredColl = {
      items: []
    };
    for (const key in obj.sort) {
      let tempObj = {
        ingred: key,
        recipes: obj.sort[key]
      };
      ingredColl.items.push(tempObj);
    }
    console.log(ingredColl);
    response.render("recipe-sort", ingredColl);
  });
});

//Submitting a new recipe
app.post("/recipes/:id", (request, response) => {
  let reqRecipeObj = request.body;
  jsonfile.readFile(recipeFILE, (err, obj) => {
    obj.lastId = obj.recipes.length;
    let newRecipeObj = {
      id: obj.lastId + 1,
      title: reqRecipeObj.title,
      ingredients: [],
      instructions: reqRecipeObj.instructions,
    };
    for (const element in reqRecipeObj) {
      if (element.includes("ingred") && reqRecipeObj[element] !== "NIL") {
        newRecipeObj.ingredients.push(reqRecipeObj[element]);
      }
    }
    obj.recipes.push(JSON.parse(JSON.stringify(newRecipeObj)));
    console.log(obj);
    console.log(obj.recipes[obj.lastId]);
    jsonfile.writeFile(recipeFILE, obj, (err) => {
      if (err) return;
      response.render("recipe-display", obj.recipes[obj.lastId]);
    });
  });
});

//Display one recipe
app.get("/recipes/:id", (request, response) => {
  jsonfile.readFile(recipeFILE, (err, obj) => {
    let idNum = parseInt(request.params.id);
    let recipeOfId = obj.recipes.find((element) => {
      return element.id === idNum;
    });
    console.log(recipeOfId);
    response.render("recipe-display", recipeOfId);
  });
});

//Deleting a recipe
app.delete("/recipes/:id", (request, response) => {
  console.log(request.body);
  let idToDelete = parseInt(request.body.id);
  jsonfile.readFile(recipeFILE, (err, obj) => {
    let indexToDel = obj.recipes.findIndex((element) => {
      return element.id === idToDelete;
    });
    obj.recipes[indexToDel].delete = true;
    console.log(obj);
    jsonfile.writeFile(recipeFILE, obj, (err) => {
      if (err) return;
      // response.send(obj);
      console.log(response.render);
      // response.render("recipe-delete");
      response.redirect("http://127.0.0.1:3000/recipes/delete");
    });
  });
});

//Read and write edited recipe data, display edited recipe
app.put("/recipes/:id/edit", (request, response) => {
  console.log(request.body);
  let editedObj = request.body;
  let id = parseInt(editedObj.id);
  jsonfile.readFile(recipeFILE, (err, obj) => {
    let recipeOfId = obj.recipes.find((element) => {
      return element.id === id;
    });
    recipeOfId.title = editedObj.title;
    recipeOfId.instructions = editedObj.instructions;
    recipeOfId.ingredients = [];
    for (const element in editedObj) {
      if (element.includes("ingred") && editedObj[element] !== "NIL") {
        recipeOfId.ingredients.push(editedObj[element]);
      }
    }
    let indexEditedRecipe = obj.recipes.findIndex((element) => {
      return element.id === id;
    });
    obj.recipes.splice(indexEditedRecipe, 1, recipeOfId);
    jsonfile.writeFile(recipeFILE, obj, (err) => {
      if (err) return;
      // response.render("recipe-display", obj.recipes[indexEditedRecipe]);
      response.redirect("http://127.0.0.1:3000/recipes/" + id);
    });
  });
});

//Get JSON data from all files
const getAllJsonData = (callbackFunc) => {
  let ingredJson;
  let recipeJson;
  jsonfile.readFile(ingredFILE, (err, obj) => {
    jsonfile.readFile(recipeFILE, (err, obj2) => {
      ingredJson = obj;
      recipeJson = obj2;
      callbackFunc({ ingredJson, recipeJson });
    });
  });
};

//Form for editing a recipe
app.get("/recipes/:id/edit", (request, response) => {
  getAllJsonData((obj) => {
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
