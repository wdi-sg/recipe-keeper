const jsonfile = require("jsonfile");

const FILE = "data.json";

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
/*********************************************************************************** */
/*********************************************************************************** */


// Home page where you can view all recipes, can click into individual recipes or add a new recipe
app.get("/home", (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    const data = {
      recipe: obj.recipes
    };
    response.render("home", data);
  });
});
/*********************************************************************************** */
/*********************************************************************************** */

// Add a new recipe page, submission will bring you to 
app.get("/new", (request, response) => {
    response.render("form");
  });
/*********************************************************************************** */
/*********************************************************************************** */

// Page that renders each individual recipe when selected from the home page
app.get("/:recipename", (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let recipepage;
    for (let i = 0; i < obj.recipes.length; i++) {
      let selectedRecipe = obj.recipes[i]["name"];
      if (selectedRecipe === request.params.recipename) {
        recipepage = obj.recipes[i];
      }
    }
    response.render("individualrecipe", recipepage);
  });
});

/*********************************************************************************** */
/*********************************************************************************** */

// Notify the user that recipe has been successfully added, ask if want to add new recipe or go back to home page
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

// Edit Recipes that currently exist
app.get("/:recipename/edit", (request, response) =>{
    jsonfile.readFile(FILE, (err, obj) => {
        let recipepage;
        for (let i = 0; i < obj.recipes.length; i++) {
          let selectedRecipe = obj.recipes[i]["name"];
          if (selectedRecipe === request.params.recipename) {
            recipepage = obj.recipes[i];
          }
        }
        response.render("edit", recipepage);
      });

   
})

app.put("/edited/:recipename", (request, response)=>{
    let updateName = request.params.recipename;
       let updateRecipe = request.body;
    
    jsonfile.readFile(FILE, (err, obj) => {
        for(i = 0; i < obj.recipes.length; i++){
            let selectedRecipe = obj.recipes[i]["name"];
              if(selectedRecipe === updateName){
                obj.recipes.splice(obj.recipes[i] ,1,updateRecipe) 
              }
          }
        jsonfile.writeFile(FILE, obj, err => {
       
         
        });
        response.render("edited", updateRecipe);
      });
      
})
// Delete Recipes

app.listen(3000);
