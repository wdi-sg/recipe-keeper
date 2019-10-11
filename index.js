//==============================
//      Boiler Plate
//==============================
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
//==============================
//==============================



//==============================
//      Code Starts Here
//==============================


//==============================
const showAll = (request, response) =>{

    jsonfile.readFile(file, (err, obj)=>{
        for(let i=0; i<obj.recipes.length; i++){
        };
        response.render("allRecipes", obj);
    })
};
//==============================


//==============================
const newRecipe = (request, response) =>{

    jsonfile.readFile(file, (err,obj)=>{
        response.render("forms", obj);
    })
};

const showNewRecipe = (request, response) =>{

    jsonfile.readFile(file, (err, obj)=>{

        obj.recipes.push(request.body);
        request.body.id = parseInt(request.body.id);
        response.render("newRecipe", request.body);

        jsonfile.writeFile(file, obj, {spaces:2}, (err)=>{
            console.log(err);
        });
    });
};
//==============================


//==============================
const showOneRecipe = (request, response)=>{

    jsonfile.readFile(file, (err, obj)=>{

        for(let i=0; i<obj.recipes.length; i++){
            let inputId = parseInt(request.params.id);
            if(inputId === obj.recipes[i].id){
                var currentRecipe = obj.recipes[i];
                response.render("currentRecipe", currentRecipe);
            };
        };

    });

};
//==============================


//==============================
const editRecipe = (request, response)=>{

    jsonfile.readFile(file, (err,obj)=>{

        for(let i=0; i<obj.recipes.length; i++){
            let inputId = parseInt(request.params.id);
            if(inputId === obj.recipes[i].id){
                var currentRecipe = obj.recipes[i];
                response.render("editRecipe", currentRecipe);
            };
        };

    });

};
//==============================


//==============================
const showEditedRecipe = (request, response)=>{



    jsonfile.readFile(file, (err,obj)=>{

        for(let i=0; i<obj.recipes.length; i++){
            let inputId = parseInt(request.params.id);
            let editedRecipe = request.body;
            if(inputId === obj.recipes[i].id){
                var currentRecipe = obj.recipes[i];
                currentRecipe.title = editedRecipe.title;
                currentRecipe.ingredients = editedRecipe.ingredients;
                currentRecipe.instructions = editedRecipe.instructions;
            };
        };

            jsonfile.writeFile(file, obj, {spaces:2}, (err)=>{
                console.log(err);
                response.render("showEditedRecipe", currentRecipe);
            });

    });


};
//==============================






//==============================
//      RESTful Routes
//==============================
app.get("/recipes/", showAll);
app.get("/recipes/new", newRecipe);
app.post("/recipes", showNewRecipe);
app.get("/recipes/:id", showOneRecipe);
app.get("/recipes/:id/edit", editRecipe);
app.put("/recipes/:id", showEditedRecipe);
// app.delete("/recipes/:id", deleteRecipe);
//==============================
//==============================




//==============================
//      Activate Port 3000
//==============================
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));