  /**
   * BOILERPLATE SETUP
   * ===================================
   */ 
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

  /**
   * ===================================
   * CREATE NEW RECIPE
   * ===================================
   */ 
app.get("/recipes/new", (req, res) => {
    res.render("New");
  });
  
  app.post("/recipes", (req, res) => {
    let duplicate = false;
    const recipesData = {
        id:req.body.id
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions

    };
  
    const errors = [];
  
    for (key in recipesData) {
      if (recipesData[key] === "") {
        errors.push(key);
      }
    }
  
    const newErr = errors.map(function(err) {
      return "recipes " + err;
    });
  
    console.log(newErr);
  
    const errObj = {
      errorMessage: `There was an error!
      You forgot to input: ${newErr.join(", ")}`
    };
  
    if (errors.length > 0 && !duplicate) {
      res.render("New", errObj);
    } else {
      recipesData.id = parseInt(req.body.id);
      jsonfile.readFile(file, (err, obj) => {
        for (let i = 0; i < obj.recipes.length; i++) {
          if (
            obj.recipes[i].title.toLowerCase() ===
              recipesData.title.toLowerCase() ||
            obj.recipes[i].id === recipesData.id ||
          ) {
            duplicate = true;
            errObj.errorMessage = `There was an error!
            ${recipesData.title} or ${recipesData.id} already exists!`;
          }
        }
        if (duplicate) {
          res.render("New", errObj);
        } else {
          recipesData.title += "";
          recipesData.ingredients += ""; 
          recipesData.instructions += ""; 
          recipesData.id = obj.recipes[obj.recipes.length - 1].id + 1;
          obj.recipes.push(recipesData);
  
          jsonfile.writeFile(file, obj, err => {});
          res.redirect(`/recipes/${recipesData.id}`);
          console.log(obj.recipes.length - 1);
        }
      });
    }
  });

  /**
   * ===================================
   * READ SPECIFIED RECIPE
   * ===================================
   */ 
  app.get("/recipes/:id", (request, response) => {
    // get json from specified file
    jsonfile.readFile(file, (err, obj) => {
      let inputId = parseInt(request.params.id);
      let recipes;
      for (let i = 0; i < obj.recipes.length; i++) {
        let currentrecipes = obj.recipes[i];
  
        if (currentrecipes.id === inputId) {
          recipes = currentrecipes;
        }
      }
  
      if (recipes === undefined) {
        // send 404 back
        response.status(404);
        response.send("404 Not Found");
      } else {
        response.render("recipesSearch", recipes);
      }
    });
  });

  /**
   * ===================================
   * UPDATE/EDIT SPECIFIED RECIPE
   * ===================================
   */ 
  app.get("/recipes/:id/edit", (request, response) => {
    let index = parseInt(request.params.id) - 1;
    jsonfile.readFile(file, (err, obj) => {
      const recipes = obj.recipes[index];
      const data = {
        id: recipes.id,
        name: recipes.name,
        img: recipes.img,
        height: recipes.height,
        weight: recipes.weight
      };
      response.render("edit", data);
    });
  });
  
  app.put("/recipes/:id", (request, response) => {
    const index = parseInt(request.params.id) - 1;
    const changedName = request.body.name;
    const changedImage = request.body.img;
    const changedHeight = request.body.height;
    const changedWeight = request.body.weight;
  
    jsonfile.readFile(file, (err, obj) => {
      const recipes = obj.recipes[index];
      recipes.name = changedName;
      recipes.img = changedImage;
      recipes.height = changedHeight;
      recipes.weight = changedWeight;
  
      jsonfile.writeFile(file, obj, err => {
        const data = {
          recipes: obj.recipes
        };
        console.log(data);
        response.redirect(`/recipes/${parseInt(index) + 1}`);
      });
    });
  });
  
  /**
   * ===================================
   * DELETE RECIPE
   * ===================================
   */ 
  app.get("/recipes/:id/delete", (request, response) => {
    const index = parseInt(request.params.id) - 1;
    jsonfile.readFile(file, (err, obj) => {
      const recipes = obj.recipes[index];
      console.log("index is", index);
      const data = {
        name: recipes.name,
        id: recipes.id
      };
      response.render("Delete", data);
    });
  });
  
  app.delete("/recipes/:id", (request, response) => {
    const index = parseInt(request.params.id);
    console.log("index is", index);
  
    jsonfile.readFile(file, (err, obj) => {
      console.log("deleted", obj.recipes[index]);
      //Joyce edited the console.log to remove the .name because it was causing an error
      obj.recipes.splice(index - 1, 1);
      for (let i = 0; i < obj.recipes.length; i++) {
        obj.recipes[i].id = i+1;
      }
  
      // console.log(obj.recipes);
      jsonfile.writeFile(file, obj, err => {
        const data = {
          recipes: obj.recipes
        };
        response.render("index", data);
      });
    });
  });
  
  app.get("/", (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
      const data = {
        recipes: obj.recipes
      };
      response.render("Index", data);
    });
  });
  
  app.get("*", (request, response) => {
    response.send("404 Not Found");
  });
  
  /**
   * ===================================
   * Listen to requests on port 3000
   * ===================================
   */
  app.listen(3000, () =>
    console.log("~~~ Tuning in to the waves of port 3000 ~~~")
  );
  