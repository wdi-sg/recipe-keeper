/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

 //========require jsonfile ========
const jsonfile = require('jsonfile');

const FILE = 'data.json';

//========require express ========
const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

//======tell your app to use the module========
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')

app.use(methodOverride('_method'));

// express-react-views
// react
// react-dom
const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// set react to be the default view engine
app.set('view engine', 'jsx');


/**
 * ===================================
 * Routes
 * ===================================
 */

//home page with navigation
app.get('/', (req, res) => {

res.render('home');

})

 /**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(5000, () => console.log('~~~ Tuning in to the waves of port 5000 ~~~'));