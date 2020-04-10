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

app.get('/', (req, res) => {
  // running this will let express to run home.handlebars file in your views folder
  res.render('home')
})

app.post('/add-recipe', function(req, res) {
    //debug code (output request body)
   console.log("New Recipe Added");
   
  res.render('add-recipe');
  });

  app.get('/add-recipe', function(req, res) {
    //debug code (output request body)
   console.log("New Recipe Added");
   
  res.render('add-recipe');
  });

app.listen(3000, ()=>{
    console.log("Starting cookbook...");
    
});

