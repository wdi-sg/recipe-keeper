const jsonfile = require('jsonfile');
const express = require('express');
const methodOverride = require('method-override');
const reactEngine = require('express-react-views').createEngine();
const app = express();

const FILE = 'ingredient.json';
const testFile = 'dataTest.json';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

app.use(express.static(__dirname+'/public/')); // uses public for CSS styles

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));

app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
/**
 * ===================================
 * Routes
 * ===================================
 */
 //Home Page
 app.get('/', (req,res)=>{
    jsonfile.readFile(testFile, (err,obj)=>{
        const recipeObj = obj.recipes;//looks into recipe object
        res.render('home', {objToRender : recipeObj});
    });
 })
//Add recipe Page
app.get('/recipe/new', (req,res)=>{
    res.render('new');
})

 /**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, ()=> console.log(
    '~~~~~Listening turned on~~~~~~')
);