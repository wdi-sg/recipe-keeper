const express = require("express");
const app = express();
const jsonfile = require("jsonfile");
const file1 = "ingredient.json";
const file2 = "recipe.json";
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// this line below, sets a layout look to your express project
const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);

// this tells express where to look for the view files
app.set("views", __dirname + "/views");

// this line sets handlebars to be the default view engine
app.set("view engine", "jsx");

var ingredients = jsonfile.readFileSync(file1, (err, ingredients) => {});

app.get("/recipes/", (req, res) => {
  jsonfile.readFile(file2, (err, recipes) => {
    console.log(recipes);
    res.render("home", {
      recipes: recipes,
      ingredients: ingredients
    });
  });
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

app.listen(3000, () =>
  console.log("~~~ Tuning in to the waves of port 3000 ~~~")
);
