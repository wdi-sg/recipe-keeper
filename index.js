const express = require("express");
const methodOverride = require("method-override");
const routes = require("./routes");

const app = express();

// express-react-views engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);

// others setup
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname+"/public/"));
app.use(methodOverride("_method"));

app.use("/", routes.home);
app.use("/recipes", routes.recipes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(`Error ${err.status}!!`);
});

app.listen(3000, () =>
  console.log("http://localhost:3000"),
);
