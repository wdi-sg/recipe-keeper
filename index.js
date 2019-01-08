const express = require("express");
const app = express();
const jsonfile = require("jsonfile");
const file1 = "ingredient.json";
const file2 = "recipe.json";
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");

app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// this line below, sets a layout look to your express project
const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);

// this tells express where to look for the view files
app.set("views", __dirname + "/views");

// this line sets handlebars to be the default view engine
app.set("view engine", "jsx");

var ingredients = jsonfile.readFileSync(file1, (err, ingredients) => {});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/recipes/", (req, res) => {
  jsonfile.readFile(file2, (err, recipes) => {
    console.log(recipes);
    res.render("home", {
      recipes: recipes,
      ingredients: ingredients
    });
  });
});

app.get("/recipes/new", (req, res) => {
  let form =
    "<html>" +
    "<body>" +
    "<h1>Create a New Recipe ! </h1>" +
    '<form action = "/recipe" method= "POST">' +
    'ID : <input type="number" name="id"> <br><br>' +
    'Name : <input type="text" name="name"> <br><br>' +
    'Ingredient 1 ID : <input type="text" name="ingredients[0][id]"> <br><br>' +
    'Amount for Ingredient 1 : <input type="text" name="ingredients[0][amount]"> <br><br>' +
    'Ingredient 2 ID : <input type="text" name="ingredients[1][id]"> <br><br>' +
    'Amount for Ingredient 2 : <input type="text" name="ingredients[1][amount]"> <br><br>' +
    'Instruction 1 :<input type="text" name="instructions[0]"> <br><br>' +
    'Instruction 2 :<input type="text" name="instructions[1]"> <br><br>' +
    'Instruction 3 :<input type="text" name="instructions[2]"> <br><br>' +
    '<input type="submit" value="Submit">' +
    "</form>" +
    "</body>" +
    "</html>";

  res.send(form);
});

app.get("/recipes/:name", (req, res) => {
  //check thru recipe.json for recipe ingredients id

  jsonfile.readFile(file2, (err, recipes) => {
    var name = req.params.name.toLowerCase();

    for (i = 0; i < recipes.length; i++) {
      if (
        name ==
        recipes[i].name
          .toLowerCase()
          .split(" ")
          .join("")
      ) {
        //ingredientsID
        //filter ingredients to only have the ID
        var recipeIngredients = recipes[i].ingredients;

        var ingredientsFiltered = [];

        for (var j = 0; j < recipeIngredients.length; j++) {
          var temp = ingredients.filter(function(el) {
            return el.id == recipeIngredients[j].id;
          });

          if (temp.length > 0) {
            temp[0].amount = recipeIngredients[j].amount;
            ingredientsFiltered.push(temp[0]);
          }
        }

        res.render("recipe", {
          ingredients: ingredientsFiltered,
          recipeName: recipes[i].name,
          instructions: recipes[i].instructions
        });
        return;
      }
    }
    res.send("404: Page Not found");
  });
});

app.get("/recipes/:id/edit", (req, res) => {
  let id = req.params.id;

  jsonfile.readFile(file2, (err, recipes) => {
    for (i = 0; i < recipes.length; i++) {
      if (id == recipes[i].id) {
        let form =
          "<html>" +
          "<body>" +
          "<h1>Edit Existing Recipe </h1>" +
          '<form method ="POST" >' +
          'ID : <input type="number" name="id" value="' +
          recipes[i].id +
          '"> <br><br>' +
          'Name : <input type="text" name="name" value="' +
          recipes[i].name +
          '"> <br><br>' +
          'Ingredient 1 ID : <input type="text" name="ingredients[0][id]" value="' +
          recipes[i].ingredients[0].id +
          '"> <br><br>' +
          'Amount for Ingredient 1 : <input type="text" name="ingredients[0][amount]" value="' +
          recipes[i].ingredients[0].amount +
          '" > <br><br>' +
          'Ingredient 2 ID : <input type="text" name="ingredients[1][id]" value="' +
          recipes[i].ingredients[1].id +
          '"> <br><br>' +
          'Amount for Ingredient 2 : <input type="text" name="ingredients[1][amount]" value="' +
          recipes[i].ingredients[1].amount +
          '"> <br><br>' +
          'Instruction 1 :<input type="text" name="instructions[0]" value="' +
          recipes[i].instructions[0] +
          '"> <br><br>' +
          'Instruction 2 :<input type="text" name="instructions[1]" value="' +
          recipes[i].instructions[1] +
          '"> <br><br>' +
          'Instruction 3 :<input type="text" name="instructions[2]" value="' +
          recipes[i].instructions[2] +
          '"> <br><br>' +
          '<input type="submit" value="Update" formaction="/recipes/' +
          recipes[i].id +
          '?_method=put">' +
          '<input type="submit" value="Delete" formaction="/recipes/' +
          recipes[i].id +
          '?_method=delete">' +
          "</form>" +
          "</body>" +
          "</html>";

        res.send(form);
        return;
      }
    }

    res.send("404: Page Not found");
  });
});

app.post("/recipe", (req, res) => {
  jsonfile.readFile(file2, (err, recipes) => {
    recipes.push(req.body);

    jsonfile.writeFile(file2, recipes, { spaces: 1 }, err => {
      res.send("successfully saved!");
    });
  });
});

app.put("/recipes/:id", (req, res) => {
  jsonfile.readFile(file2, (err, recipes) => {
    let id = req.params.id;
    for (i = 0; i < recipes.length; i++) {
      if (id == recipes[i].id) {
        recipes[i].id = req.params.id;
        recipes[i].name = req.body.name;
        recipes[i].ingredients[0].id == req.body.ingredients[0].id;
        recipes[i].ingredients[0].amount == req.body.ingredients[0].amount;
        recipes[i].ingredients[1].id == req.body.ingredients[1].id;
        recipes[i].ingredients[1].amount == req.body.ingredients[1].amount;
        recipes[i].instructions[0] == req.body.instructions[0];
        recipes[i].instructions[1] == req.body.instructions[1];
        recipes[i].instructions[2] == req.body.instructions[2];
        console.log(recipes);
        jsonfile.writeFile("recipe.json", recipes, { spaces: 1 }, err => {
          res.send("successfully saved!");
          return;
        });
      }
    }
  });
});

app.delete("/recipes/:id", (req, res) => {
  jsonfile.readFile(file2, (err, recipes) => {
    let id = req.params.id;
    for (i = 0; i < recipes.length; i++) {
      if (id == recipes[i].id) {
        recipes.splice(i, 1);

        jsonfile.writeFile("recipe.json", recipes, { spaces: 1 }, err => {
          res.send("successfully saved!");
          return;
        });
      }
    }
  });
});

app.listen(3000, () =>
  console.log("~~~ Tuning in to the waves of port 3000 ~~~")
);
