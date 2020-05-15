/**
 * ===================================
 * Setting up
 * ===================================
**/

//Declaring dependencies as constants
const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');
//Declaring constant app as express function
const app = express();
//Declaring constant recipe as recipe.json string. It will be passed as argument to be found in folder..
const recipe = 'recipe.json';
//Allows app to use several dependencies
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
//Declaring reactEngine as react create engine function
const reactEngine = require('express-react-views').createEngine();
//Allow app to read from jsx files from /views folder
app.engine('jsx', reactEngine);
app.set('views', __dirname+'/views');
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
**/

app.get('/GC',(request, response)=>{
    response.render('home.jsx');
});

app.get('/GC/add',(request, response)=>{
    response.render('addRecipe.jsx');
})

app.post('/GC/add',(request, response)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
        if(err){
            console.log(err)
        }

        console.log(request.body);
        let name = request.body.name;
        let type = request.body.type;
        let ing = request.body.ingredients;
        let ins = request.body.instructions;

        let ingArr = ing.split(", ");
        ingArr = ingArr.join();
        ingArr = ingArr.split(',');
        console.log(ingArr)
        request.body.ingredients = ingArr;
        console.log(request.body)
        obj["allRecipe"].push(request.body)
        jsonfile.writeFile(recipe, obj, (err)=>{
            response.send("Done Updating");
        })
    })
})

app.get('/GC/AllRecipe', (request,response)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
        console.log(obj)
        let recipeObj = obj["allRecipe"];
        const data = {
            recipeObj: recipeObj
        }
        response.render('recipeList.jsx', data);
    })
})

app.get('/GC/AllRecipe/sortBy?', (request,response)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
        let recipeObj = obj["allRecipe"];
            const data = {
                recipeObj: recipeObj,
                path: request.query.path,
            }
        if(request.query.path === "type"){
            response.render('recipeList.jsx', data);
        } else if (request.query.path === "name"){
            response.render('recipeList.jsx', data);
        }
    })
})

app.get('/GC/edit', (request,response)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
        let recipeObj = obj["allRecipe"];
            const data = {
                recipeObj: recipeObj,
                path: request.query.path,
            }
        response.render('edit.jsx', data);
    })
})

app.get('/GC/edit/:name',(request,response)=>{
    var x = request.params.name;
    jsonfile.readFile(recipe, (err,obj)=>{
        let recipeObj = obj["allRecipe"];
        let selectedRecipe;
        for(var i=0; i<recipeObj.length; i++){
            if(recipeObj[i]["name"] === x){
                selectedRecipe = recipeObj[i];
            }
        }
        const data = {
            recipeObj: selectedRecipe,
            userRequest: x
        }
        response.render('editPage.jsx',data)
    })
})

app.put('/GC/edit/:name',(request, response)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
        if(err){
            console.log(err)
        }
        let name = request.params.name;
        let dataRecieved = request.body;
        let select;

        let ing = request.body.ingredients;
        let ingArr = ing.split(", ");
        ingArr = ingArr.join();
        ingArr = ingArr.split(',');
        console.log(ingArr)
        dataRecieved.ingredients = ingArr;

        for(var i=0; i< obj["allRecipe"].length; i++){
            if(obj["allRecipe"][i]["name"] === name){
                select = obj["allRecipe"][i];
            }
        }
        select.name = dataRecieved.name;
        select.type = dataRecieved.type;
        select.instruction = dataRecieved.instructions;
        select.ingredient = dataRecieved.ingredients
        jsonfile.writeFile(recipe, obj, (err)=>{
            response.send("Done Updating");
        })
    })
})

app.listen(3000, () => console.log('~~~ Tuning into the ports of 3000 ~~~'))