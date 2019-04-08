const jsonfile = require('jsonfile');
const fs = require('fs');
const express = require('express');
const methodOverride = require('method-override');
const reactEngine = require('express-react-views').createEngine();
const app = express();
const uuidv1 = require('uuid/v1'); // UUIDs (Universally Unique IDentifier)

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

var currentDateAndTime = function(){
    let date = new Date();
    let dateAndTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ` + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return dateAndTime;
}


let recursiveFunction = function (arr, x, start, end) {
    // Base Condtion
    if (start > end) return false;
    // Find the middle index
    let mid=Math.floor((start + end)/2);
    // Compare mid with given key x
    if (arr[mid]===x) return true;
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
    console.log("found");
else console.log("not found");
/**
 * ===================================
 * Routes
 * ===================================
 */
//**** Home Page ****//
app.get('/', (req,res)=>{

    let categories = listAllCategories(testFile);
    let recipeObj;// looks into recipe object
    let searchBy;
    let query = req.query.searchBy;
    if(query !== undefined){
        searchBy = query.toLowerCase();
        console.log("when searchby has value")
        recipeObj = [];
        for(let i = 0; i<dataArr.length; i++){
            if(dataArr[i].category == query){
                recipeObj.push(dataArr[i]);
            }
        }
        res.render('home', {objToRender : [recipeObj, categories] });
    } else {
        console.log("when searchby has NO VALUE");
        recipeObj = dataArr;
        console.log(recipeObj); // [{},{}]
        res.render('home', {objToRender : [recipeObj, categories] });
    }

    // res.render('home', {objToRender : [recipeObj, categories] });
})

//**** Add recipe Page ****//
app.get('/recipe/new', (req,res)=>{
    let categories = listAllCategories(testFile);
    let recipeObj = dataArr;


    res.render('new', {objToRender : [recipeObj, categories] });
})
app.post('/recipe/newadded', (req,res)=>{
    let id;/////give unique ID without using UUID's.
    let idArr =[];
    let idLargest = 0;
    for(let i = 0; i < dataArr.length; i++){
        id = dataArr[i].id;
        idArr.push(id);
        }
    for(let i = 0; i < idArr.length; i++){
        if(idLargest<idArr[i]){
        idLargest = idArr[i];}
    }
    let categories = listAllCategories(testFile);

    jsonfile.readFile(testFile, (err,obj)=>{
        let recipeEntry ={};

        recipeEntry.id = parseInt(idLargest+1);
        recipeEntry.title = req.body.title;
        recipeEntry.category = req.body.category;
        recipeEntry.ingredients = req.body.ingredients;
        recipeEntry.instructions = req.body.instructions;
        recipeEntry.timeCreated = currentDateAndTime();
        recipeEntry.updated_At = "";

        obj.recipes.push(recipeEntry);

        jsonfile.writeFile(testFile, obj, (err)=>{
            if(err !== null){
                console.log(err);
            }
        });

        let recipeToRender;
        let recipeID = parseInt(idLargest+1);

        for(let i = 0; i < obj.recipes.length; i++){
            let currentRecipe = obj.recipes[i];
            if(currentRecipe.id === recipeID){
                recipeToRender = currentRecipe;

            }
        }
    res.render('success', {objToRender : [recipeToRender, categories]})
    });
})

//**** View form ****//
app.get('/recipe/:id', (req,res)=>{
    let recipeToRender;
    let recipeID = parseInt(req.params.id);
    for(let i = 0; i < dataArr.length; i++){
        let currentRecipe = dataArr[i];
        if(currentRecipe.id === recipeID){
            recipeToRender = currentRecipe;
        }
    }
    res.render('viewRecipe', {objToRender : recipeToRender});
    // res.send('hello');
})

//**** Edit Entry.****//
app.get('/recipe/:id/edit', (req,res)=>{


    let recipeToRender;
    let recipeID = parseInt(req.params.id);
    for(let i = 0; i < dataArr.length; i++){
        let currentRecipe = dataArr[i];
        if(currentRecipe.id === recipeID){
            recipeToRender = currentRecipe;
        }
    }

    res.render('edit', {objToRender : recipeToRender});
})
app.put('/recipe/:id', (req,res)=>{

    let recipeToEdit;
    let recipeID = parseInt(req.params.id);

    res.render('updated');


    jsonfile.readFile(testFile,(err,obj)=>{
    let recipeArrPos;
        //find recipe arr position
    for(let i = 0; i < obj.recipes.length; i++){
        if(obj.recipes[i].id === recipeID){
            recipeArrPos = i;
        }
    }
        let recipeObjList = obj.recipes[recipeArrPos];


            recipeObjList.id = parseInt(req.body.id);
            recipeObjList.title = req.body.title;
            recipeObjList.category = req.body.category;
            recipeObjList.ingredients = req.body.ingredients;
            recipeObjList.instructions = req.body.instructions;
            recipeObjList.updated_At = currentDateAndTime();


        jsonfile.writeFile(testFile, obj, (err)=>{
                console.log(err)
        })
    });
})

//**** Delete Entry.****//
app.get('/recipe/:id/delete', (req,res)=>{

   let recipeToRender;
   let recipeID = parseInt(req.params.id);
    for(let i = 0; i < dataArr.length; i++){
        let currentRecipe = dataArr[i];
        if(currentRecipe.id === recipeID){
            recipeToRender = currentRecipe;
        }
    }
    res.render('delete', {objToRender : recipeToRender});
})
app.delete('/recipe/:id', (req,res)=>{

    res.render('updated');
    let recipeID = parseInt(req.params.id);
    jsonfile.readFile(testFile,(err,obj)=>{
        let recipeArrPos;
        //find recipe arr position
        for(let i = 0; i < obj.recipes.length; i++){
            if(obj.recipes[i].id === recipeID){
                recipeArrPos = i;
            }
        }
        obj.recipes.splice( recipeArrPos , 1);

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