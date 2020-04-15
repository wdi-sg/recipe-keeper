const express = require("express");
const app = express();

const router = express.Router();

const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");

router.get("/recipes/new", (req, res) => {
  res.render("addRecipe");

  // res.send(
  //   '<form action="/thankyou" method="POST"><input type="text" name="title"><button type="submit">Add Reicpe</button></form>'
  // );
});

module.exports = router;
