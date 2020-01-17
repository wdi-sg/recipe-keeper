const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();

// Configure express
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Method override for PUT and DEL requests
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// React Renderer
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


const listenPort = 3000;
app.listen(3000, () => {console.log(`Listening to incoming input on port ${listenPort}`)});
