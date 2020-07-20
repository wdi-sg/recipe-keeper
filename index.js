//===================================
// Configurations and set up
//===================================

const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');// so that we can use PUT and DELETE in express to submit changes via HTTP with the POST method in forms
const FILE_INGREDIENT = 'data/ingredient.json';
const FILE_RECIPE = 'data/recipe.json';


const app = express(); //Init the express app
app.use(express.json());//tell app to use the json modeul;
app.use(express.urlencoded({ //so that we can do request.body later
    extended: true
}));
app.use(methodOverride('_method'));//from using methodOverride above

//setting the layout look to my express project:
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
//this tells express where to look for the view files
app.set('views',__dirname + '/views');
//setting react to be the default view engine
app.set('view engine','jsx');

//testing out how the ingredient.json file looks like on the terminal and on http w/o rendering
app.get('/test', (request, response) => {
    jsonfile.readFile(FILE_INGREDIENT, (err, obj) => {
         if (err) console.error(err);
        console.log("Printing obj[0]: " + obj[0]);
        console.log("Printing obj[0].id: " + obj[0].id);
        console.log("Printing obj[0].name: "+obj[0].name);
        
        let firstIngredientId = obj[0].id;
        let firstIngredientName= obj[0].name;
        let respond = '<div> ID: ' + firstIngredientId + '</div>'+
                        '<div> Ingredient Name: '+firstIngredientName+'</div>'
                    
        response.send(respond);
        // response.render('home', {respondKey: pokeList});
    });
});

//Start with ability to render a form to create a recipe
app.get('/recipes/new',(request, response)=>{
    
    response.render('new');
})

app.post('/recipes',(request, response)=>{
    
    let newRecipe = request.body;
    console.log("this is the newRecipe.id: " + newRecipe.id);
    console.log("this is the newRecipe.name: " + newRecipe.name);
    console.log("this is the newRecipe.ingredients: " + newRecipe.ingredients);
    console.log("this is the newRecipe.instructions: " + newRecipe.instructions);

    //read the data in the data file first before pushing new recipe in
    jsonfile.readFile(FILE_RECIPE, (err,obj)=>{
        if (err) console.error(err);
        obj.recipes.push(newRecipe);
        //we don't need to reassign this, but just for clarity sake...
        let changedObj = obj;
        //write file
        jsonfile.writeFile(FILE, changedObj,{spaces:2},(err)=>{
            if(err) console.log(err);
            let recipesList = changedObj.recipes;
            console.log("Printing out recipesList: "+recipesList);
            response.render('home',{respondKey: recipesList});
        });
    });
});

//ability to see a list of all the recipes in the root directory
app.get('/recipes/', (request, response)=>{
    jsonfile.readFile(FILE_RECIPE, (err,obj)=>{
        if (err) console.log(err);
        console.log("Begin reading file to render recipe list into home.jsx: ");
        let recipesList = obj.recipes;
        response.render('home',{respondKey: recipesList});
    });
});

//show a single recipe:
app.get('/recipes/:id',(request, response)=>{
    let recipeId = parseInt(request.params.id)-1;
    console.log("Printing out type of recipeId: "+typeof(recipeId)); //this will get you a data type of number
    let selectedRecipeIndex;
    console.log("Printing out recipeId: "+recipeId);
    //get json from specified file
    jsonfile.readFile(FILE_RECIPE, (err,obj)=>{
        if (err) console.log(err);
        //conditional statement to match request.params.id with the correct index number in recipe array
        console.log("Printing out obj.recipes[0].title: " + obj.recipes[0].title);
        console.log("Printing out obj.recipes[0].ingredients: " + obj.recipes[0].ingredients);
        console.log("Printing out obj.recipes[0].instructions: " + obj.recipes[0].instructions);
        for (let i = 0; i < obj.recipes.length; i++){
            if (recipeId == obj.recipes.indexOf(obj.recipes[i])){ //find the index number 
                selectedRecipeIndex = i;
            }
        }
        console.log("Printing out selected recipe index: "+selectedRecipeIndex);
        let respond = obj.recipes[selectedRecipeIndex];
        response.render('single',respond);
    });
});

//able to edit a single recipe
app.get('/recipes/:id/edit', (request, response)=>{
    let recipeId = parseInt(request, params.id);
    let selectedRecipeIndex;
    console.log("Printing out recipeId: " + recipeId);
    jsonfile.readFile(FILE_RECIPE, (err,obj)=>{

    })
    //get json from specified file

})

//*=============*/
//ROUTES here
//============== */

app.get('/hello', (request, response) => {
    response.send('hello, you are connected to recipe-keeper');
});


//*===================================
//Listening to requests on port 3002
//*===================================

app.listen(3002, () => console.log('~~~ Tuning in to the waves of port 3002 ~~~'));