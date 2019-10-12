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

app.post("/ingredients", (req, res) => {
  console.log("req.params ****************", req.body);
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
      res.send("ingredient added");
    });
  });
});

app.listen(3000);
