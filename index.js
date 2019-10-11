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

// Home page where you can view all recipes
app.get("/home", (request, response) => {
    jsonfile.readFile(FILE, (err, obj) => {
       const data = {
           recipe: obj.recipes
       }
       response.render("home", data);
      });
 
});
app.get("/new", (request, response) => {
  response.render("form");
});

app.post("/allrecipes", (request, response) => {
  const newRecipe = request.body;
  jsonfile.readFile(FILE, (err, obj) => {
    obj.recipes.push(newRecipe);
    jsonfile.writeFile(FILE, obj, err => {
      console.log(err);
      response.render("successfuladd");
    });
  });
});
app.get("/allrecipes", (request, response) => {});
// Edit Recipes that currently exist

// Delete Recipes

app.listen(3000);
