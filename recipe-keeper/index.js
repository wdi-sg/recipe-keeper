const express = require('express');
const jsonfile = require('jsonfile');
const file = 'data.json';

/**
 * ===================================
 * Configurations and set up for index.js
 * ===================================
 */

// Init express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// Init Method-Override for PUT and DELETE
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
// Init REACT
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/', (request, response) => {
  response.render('home');
});


/**
 * ===================================
 * Listen to requests on port 3000 OR server's port
 * ===================================
 */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`~~~ Listening on port ${port} ~~~`));