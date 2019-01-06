
const jsonfile = require('jsonfile');
const file = 'data.json';

const express = require('express');
const app = express();
;
const path = require('path');
const http = require('http');
const Joi = require('joi');

const recipes = require('./routes/recipes');
const home = require('./routes/home');

app.use(express.static(__dirname+'/public/')); //allows us to serve static content from this public folder
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); //this middleware function parses incoming url requests with url-encoded payloads, such as key-value&key=value, and parses req.body like a json object. extended=true allows us to pass arrays and complex objects using the url encoded format

app.use('/api/recipes', recipes);
app.use('/', home);

//to set env to production, 'export NODE_ENV=production'
//'export NODE_ENV=development'

//export DEBUG=
//export DEBUG=app:startup
//export DEBUG=app:startup,app:db
//export DEBUG=app:startup,app:*

const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();

app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
//export PORT = 5000