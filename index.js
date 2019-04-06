/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
const jsonfile = require('jsonfile');
//console.log("about to require express");
const express = require('express');
const app = express();
// console.log("done creating app");

const file = 'data.json';

//serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static(__dirname + '/public/'));

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');



/**
 * ===================================
 * Request Handler
 * ===================================
 */
var testFunction = function(request, response) {
    jsonfile.readFile(file, (err, obj) => {
        console.log(obj);
    })
    // res.render('create')
    response.send("hello world");
}



/**
 * ===================================
 * Routes
 * ===================================
 */
 app.get('/', testFunction);



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
console.log('~~~ Tuning in to the waves of port 3000 ~~~')
const port = 3000;
// console.log("start listening");
app.listen(port)
// console.log("done listening");