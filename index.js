const express = require("express");
const jsonfile = require("jsonfile");
const methodOverride = require("method-override");
const reactEngine = require("express-react-views").createEngine();
const classes = require("./classes");
const ingredient = classes.ingredient;
const recipe = classes.recipe;
const ingredientsJSON = "ingredient.json";
let ingredientsObj = {};

const app = express();
app.use(methodOverride("_method"));
app.engine("jsx", reactEngine);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.static(__dirname + "/public/"));

//we keep the json file in the server and read from it so that if
//the json file is updated with more ingredients, the list/s
//posted to webpages get updated
jsonfile.readFile(ingredientsJSON, (err, obj) => {
  if (err) {
    console.log(err);
  }
  ingredientsObj["ingredients"] = obj["ingredients"];
  console.log(ingredientsObj["ingredients"][2]);
  
});

app.get("/home", (request, response) => {
  //replace these later on with request.body
  //use this home to display available recipes
  let cheese = new ingredient(2, "cheese");
  let rot = new ingredient(3, "rot");
  let badCheese = new recipe("bad CHeese", [cheese, rot], "do not eat");

  objVariableToSend = { recipe: badCheese };
  response.render("home", objVariableToSend);
});

app.get("/create-recipe", (request, response) => {
  //use this to send the form to create the request
  let obj = {};
  obj["ingredients"] = ingredientsObj["ingredients"];

  response.render("create-recipe", obj);
});

app.post("/create-recipe", (request, response) => {
  console.log("recipe " + request.body.title + " received!");
  console.log("ingredients: " + request.body.ingredients);
  
  let obj = {};
  obj["ingredients"] = ingredientsObj["ingredients"];
  response.render("create-recipe", obj);
});

app.post("/home/recipe-created", (request, response) => {
  //here's where we will send our recipe to
  //this will accept the recipe and display it
  //it will also write the new recipe to the data.json
  //get data from request.body
  let recipe = request.body;
  objVariableToSend = { recipe: recipe };

  response.render("recipe-created", objVariableToSend);
});

app.listen(3000, () => console.log("~~~ Tuning in to the waves of port 3000 ~~~"));
