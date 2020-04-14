// init an express app
const express = require('express');
const app = express();

// let forms override methods with "?_met=put"
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// create a react engine
const reactEngine = require('express-react-views').createEngine();

// set react as server-side render engine for jsx files
app.engine('jsx', reactEngine);

// tell it where view files are
app.set('views', __dirname + '/views');

// set it as the engine extension
// (so you can do render('home') instead of render('home.jsx')?
app.set('view engine', 'jsx');

// lets you do form parsing in req.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//jsonfile
const jsonfile = require('jsonfile');
const FILE = 'recipes.json';
let fileData, nextId;
let filePromise = jsonfile.readFile(FILE);
filePromise
  .then(obj => {
    fileData = obj.data;
    nextId = obj.data.next_id;
  })
  .catch(err => console.log(err));

// recipe management functions
const parseRecipeForm = function (form) {
  let name = form.recipename;
  let instructions = form.instructions.split("\r\n");

  let ingList = [];
  for (let key in form) {
    if (key.includes('ing')) {
      let id = String(key).split('-')[1];
      let ing = key;
      let qty = `qty-${id}`;

      let ingredient = {
        "ing": form[ing],
        "qty": form[qty]
      };
      ingList.push(ingredient);
    }
  }

  let ingredients = {};
  for (let i = 1; i <= ingList.length; i++) {
    ingredients[i] = ingList[i - 1];
  }
  console.log(ingredients);

  let newRecipe = {
    "name": name,
    "ingredients": ingredients,
    "instructions": instructions
  };

  console.log(newRecipe);
  return newRecipe;
};

// file service - mount ./static firtual path /static
// access via url/static/filename
app.use('/pub', express.static('./static'));
let options = {
  root: ('static'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

// app.get('/static/:filename', (req, res) => {
//   let filename = req.params.filename;
//   if (filename.includes('css')) {
//     res.type('.css');
//   }
//   res.sendFile(filename, options, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("sent", filename);
//     }
//   });
// });

// RESTful routes
app.get('/recipes/new', (req, res) => {
  let data = {
    recipe: fileData.recipe_template
  };
  res.render('recipeform', data);
});

app.get('/recipes', (req, res) => {
  let data = {
    recipes: fileData.recipes
  };
  res.render('recipelist', data);
});

app.get('/recipes/:id', (req, res) => {
  if (!Object.keys(fileData.recipes).includes(req.params.id)) {
    res.status(404).sendFile("404.jpeg", options, (err) => {
      if (err) {
        console.log(err);
      };
  });
    return;
  }

  let recipe = fileData.recipes[req.params.id];
  res.render('recipeview', {'id': req.params.id, 'recipe': recipe});
});

app.put('/recipes/:id', (req, res) => {
  if (!Object.keys(fileData.recipes).includes(req.params.id)) {
    res.status(404).sendFile("404.jpeg", options, (err) => {
      if (err) {
        console.log(err);
      };
    });
    return;
  }

  let form = req.body;
  let newRecipe = parseRecipeForm(form);

  fileData.recipes[req.params.id] = newRecipe;
  let writePromise = jsonfile.writeFile(FILE, {data: fileData});
  writePromise
    .then(() => {
      console.log("write");
      res.redirect(`/recipes/${req.params.id}`);
    } )
    .catch(err => console.log(err));
});

app.delete('/recipes/:id', (req, res) => {
  if (!Object.keys(fileData.recipes).includes(req.params.id)) {
    res.status(404).sendFile("404.jpeg", options, (err) => {
      if (err) {
        console.log(err);
      };
  });
    return;
  }

  let deleteId = req.params.id;
  delete fileData.recipes[deleteId];

  let writePromise = jsonfile.writeFile(FILE, {data: fileData});
  writePromise
    .then(() => {
      console.log("write");
      res.redirect('/recipes');
    } )
   .catch(err => console.log(err));
});

app.get('/recipes/:id/edit', (req, res) => {
  if (!Object.keys(fileData.recipes).includes(req.params.id)) {
    res.status(404).sendFile("404.jpeg", options, (err) => {
      if (err) {
        console.log(err);
      };
    });
    return;
  }

  let recipe = fileData.recipes[req.params.id];
  let data = {
    'recipe': recipe,
    'id': req.params.id
  };
  res.render('recipeform', data);
});

app.post('/recipes', (req, res) => {
  let form = req.body;
  let newRecipe = parseRecipeForm(form);

  let newId = nextId;
  fileData.next_id += 1;
  fileData.recipes[newId] = newRecipe;

  let writePromise = jsonfile.writeFile(FILE, {data: fileData});
  writePromise
    .then(() => {
      console.log("write");
      res.redirect(`/recipes/${newId}`);
    } )
    .catch(err => console.log(err));

});

app.get('/', (req, res) => {
  res.status(301).redirect('./recipes');
});

app.listen(3000, () => console.log("Listening on :3000"));
