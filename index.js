const jsonfile = require("jsonfile");

const FILE = "data.json";

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const reactEngine = require("express-react-views").createEngine();

app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");

app.set("view engine", "jsx");

app.get("/", (req, res) => {
  //   res.send("hello world");
  res.render("Home");
});

app.get("/ingredients/new", (req, res) => {
  res.render("NewIngredient");
});

app.get("/recipes/new", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    const ingredients = obj.ingredients;

    data = {
      ingredients: ingredients
    };

    res.render("NewRecipe", data);
  });
});

app.get("/recipes/", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    const recipes = obj.recipes;

    data = {
      recipes: recipes
    };

    res.render("AllRecipes", data);
  });
});

app.post("/ingredients", (req, res) => {
  console.log("req.body ****************", req.body);
  const { ingredientName, ingredientAmount, ingredientNotes } = req.body;

  const newIngredient = {
    name: ingredientName,
    amount: ingredientAmount,
    notes: ingredientNotes
  };

  jsonfile.readFile(FILE, (err, obj) => {
    obj.ingredients.push(newIngredient);

    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.error(err);
      }


      res.render("Home");

      //   res.render("AllRecipes");
    });
  });
});

app.post("/recipes", (req, res) => {
  let { recipeTitle, recipeIngredients, recipeInstructions } = req.body;

  if (Array.isArray(recipeIngredients)) {
    recipeIngredients.forEach((ingredient, i, ingredients) => {
      ingredients[i] = JSON.parse(ingredient);
    });
  } else {
    recipeIngredients = [JSON.parse(recipeIngredients)];
  }

  const newRecipe = {
    title: recipeTitle,
    ingredients: recipeIngredients,
    instructions: recipeInstructions
  };

  jsonfile.readFile(FILE, (err, obj) => {
    obj.recipes.push(newRecipe);

    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.error(err);
      }
      //   res.send("recipe added");
      const recipes = obj.recipes;

      data = {
        recipes: recipes
      };

      res.render("AllRecipes", data);
    });
  });
});

app.get("/recipes/:id", (req, res) => {
  //   console.log("req.params", req.params);

  const recipeId = req.params.id;

  jsonfile.readFile(FILE, (err, obj) => {
    const recipes = obj.recipes;

    const recipe = recipes[recipeId];

    data = {
      recipe: recipe,
      recipeId: recipeId
    };

    res.render("SingleRecipe", data);
  });
});

app.get("/recipes/:id/edit", (req, res) => {
  const recipeId = req.params.id;

  jsonfile.readFile(FILE, (err, obj) => {
    const recipes = obj.recipes;
    const recipe = recipes[recipeId];

    data = {
      recipeId: recipeId,
      recipe: recipe
    };

    res.render("EditRecipe", data);
  });
});

app.put("/recipes/:id", (req, res) => {
  const recipeId = req.params.id;
  let { recipeTitle, recipeIngredients, recipeInstructions } = req.body;

  if (!recipeIngredients) {
    jsonfile.readFile(FILE, (err, obj) => {
      const recipes = obj.recipes;
      const recipe = recipes[recipeId];

      data = {
        recipeId: recipeId,
        recipe: recipe,
        missingIngredients: true
      };

      res.render("EditRecipe", data);
    });
  } else if (Array.isArray(recipeIngredients)) {
    recipeIngredients.forEach((ingredient, i, ingredients) => {
      ingredients[i] = JSON.parse(ingredient);
    });
  } else {
    recipeIngredients = [JSON.parse(recipeIngredients)];
  }

  if (recipeIngredients) {
    const updatedRecipe = {
      title: recipeTitle,
      ingredients: recipeIngredients,
      instructions: recipeInstructions
    };

    jsonfile.readFile(FILE, (err, obj) => {
      const recipes = obj.recipes;
      recipes[recipeId] = updatedRecipe;

      jsonfile.writeFile(FILE, obj, err => {
        res.send("recipe edited!");
      });
    });
  }
});

app.get("/recipes/:id/edit", (req, res) => {
  const recipeId = req.params.id;

  jsonfile.readFile(FILE, (err, obj) => {
    const recipes = obj.recipes;
    const recipe = recipes[recipeId];

    data = {
      recipeId: recipeId,
      recipe: recipe
    };

    res.render("EditRecipe", data);
  });
});

app.get("/recipes/:id/delete", (req, res) => {
  const recipeId = req.params.id;

  jsonfile.readFile(FILE, (err, obj) => {
    const recipes = obj.recipes;
    const recipe = recipes[recipeId];

    data = {
      recipeId: recipeId,
      recipe: recipe
    };

    res.render("DeleteRecipe", data);
  });
});

app.delete("/recipes/:id", (req, res) => {
  const recipeId = req.params.id;

  jsonfile.readFile(FILE, (err, obj) => {
    const recipes = obj.recipes;

    recipes.splice(recipeId, 1);

    jsonfile.writeFile(FILE, obj, err => {
      res.send("recipe DELETED!!!!!");
    });
  });
});

app.listen(3000);
