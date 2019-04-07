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
//**** Home Page ****//
app.get('/', (req,res)=>{

    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;// looks into recipe object

    res.render('home', {objToRender : [recipeObj, categories] });
})

//**** Add recipe Page ****//
app.get('/recipe/new', (req,res)=>{
    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;

    res.render('new', {objToRender : [categories, recipeObj] });
})
app.post('/recipe/newadded', (req,res)=>{

    let dataRecieved = [];
    dataRecieved.push(req.body); //from post request
    console.log("post req: req body");
    console.log(req.body);
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
        let categories = listAllCategories(testFile)
        res.render('success', {objToRender : req.body})
        });
    });
})

//**** View form ****//
app.get('/recipe/:id', (req,res)=>{
    let arrayIndex = parseInt(req.params.id);
    let recipeObj = dataArr[arrayIndex-1];
    console.log('Hello in view request');
    console.log(recipeObj);

    res.render('viewRecipe', {objToRender : recipeObj});
    // res.send('hello');
})

//**** Edit Entry.****//
app.get('/recipe/:id/edit', (req,res)=>{

    let arrayIndex = parseInt(req.params.id);
    let recipeObj = dataArr[arrayIndex-1];
    console.log(recipeObj);

    res.render('edit', {objToRender : recipeObj});
})
app.put('/recipe/:id', (req,res)=>{
    let arrayIndex = parseInt(req.params.id);
    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;// looks into recipe object

    res.render('updated');

    jsonfile.readFile(testFile,(err,obj)=>{
        let recipeObjList = obj.recipes[arrayIndex-1];

            recipeObjList.id = req.body.id;
            recipeObjList.title = req.body.title;
            recipeObjList.category = req.body.category;
            recipeObjList.ingredients = req.body.ingredients;
            recipeObjList.instructions = req.body.instructions;

        jsonfile.writeFile(testFile, obj, (err)=>{
                console.log(err)
        })
    });
})

//**** Delete Entry.****//
app.get('/recipe/:id/delete', (req,res)=>{
    let arrayIndex = parseInt(req.params.id);
    let recipeObj = dataArr[arrayIndex-1];

    res.render('delete', {objToRender : recipeObj});
})
app.delete('/recipe/:id', (req,res)=>{
    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;
    res.render('updated');
    let arrayIndex = parseInt(req.params.id);
    jsonfile.readFile(testFile,(err,obj)=>{
        obj.recipes.splice( arrayIndex - 1 , 1);

        const changedObj = obj;

        jsonfile.writeFile(testFile, changedObj, (err) =>{
            console.log(err)

        })
    });
})

 /**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, ()=> console.log(
    '~~~~~Listening turned on~~~~~~')
);