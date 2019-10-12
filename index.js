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

app.get('/recipes', (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    data = {
      recipes: obj.recipes
    };
    res.render('index', data);
  })
})

app.get('/recipes/new', (req, res) => {
  res.render('new');
})

app.post('/recipes', (req, res) => {
  console.log(req.body);
  //read the current file
  jsonfile.readFile(file, (err, obj) => {
    data = {
      recipe: req.body
    };
    console.log(data.recipe);
    // push the new recipe into array
    obj.recipes.push(req.body);
    res.render('create', data);
    jsonfile.writeFile(file, obj, {spaces:2}, (err) => {
      console.log(err);
    });
  });
})

app.get('/recipes/:id', (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    data = {
      recipe: obj.recipes[req.params.id],
      id: req.params.id
    };
    res.render('show', data);
  })
})

app.get('/recipes/:id/edit', (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    data = {
      recipe: obj.recipes[req.params.id],
      id: req.params.id
    };
    console.log(data.recipe);
    res.render('edit', data);
  })
})

app.put('/recipes/:id', (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    data = {
      recipe: req.body
    };
    obj.recipes[req.params.id] = req.body;
    console.log(obj.recipes[req.params.id]);
    console.log(req.params.id);
    res.render('update', data);
    jsonfile.writeFile(file, obj, {spaces:2}, (err) => {
      console.log(err);
    });
  })
})

app.delete('/recipes/:id', (req, res) => {
  jsonfile.readFile(file, (err, obj) => {
    data = {
      id: req.params.id,
      recipe: obj.recipes[req.params.id]
    };
    obj.recipes.splice(req.params.id, 1);
    res.render('destroy', data);
    jsonfile.writeFile(file, obj, {spaces:2}, (err) => {
      console.log(err);
    })
  })
})

app.listen(3000);