const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const methodOverride = require('method-override')

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

////ROUTES
app.get("/recipes/new", (request, response) => {
  console.log("requesting to create new recipe");
  response.render("newRecipeForm");
});

app.get("/recipes/:id", (request, response) => {
  console.log("requesting to see single recipe");

  //see single recipe: read existing json file data
  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      console.log(err);
    } else {
      let recipe;

      //see single recipe: use for loop to find title string in json
      for (let i = 0; i < obj.recipes.length; i++) {
        //see single recipe: check if request is found in json
        if (request.params.id === obj.recipes[i].title) {
          recipe = obj.recipes[i];
        }
      }
      //see single recipe: create key data for render page
      const data = {
        recipe: recipe
      };
      //see single recipe: render see single page
      response.render("singleRecipe", data);
    }
  });
});

app.get("/recipes/:id/edit", (request, response) => {
  console.log("requesting to edit recipe");

  //edit recipe: replace space value to dash value to edit page
  let id = request.params.id.replace(" ", "-");

  //edit recipe: read existing json file data
  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      console.log(err);
    } else {
      let recipe;

      //edit recipe: use for loop to find title string in json
      for (let i = 0; i < obj.recipes.length; i++) {
        //edit recipe step 5: check if request is found in json
        if (request.params.id === obj.recipes[i].title) {
          recipe = obj.recipes[i];
        }
      }
      //edit recipe: create key data for render page
      const data = {
        id: id,
        recipe: recipe
      };
      //edit recipe: render see edit form page
      response.render("editRecipeForm", data);
    }
  });
});

app.put("/recipes/:id", (request, response) => {
  console.log("requesting to post edited recipe");

  //edit recipe: replace dash value to space value for for loop
  let id = request.params.id.replace("-", " ");

  //edit recipe: obtain edit details
  const recipe = request.body;

  //edit recipe: read existing json file data
  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      console.log(err);
    } else {
      //edit recipe: use for loop to find title string in json
      for (let i = 0; i < obj.recipes.length; i++) {
        if (obj.recipes[i].title === id) {
          //edit recipe: override previous date
          obj.recipes[i] = recipe;
        }
      }
      //edit recipe: write/"save" the updated json file
      jsonfile.writeFile(file, obj, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("recipe edited complete");
        }
      });
    }
    response.send("recipe edited complete");
  });
});

app.post("/recipes", (request, response) => {
  console.log("requesting to post new recipe request");

  //read existing json file data
  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      console.log(err);
    } else {
      //obtain newRecipeForm details
      const newRecipe = request.body;

      //push new recipe details to json object
      obj.recipes.push(newRecipe);

      //write/"save" the updated json file
      jsonfile.writeFile(file, obj, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("post new recipe complete");
        }
      });
    }
  });
  response.render("home");
});