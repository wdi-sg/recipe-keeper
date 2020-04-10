const jsonfile = require("jsonfile");

const file = "data.json";

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const reactEngine = require("express-react-views").createEngine();

app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");

app.set("view engine", "jsx");

app.listen(3000, () => console.log(`Server has started on port 3000.`))

app.get('/recipes/new', (req,res) => {
return res.render('form')
})


app.get('/recipes/:id/edit', (req,res)=> {
      const query = parseInt(req.params.id);


      jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj.recipes;
        const result = recipesArr.find((recipe) => {
          return recipe.id === query;
        });
        const data = result;
        res.render("editrecipe", data);
      });

})

app.get('/recipes/:id', (req,res)=> {

      const query = parseInt(req.params.id)

      jsonfile.readFile(file, (err,obj)=> {
            const recipesArr = obj.recipes;


            const result = recipesArr.find( recipe => {
                  return recipe.id===query
            } )

            const data = result 

            res.render('onerecipe', data)

      })

})

app.put('/recipes/:id', (req,res)=> {

      const targetId = parseInt(req.params.id)
      const a = req.body.title;
      const b = req.body.ingredients;
      const c = req.body.instructions;

      jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;

        const target = arr.find( recipe => recipe.id===targetId )

        target.title = a;
        target.ingredients = b;
        target.instructions = c;

        jsonfile.writeFile(file, obj, (err) => {
          err && console.log(`error is`, err);
          res.redirect(`/recipes/${targetId}`);
        });
      });

})

app.delete('/recipes/:id', (req,res)=> {

      const targetId = parseInt(req.params.id);

            jsonfile.readFile(file, (err, obj) => {
              const arr = obj.recipes;

              arr.splice(targetId-1, 1)

              jsonfile.writeFile(file, obj, (err) => {
                err && console.log(`error is`, err);
                res.redirect(`/recipes`);
              });
            });
})


app.get("/recipes", (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    const arr = obj.recipes;

    const data = {
      allRecipes: arr,
    };
    res.render("recipeslist", data);
  });
});

app.post("/recipes", (req, res) => {
  const a = req.body.title;
  const b = req.body.ingredients;
  const c = req.body.instructions;

  jsonfile.readFile(file, (err, obj) => {
    const arr = obj.recipes;

    const newRecipe = {
      id: arr.length + 1,
      title: a,
      ingredients: b,
      instructions: c,
    };

    arr.push(newRecipe);
    jsonfile.writeFile(file, obj, (err) => {
      err && console.log(`error is`, err);
      res.redirect(`/recipes/${newRecipe.id}`);
    });
  });
});


app.get("/", (req, res) => {


      jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;

        const data = {
          allRecipes: arr,
        };
        res.render("recipeslist", data);
      });

});