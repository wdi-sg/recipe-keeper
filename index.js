const jsonfile = require("jsonfile");
const file = "data.json";
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const reactEngine = require("express-react-views").createEngine();

app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(methodOverride("_method"));

app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");

app.get("/", (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    const data = {
      recipes: obj
    };
    res.render("home", data);
  });
});

app.get("/recipes/new", (req, res) => {
  res.render("new");
});

app.post("/recipes/", (req, res) => {
  console.log(req.body);
  jsonfile.readFile(file, (err, obj) => {
    obj.recipes.push(req.body);

    jsonfile.writeFile(file, obj, err => {
      console.log(obj)
    });
  });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
