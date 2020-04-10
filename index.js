// init an express app
const express = require('express');
const app = express();

// let forms override methods with "?_met=put"
const methodOverride = require('method-override');
app.use(methodOverride('_met'));

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

// file service routes
app.use(express.static('static'));
let options = {
  root: ('static'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

app.get('/static/:filename', (req, res) => {
  let filename = req.params.filename;
  if (filename.includes('css')) {
    res.type('.css');
  }
  res.sendFile(filename, options, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sent", filename);
    }
  });
});

// RESTful routes
app.get('/recipes/new', (req, res) => {
  let data = {
    recipe: fileData.recipe_template
  };
  res.render('newrecipe', data);
});

app.get('/recipes', (req, res) => {
  res.render('recipelist');
});

app.get('/recipes/:id', (req, res) => {
  let recipe;
  for (let obj of fileData.recipes) {
    if (obj.id === Number(req.params.id)) {
      recipe = obj;
    }
  }
  res.send(recipe);
});

app.post('/recipes', (req, res) => {
  let form = req.body;
  let name = form.recipename;
  let instructions = form.instructions.split("\r\n");

  let ingredients = [];
  for (let key in form) {
    if (key.includes('ing')) {
      let id = String(key).split('-')[1];
      let ing = key;
      let qty = `qty-${id}`;

      let ingredient = {
        "id": Number(id),
        "ing": form[ing],
        "qty": form[qty]
      };
      ingredients.push(ingredient);
    }
  }

  let newRecipe = {
    "id": nextId,
    "name": name,
    "ingredients": ingredients,
    "instructions": instructions
  };

  fileData.recipes.push(newRecipe);
  fileData.next_id += 1;

  let writePromise = jsonfile.writeFile(FILE, {data: fileData});
  writePromise
    .then(() => {
      console.log("write");
      res.redirect(`./recipes/${newRecipe.id}`);
    } )
    .catch(err => console.log(err));

});

app.get('/', (req, res) => {
  res.status(301).redirect('./recipes');
});

app.listen(3000, () => console.log("Listening on :3000"));
