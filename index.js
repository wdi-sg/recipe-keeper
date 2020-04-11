const express = require("express");
const jsonfile = require("jsonfile");
const app = express();
const ingredFILE = "ingredient.json";
const recipeFILE = "recipe.json";
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

//----------------------------------
//----------------------------------

//DISPLAY HOME PAGE
app.get("/", (request, response) => {
  response.render("home");
});

//DISPLAY DELETE PAGE
app.get("/recipes/delete", (request, response) => {
  response.render("recipe-delete");
});

//VIEW ALL RECIPES
app.get("/view", (request, response) => {
  jsonfile.readFile(recipeFILE, (err, obj) => {
    response.render("recipe-viewall", obj);
  });
});

//ENSURES THAT INGREDIENTS ARE NOT REPEATED WHEN SORTING RECIPES BY INGREDIENT
function checkDuplicate(object, ingred) {
  duplicate = false;
  for (const keyName in object) {
    if (keyName === ingred) {
      duplicate = true;
    }
  }
}

//SORT RECIPES BY INGREDIENTS USED
app.get("/sort/ingredient", (request, response) => {
  jsonfile.readFile(recipeFILE, (err, obj) => {
    obj.sort = {};
    for (let i = 0; i < obj.recipes.length; i++) {
      for (let z = 0; z < obj.recipes[i].ingredients.length; z++) {
        if (!obj.recipes[i].delete) {
          checkDuplicate(obj.sort, obj.recipes[i].ingredients[z]);
          if (duplicate === true) {
            let ingredName = obj.recipes[i].ingredients[z];
            obj.sort[ingredName].push(
              obj.recipes[i].title + "-" + obj.recipes[i].id
            );
          } else {
            let ingredName = obj.recipes[i].ingredients[z];
            obj.sort[ingredName] = [];
            obj.sort[ingredName].push(
              obj.recipes[i].title + "-" + obj.recipes[i].id
            );
          }
        }
      }
    }
    //Sort ingredients by alphabetical order
    let alphaSorted = {};
    Object.keys(obj.sort)
      .sort()
      .forEach((key) => {
        alphaSorted[key] = obj.sort[key];
      });
    obj.sort = JSON.parse(JSON.stringify(alphaSorted));
   //Prepare object element to be rendered
    let ingredColl = {
      items: [],
    };
    for (const key in obj.sort) {
      let tempObj = {
        ingred: key,
        recipes: obj.sort[key],
      };
      ingredColl.items.push(tempObj);
    }
    //Sorted data is NOT written to file to maintain one 'source of truth'
    response.render("recipe-sort", ingredColl);
  });
});

//SUBMITS NEW RECIPE
app.post("/recipes/:id", (request, response) => {
  let reqRecipeObj = request.body;
  //Reads from both recipe.json and ingredient.json
  getAllJsonData((obj) => {
    //Creates new recipe object based on user input
    obj.recipeJson.lastId = obj.recipeJson.recipes.length;
    let newRecipeObj = {
      id: obj.recipeJson.lastId + 1,
      title: reqRecipeObj.title.toUpperCase(),
      ingredients: [],
      instructions: reqRecipeObj.instructions,
    };
    for (const element in reqRecipeObj) {
      if (element.includes("ingred") && reqRecipeObj[element] !== "") {
        newRecipeObj.ingredients.push(reqRecipeObj[element]);
      }
    }
    //Ensures that recipe title is not entirely numeric
    if (!!parseInt(newRecipeObj.title)) {
      newRecipeObj.comments = "Please enter a valid title and not a number";
      newRecipeObj.ingredientsJson = JSON.parse(
        JSON.stringify(obj.ingredJson.ingredientsJson)
      );
      console.log(newRecipeObj);
      response.render("new-recipe", newRecipeObj);
      return;
    }
    //Checks for duplicates in recipe title
    let titleDuplicate = false;
    for (let i = 0; i < obj.recipeJson.recipes.length; i++) {
      if (newRecipeObj.title === obj.recipeJson.recipes[i].title) {
        titleDuplicate = true;
        break;
      }
    }
    if (titleDuplicate) {
      newRecipeObj.comments =
        "Duplicate title found. Please input an alternative title.";
      newRecipeObj.ingredientsJson = JSON.parse(
        JSON.stringify(obj.ingredJson.ingredientsJson)
      );
      console.log(newRecipeObj);
      response.render("new-recipe", newRecipeObj);
      return;
    }
    //Checks for duplicates in selected ingredients
    let ingredDucplicate = false;
    let mapObj = {};
    for (let i = 0; i < newRecipeObj.ingredients.length; i++) {
      let ingred = newRecipeObj.ingredients[i];
      if (mapObj[ingred]) {
        ingredDucplicate = true;
        break;
      } else {
        mapObj[ingred] = true;
      }
    }
    if (ingredDucplicate) {
      newRecipeObj.comments = "Duplicate ingredient found. Please amend.";
      newRecipeObj.ingredientsJson = JSON.parse(
        JSON.stringify(obj.ingredJson.ingredientsJson)
      );
      console.log(newRecipeObj);
      response.render("new-recipe", newRecipeObj);
      return;
    }
    //Pushes new recipe object to FILE for writing
    obj.recipeJson.recipes.push(JSON.parse(JSON.stringify(newRecipeObj)));
    response.render(
      "recipe-display",
      obj.recipeJson.recipes[obj.recipeJson.lastId]
    );
    jsonfile.writeFile(recipeFILE, obj.recipeJson, (err) => {
      if (err) return;
    });
  });
});

//DISPLAYS ONE RECIPE DEPENDING ON ID IN URL
app.get("/recipes/:id", (request, response) => {
  jsonfile.readFile(recipeFILE, (err, obj) => {
    let idNum = parseInt(request.params.id);
    let recipeOfId = obj.recipes.find((element) => {
      return element.id === idNum;
    });
    response.render("recipe-display", recipeOfId);
  });
});

//DELETES A RECIPE BY ADDING KEY VALUE PAIR "DELETE: TRUE"
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
      console.log(response.render);
      response.redirect("http://127.0.0.1:3000/recipes/delete");
    });
  });
});

//READS AND WRITE EDITED RECIPE DATA, DISPLAYS EDITED RECIPE
app.put("/recipes/:id/edit", (request, response) => {
  let editedObj = request.body;
  let id = parseInt(editedObj.id);
  //Reads from both recipe.json and ingredient.json
  getAllJsonData((obj) => {
    //Creates new recipe object based on user input
    let recipeOfId = obj.recipeJson.recipes.find((element) => {
      return element.id === id;
    });
    recipeOfId.title = editedObj.title.toUpperCase();
    recipeOfId.instructions = editedObj.instructions;
    recipeOfId.ingredients = [];
    for (const element in editedObj) {
      if (element.includes("ingred") && editedObj[element] !== "") {
        recipeOfId.ingredients.push(editedObj[element]);
      }
    }
    //Ensures that recipe title is not entirely numeric
    if (!!parseInt(recipeOfId.title)) {
      let tempObj = {};
      tempObj.id = recipeOfId.id;
      tempObj.recipeJson = {};
      tempObj.recipeJson.recipes = [];
      tempObj.recipeJson.recipes.push(JSON.parse(JSON.stringify(recipeOfId)));
      tempObj.comments = "Please enter a valid title and not a number";
      tempObj.ingredJson = {};
      tempObj.ingredJson.ingredientsJson = JSON.parse(
        JSON.stringify(obj.ingredJson.ingredientsJson)
      );
      console.log(tempObj);
      response.render("edit-recipe", tempObj);
      return;
    }
    //Checks for duplicates in recipe title
    let indexNum = obj.recipeJson.recipes.findIndex((element) => {
      return element.id === id;
    });
    let titleDuplicate = false;
    for (let i = 0; i < obj.recipeJson.recipes.length; i++) {
      //Checks that recipe titles used for comparison are of a different id
      if (i !== indexNum) {
        if (recipeOfId.title === obj.recipeJson.recipes[i].title) {
          titleDuplicate = true;
          break;
        }
      }
    }
    if (titleDuplicate) {
      let tempObj = {};
      tempObj.id = recipeOfId.id;
      tempObj.recipeJson = {};
      tempObj.recipeJson.recipes = [];
      tempObj.recipeJson.recipes.push(JSON.parse(JSON.stringify(recipeOfId)));
      tempObj.comments =
        "Duplicate title found. Please input an alternative title.";
      tempObj.ingredJson = {};
      tempObj.ingredJson.ingredientsJson = JSON.parse(
        JSON.stringify(obj.ingredJson.ingredientsJson)
      );
      console.log(tempObj);
      response.render("edit-recipe", tempObj);
      return;
    }
    //Checks for duplicates in selected ingredients
    let ingredDucplicate = false;
    let mapObj = {};
    for (let i = 0; i < recipeOfId.ingredients.length; i++) {
      let ingred = recipeOfId.ingredients[i];
      if (mapObj[ingred]) {
        ingredDucplicate = true;
        break;
      } else {
        mapObj[ingred] = true;
      }
    }
    if (ingredDucplicate) {
      let tempObj = {};
      tempObj.id = recipeOfId.id;
      tempObj.recipeJson = {};
      tempObj.recipeJson.recipes = [];
      tempObj.recipeJson.recipes.push(JSON.parse(JSON.stringify(recipeOfId)));
      tempObj.comments = "Duplicate ingredient found. Please amend.";
      tempObj.ingredJson = {};
      tempObj.ingredJson.ingredientsJson = JSON.parse(
        JSON.stringify(obj.ingredJson.ingredientsJson)
      );
      console.log(tempObj);
      response.render("edit-recipe", tempObj);
      return;
    }
    //Replaces original recipe object with the edited object
    obj.recipeJson.recipes.splice(indexNum, 1, recipeOfId);
    jsonfile.writeFile(recipeFILE, obj.recipeJson, (err) => {
      if (err) return;
      response.redirect("http://127.0.0.1:3000/recipes/" + id);
    });
  });
});

//GETS JSON DATA FROM ALL JSON FILES
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

//FORM FOR EDITING A RECIPE
app.get("/recipes/:id/edit", (request, response) => {
  getAllJsonData((obj) => {
    obj.id = parseInt(request.params.id);
    response.render("edit-recipe", obj);
  });
});

//FORM FOR CREATING A NEW RECIPE
app.get("/recipes", (request, response) => {
  jsonfile.readFile(ingredFILE, (err, obj) => {
    response.render("new-recipe", obj);
  });
});

app.listen(3000, () => console.log("Listening to port 3000"));
