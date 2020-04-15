const express = require("express");

const addRecipeRoutes = require("./routes/addRecipe.js");
const homeRoutes = require("./routes/home.js");
const recipes = require("./routes/recipes.js");

const app = express();
const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);

// this tells express where to look for the view files
app.set("views", __dirname + "/views");

// this line sets react to be the default view engine
app.set("view engine", "jsx");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.get("/recipes/new", (req, res) => {
//   res.send(
//     '<form action="/thankyou" method="POST"><input type="text" name="title"><button type="submit">Add Reicpe</button></form>'
//   );
// });

// app.post("/thankyou", (req, res) => {
//   console.log(req.body);
//   res.send("thank you for adding");
// });

app.use(addRecipeRoutes);
app.use(recipes.routes);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Recipes...</h1>");
// });

app.use(homeRoutes);

app.listen(3000, () => {
  console.log("Listening port 3000");
});
