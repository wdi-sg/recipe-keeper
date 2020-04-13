////////////////////////////////
////////////////////////////////
///////  Initialisation  ///////
////////////////////////////////
////////////////////////////////

const jsonfile = require('jsonfile');
const FILE = 'data.json';

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



////////////////////////////////
////////////////////////////////
////////  GET Requests  ////////
////////////////////////////////
////////////////////////////////

// See all recipes
app.get("/recipes/", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    res.render("index", {"data": data})
  })
})

// List of recipes
app.get("/recipes/cuisine/:type", (req, res) => {
})

// Create a new recipe
app.get("/recipes/new", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    const ingredients = data.ingredients.map(ingredient => {
      return ingredient.name;
    });

    res.render("form-add", {"ingredients": ingredients});
  })
})

// Create confirmation
app.get("/recipes/:id/created", (req, res) => {
  res.render("created", {"id": req.params.id});
})

// Show single recipe
app.get("/recipes/:id", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    const recipe = data.recipes[req.params.id];

    res.render("recipe", {"id": req.params.id, "recipe": recipe});
  })
})

// Edit a recipe
app.get("/recipes/:id/edit", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    const ingredients = data.ingredients.map(ingredient => {
      return ingredient.name;
    });

    const info = {
      "id": req.params.id,
      "ingredients": ingredients,
      "recipe": data.recipes[req.params.id]
    }

    res.render("form-edit", info)
  })
})

// Edit confirmation
app.get("/recipes/:id/edited", (req, res) => {
  res.render("edited", {"id": req.params.id});
})

// Confirm Delete
app.get("/recipes/:id/confirm", (req, res) => {
  res.render("confirmation", {"id": req.params.id});
})

// Delete confirmation
app.get("/recipes/:id/deleted", (req, res) => {
  res.render("deleted", {"id": req.params.id});
})



////////////////////////////////
////////////////////////////////
////////  POST Requests  ///////
////////////////////////////////
////////////////////////////////

// Create a new recipe
app.post("/recipes", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    const formValues = req.body;
    data.recipes.push(formValues);

    jsonfile.writeFile(FILE, data, (error) => {
      res.redirect(`/recipes/${data.recipes.length-1}/created`);
    })
  })
})



////////////////////////////////
////////////////////////////////
////////  PUT Requests  ////////
////////////////////////////////
////////////////////////////////

// Update a recipe
app.put("/recipes/:id", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    const formValues = req.body;
    data.recipes[req.params.id] = formValues;

    jsonfile.writeFile(FILE, data, (error) => {
      res.redirect(`/recipes/${req.params.id}/edited`);
    })
  })
})



////////////////////////////////
////////////////////////////////
//////  DELETE Requests  ///////
////////////////////////////////
////////////////////////////////

// Delete a recipe
app.delete("/recipes/:id", (req, res) => {
  jsonfile.readFile(FILE, (error, data) => {
    data.recipes.splice(req.params.id, 1);
    console.log(data.recipes)

    jsonfile.writeFile(FILE, data, (error) => {
      res.redirect(`/recipes/${req.params.id}/deleted`);
    })
  })
})



////////////////////////////////
////////////////////////////////
///////  Listen to Port  ///////
////////////////////////////////
////////////////////////////////

app.listen(3000, () => {
  console.log("~~~ Tuning in to the waves of port 3000 ~~~")
})