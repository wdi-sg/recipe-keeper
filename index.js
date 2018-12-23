const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const FILE = 'ingredient.json';

var publicPath = path.resolve(__dirname, 'public');
var port = process.env.PORT || 3000;
/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
app.use(express.static(publicPath));

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets handlebars to be the default view engine
app.set('view engine', 'jsx');

// Reading ingredient

var ingredients = jsonfile.readFileSync(FILE, (err, pokemon) => {
    if (err) console.error(err);
  });


// Begin Routing

app.get('/', (req, res) => {

});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(port, () => console.log(`~~~ Tuning in to the waves of port ${port} ~~~`));
