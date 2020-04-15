const path = require("path");
const express = require("express");

const app = express();

const router = express.Router();

const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");

router.get("/", (req, res) => {
  //   const data = { name: "Sterling Archer" };
  res.render("home");
  // res.send("<h1>Welcome to Recipes...</h1>");
});

module.exports = router;
