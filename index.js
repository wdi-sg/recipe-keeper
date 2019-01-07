// ****   starter codes

const jsonfile = require("jsonfile");
const express = require("express");
const methodOverride = require("method-override");
const reactEngine = require("express-react-views").createEngine();

const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");

const recipes = "recipes.json";

// ****   /recipes   main page, see all recipes
app.get("/recipes/", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    if (err) {
      console.log("err");
    }
    let passObj = obj;
    res.render("mainPage", { passObj: passObj });
  });
});

// ****   /recipes/:id/edit   edit page after clicking edit recipe button
app.get("/recipes/:id/edit", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    let editId = parseInt(req.params.id);
    let passObj;
    for (let i = 0; i < obj.recipes.length; i++) {
      if (obj.recipes[i].index == editId) {
        passObj = obj.recipes[i];
      }
    }
    res.render("editPage", { passObj: passObj });
  });
});

// **** after edit submitted, process new edits and overwrite json file, and back to mainPage
app.put("/recipes/:id", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    for (let i = 0; i < obj.recipes.length; i++) {
      if (req.params.id == obj.recipes[i].index) {
        let ingreArr = req.body.ingredient.split(", ");
        obj.recipes[i].title = req.body.title;
        obj.recipes[i].ingredients = ingreArr;
        obj.recipes[i].instructions = req.body.instruction;
      }
    }
    jsonfile.writeFile(recipes, obj, err => {
      if (err) {
        console.log(err);
      }
    });
    let passObj = obj;
    res.render("mainPage", { passObj: passObj });
  });
});

// **** after clicking delete recipe button, process deleted recipe and overwrite json file, and back to mainPage
app.delete("/recipes/:id", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    let delIndex = parseInt(req.params.id) + 1;
    for (let i = 0; i < obj.recipes.length; i++) {
      if (delIndex == obj.recipes[i].index) {
        obj.recipes.splice(i, 1);
      }
    }
    for (let i = delIndex; i < obj.recipes.length; i++) {
      obj.recipes[i].index = obj.recipes[i].index - 1;
    }
    jsonfile.writeFile(recipes, obj, err => {
      if (err) {
        console.log(err);
      }
    });
    let passObj = obj;
    res.render("mainPage", { passObj: passObj });
  });
});

// ****   /recipes/new   the forms page for adding recipe
app.get("/recipes/new", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    let passObj = obj;
    res.render("addPage", { passObj: passObj });
  });
});

// ****   /recipes  after submitting add recipe forms page, route to main page with new recipe reflected
app.post("/recipes", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    if (err) {
      console.log("err");
    }
    let ingreArr = req.body.ingredient.split(", ");
    let newRecipe = {
      index: parseInt(req.body.index),
      title: req.body.title,
      ingredients: ingreArr,
      instructions: req.body.instruction
    };
    obj.recipes.push(newRecipe);
    jsonfile.writeFile(recipes, obj, err => {
      if (err) {
        console.log(err);
      }
    });
    let passObj = obj;
    res.render("mainPage", { passObj: passObj });
  });
});

// ****   /recipes/search   load search page
app.get("/recipes/search", (req, res) => {
  res.render("searchPage");
});

// ****   /recipes/results   after submitting search, results page
app.post("/recipes/search/results", (req, res) => {
  jsonfile.readFile(recipes, (err, obj) => {
    if (err) {
      console.log("err");
    }
    let passObj = {};
    passObj.search = req.body.search;
    passObj.recipes = obj.recipes;
    res.render("resultPage", { passObj: passObj });
  });
});

// ****   setting port number for localhost
app.listen(3000, () => {
  console.log("port: 3000 ready & listening");
});
