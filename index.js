const jsonfile = require("jsonfile");

const FILE = "data.json";
const INGREDIENT = "ingredient.json";

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
/**
 * ===================================
 * Home Page
 * ===================================
 */


// Home page where you can view all recipes, can click into individual recipes or add a new recipe


app.get("/home", (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    const data = {
      recipe: obj.recipes
    };
    response.render("home", data);
  });
});

/**
 * ===================================
 * Search Functionality
 * ===================================
 */


app.get("/search", (request, response) =>{
  
  jsonfile.readFile(FILE, (err, obj) => {
    const data = {
      recipeArr: obj.recipes,
      query: request.query.query
    }
    response.render("results", data)
  });
  
})

/**
 * ===================================
 * Add a new Recipe
 * ===================================
 */


// Add a new recipe page, submission will bring you to
app.get("/new", (request, response) => {
  jsonfile.readFile(INGREDIENT, (err, obj) => {
    const data = {
      ingredient: obj
    };
    response.render("form", data);
  });
  
});


/**
 * ===================================
 * Ingredients 
 * ===================================
 */

app.get('/ingredients', (request, response) =>{
  jsonfile.readFile(INGREDIENT, (err, obj) => {
    const data = {
      ingredient: obj
    };
    response.render("ingredients", data);
  });
})




/**
 * ===================================
 * Click into ingredients to see which recipes use it
 * ===================================
 */

app.get("/related/:ingredientname", (request, response)=>{
  let ingredient = request.params.ingredientname
  let relatedRecipe= [];
  jsonfile.readFile(FILE, (err, obj) => {
    
    for(let i = 0; i < obj.recipes.length; i++) {
      if(obj.recipes[i].ingredients.includes(ingredient)){
        relatedRecipe.push(obj.recipes[i])
      }
    }
    const data = {
      recipeArr: obj.recipes,
      relatedRecipe: relatedRecipe,
      ingredient: ingredient
    }

    response.render("related", data);
   
  });
})

/**
 * ===================================
 * Individual Recipe Page
 * ===================================
 */

app.get("/:id", (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let recipepage;
    for (let i = 0; i < obj.recipes.length; i++) {
      let selectedRecipe = i + 1;
 
      if (selectedRecipe === parseInt(request.params.id)) {
        recipepage = obj.recipes[i];
      }
    }
    const data = {
      recipelist: obj.recipes,
      recipepage: recipepage
    };

    response.render("individualrecipe", data);
   
  });
});






/**
 * ===================================
 * Notify Users that New Recipe Was added
 * ===================================
 */

app.post("/added", (request, response) => {
  const newRecipe = request.body;
  jsonfile.readFile(FILE, (err, obj) => {
    obj.recipes.push(newRecipe);
    jsonfile.writeFile(FILE, obj, err => {
      console.log(err);
      response.render("successfuladd");
    });
  });
});

/**
 * ===================================
 *Edit a selected Recipe
 * ===================================
 */

app.get("/:id/edit", (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let recipepage;
    for (let i = 0; i < obj.recipes.length; i++) {
      let selectedRecipe = i + 1
      if (selectedRecipe === parseInt(request.params.id)) {
        recipepage = obj.recipes[i];
      }
    }
    const data = {
      recipelist: obj.recipes,
      recipepage: recipepage
    };
    response.render("edit", data);
  });
});

/**
 * ===================================
 * Notify Users that recipe was edited, and change the data.json
 * ===================================
 */

app.put("/edited/:id", (request, response) => {
  let updateId = parseInt(request.params.id);
  let updateRecipe = request.body;

  jsonfile.readFile(FILE, (err, obj) => {
    for (i = 0; i < obj.recipes.length; i++) {
      
      if (i === updateId) {
        obj.recipes.splice(i - 1, 1, updateRecipe);
      } else if(updateId === obj.recipes.length){
        obj.recipes.splice(obj.recipes.length - 1, 1, updateRecipe)
      }
    }
    jsonfile.writeFile(FILE, obj, err => {
      const data= {
        updateRecipe: updateRecipe
      }
      response.render("edited", data);
    });
  });
});


/**
 * ===================================
 * Choose to Delete a particular Recipe
 * ===================================
 */

app.get("/:id/delete", (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let recipepage;
    for (let i = 0; i < obj.recipes.length; i++) {
      
      if (i + 1 === parseInt(request.params.id)) {
        recipepage = obj.recipes[i];
      }
    }
    const data = {
      recipeArr: obj.recipes,
      recipepage: recipepage
    }
    response.render("delete", data);
  });
});

/**
 * ===================================
 * Notify users that it was deleted, edit data.json
 * ===================================
 */

app.delete("/deleted/:id", (request, response) => {
  let deleteId = parseInt(request.params.id);

  jsonfile.readFile(FILE, (err, obj) => {
    for (i = 0; i < obj.recipes.length; i++) {
      if (i  === deleteId) {
        obj.recipes.splice(i - 1, 1);
      }else if(deleteId === obj.recipes.length){
        obj.recipes.splice(obj.recipes.length - 1, 1)
      }
    }
    jsonfile.writeFile(FILE, obj, err => {});
    response.render("deleted");
  });
});





app.listen(3000);
