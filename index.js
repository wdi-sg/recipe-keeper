const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const methodOverride = require('method-override')

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');


app.get('/recipes/:id/edit', (request, response) => {
    let recipeIdInt = parseInt(request.params.id);
    console.log(request.params.id);
    console.log(recipeIdInt);


    jsonfile.readFile(file, (err,dataObj) => {
        if (err) {
            console.log("Something went wrong when displaying the recipe.");
        } else {
            console.log(recipeIdInt);

            let recipes = dataObj.recipes;
            let recipe = recipes.find(recipe => parseInt(recipe.id) === recipeIdInt);
            console.log(recipe);
            let data = {
                recipe : recipe
            };

            response.render('editform', data);
        }
    });
})

app.put('/recipes/:id', (request, response) => {
    console.log("inside put req");
    let recipeIdInt = parseInt(request.params.id);
    console.log(request.params.id);
    console.log(recipeIdInt);


    jsonfile.readFile(file, (err,dataObj) => {
        if (err) {
            console.log("Something went wrong when displaying the recipe.");
        } else {
            let newCont = request.body;
            console.log(newCont);
            let recipes = dataObj.recipes;
            var index = recipes.findIndex(recipe => parseInt(recipe.id) === recipeIdInt);
            console.log(index);
            dataObj.recipes[index] = newCont;
        }

        jsonfile.writeFile(file,dataObj, (err) => {
                if( err ){
                    console.log("error writing file");
                    console.log(err)
                    response.status(503).send("Error writing file");
                } else {
                    response.send(dataObj.recipes[index].title + ' updated!');
                }
            })

    });
});

//get a single recipe
app.get('/recipes/:id', (request, response) => {
    var recipeIdInt = parseInt(request.params.id);
    console.log(request.params.id);
    console.log(recipeIdInt);


    jsonfile.readFile(file, (err,dataObj) => {
        if (err) {
            console.log("Something went wrong when displaying the recipe.");
        } else {
            console.log(recipeIdInt);

            let recipes = dataObj.recipes;
            let recipe = recipes.find(recipe => parseInt(recipe.id) === recipeIdInt);
            console.log(recipe);
            let data = {
                recipe : recipe
            };

            response.render('onerecipe', data);
        }
    });
});

//Create a new recipe
app.get('/recipes/new', (request, response) =>{
    console.log("getting form");
    jsonfile.readFile(file, (err, dataObj)=>{
        if( err ){
            console.log("error!", err );
        }else{

            const data = {
              recipesList : dataObj.recipes
            };
            response.render('createnew', data);
        }
    });
});

//write new recipe into data.json
app.post('/recipes', (request,response) => {

    console.log("YAY WOW");
    var recipeData = request.body;
    console.log( recipeData );

    // save in data file
    jsonfile.readFile(file, (err, dataObj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        } else {
            console.log("what i currently have");
            console.log(dataObj.recipeData);
            // save data
            dataObj.recipes.push(recipeData);
        }

        jsonfile.writeFile(file, dataObj, (err) => {

            if( err ){
                console.log("error writing file");
                console.log(err)
                response.status(503).send("Error writing file");
            } else {
                //sends response after saving it in the file. for user to know if it was saved in the file.
                console.log( "send response");
                response.send("The new recipe has been saved!");
            }
        });
    });
});

//Create a list of recipes
app.get('/recipes', (request, response) =>{
    jsonfile.readFile(file, (err, dataObj)=>{

        if( err ){
            console.log("error!", err );
        }else{

            const data = {
              recipesList : dataObj.recipes
            };

            response.render('Recipelist', data);
        }
    });
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));