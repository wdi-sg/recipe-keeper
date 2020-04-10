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

// file service routes
app.use(express.static('./static/'));
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
    recipe: {
      name: "",
      ingredients: [
        { id: 1, ingredient: "", qty: "" },
        { id: 2, ingredient: "", qty: "" },
        { id: 3, ingredient: "", qty: "" },
        { id: 4, ingredient: "", qty: "" },
      ],
      instructions: ""
    }
  };
  res.render('newrecipe', data);
});

app.post('/recipes', (req, res) => {
  res.send(req.body);
});


app.get('/', (req, res) => {
  res.render('recipelist');
});

app.listen(3000, () => console.log("Listening on :3000"));
