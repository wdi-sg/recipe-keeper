/**
 * ===================================
 * Configurations and Global Variables
 * ===================================
 */

const express = require('express');
const jsonfile = require('jsonfile');
const file = 'data.json';
const app = express();
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/**
 * ===================================
 * Routes
 * ===================================
 */

/* ==== Redirect to front page ==== */
app.get('/', (request, response) => {
    response.redirect('/home');
});

/* ==== Home Page ==== */
app.get('/home', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log("Something went wrong when displaying the front page.")
        }
        response.render('home.jsx', obj);
    });
});