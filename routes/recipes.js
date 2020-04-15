const express = require("express");
const app = express();

const router = express.Router();

const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");

const allRecipesArr = [];

router.post("/recipes", (req, res) => {
  console.log(req.body);
  //   allRecipesArr.push({
  //     title: req.body.title,
  //     ingredients: req.body.ingredients,
  //     instructions: req.body.instructions,
  //   });
  // res.render("recipes", { allRecipesArr });

  const addedRecipe = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  res.render("recipes", addedRecipe);
});

exports.routes = router;
exports.allRecipesArr = allRecipesArr;
