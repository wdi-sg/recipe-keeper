const jsonfile = require('jsonfile');
const fs = require('fs');
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
 * Sync Json Data
 * ===================================
 */

let rawdata = fs.readFileSync(testFile);
let dataObj = JSON.parse(rawdata);
let dataArr = dataObj.recipes;
/**
 * ===================================
 * Functions
 * ===================================
 */

//List all categories
var listAllCategories = function(){
    let allCategoriesArr =[];
    let singleCategory;

    for (let i in dataArr){
        singleCategory = dataArr[i].category;
        allCategoriesArr.push(singleCategory);
    }

    let filteredArray = allCategoriesArr.filter(function(item, pos){
        return allCategoriesArr.indexOf(item) == pos;
    });
    return filteredArray;
}

/**
 * ===================================
 * Routes
 * ===================================
 */
 //Home Page
app.get('/', (req,res)=>{

    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;// looks into recipe object

    res.render('home', {objToRender : [recipeObj, categories] });
})
//Add recipe Page
app.get('/recipe/new', (req,res)=>{
    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;

    res.render('new', {objToRender : [categories, recipeObj] });
})
//Exposed Post request for adding
app.post('/recipe/newadded', (req,res)=>{

    let dataRecieved = [];
    dataRecieved.push(req.body); //from post request

    jsonfile.readFile(testFile, (err,obj)=>{
        let recipeEntry ={};

        recipeEntry.id = parseInt(req.body.id);
        recipeEntry.title = req.body.title;
        recipeEntry.category = req.body.category;
        recipeEntry.ingredients = req.body.ingredients;
        recipeEntry.instructions = req.body.instructions;

        obj.recipes.push(recipeEntry);

        jsonfile.writeFile(testFile, obj, (err)=>{
            if(err !== null){
                console.log(err);
            }
        });
    });

    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;

    res.render('home', {objToRender : [categories, recipeObj] });
})

app.get('/recipe/:id', (req,res)=>{
    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;
    let recipeId = [];
    recipeId.push(req.params.id);
    console.log(recipeId);

    res.render('home', {objToRender : [recipeObj, recipeId] });
    // res.send('hello');
})

 /**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, ()=> console.log(
    '~~~~~Listening turned on~~~~~~')
);