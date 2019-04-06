const express = require("express");
const jsonfile = require('jsonfile');
const methodOverride = require("method-override");
const reactEngine = require("express-react-views").createEngine();
const classes = require('./classes');
const ingredient = classes.ingredient;
const recipe = classes.recipe;


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
app.use(express.static(__dirname+"/public/"));

app.get("/home", (request, response) => {
let cheese = new ingredient(2,"cheese");
let badCheese = new recipe("bad CHeese", [cheese], "do not eat");
objVariableToSend = {"recipe":badCheese};
response.render("home", objVariableToSend);
});

app.listen(3000, () =>
console.log("~~~ Tuning in to the waves of port 3000 ~~~")
);