const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');// so that we can use PUT and DELETE in express to submit changes via HTTP with the POST method in forms
const FILE = 'ingredient.json';


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

//*===========*/
//SET UP ingredient.json to have "recipes" as a property name; thereby turning json file into an object
//*===========*/

//testing out how the ingredient.json file looks like on the terminal

app.get('/test', (request, response) => {
    jsonfile.readFile(FILE, (err, obj) => {
        console.log("Begin reading file");
        let firstIngredientName= obj.recipes[0].name;
        let respond = '<div>'+firstIngredientName+'</div>'
        response.send(respond);
        // response.render('home', {respondKey: pokeList});
    });
});

//Start with ability to render a form to create a recipe
app.get('/recipes/new',(request, response)=>{
    
    response.render('new');
})

app.post('/recipes',(request, response)=>{
    console.log("this is the request.body.id: "+request.body.id);
    console.log("this is the request.body.name: "+request.body.name);
    console.log("this is the request.body.ingredients: "+request.body.ingredients);
    console.log("this is the request.body.instructions: "+request.body.instructions);
    let newRecipe = request.body;

    //read the data in the data file first before pushing new recipe in
    jsonfile.readFile(FILE, (err,obj)=>{
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
    jsonfile.readFile(FILE, (err,obj)=>{
        if (err) console.log(err);
        console.log("Begin reading file to render recipe list into home.jsx");
        let recipesList = obj.recipes;
        response.render('home',{respondKey:recipesList});
    });
});


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