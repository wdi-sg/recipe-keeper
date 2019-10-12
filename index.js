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
            if(inputId === i+1){
                let data = {
                    userinputID: inputId,
                    currentRecipe: obj.recipes[i]
                }
                response.render("currentRecipe", data);
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
            if(inputId === i+1){
                let data = {
                    userinputID : inputId,
                    currentRecipe: obj.recipes[i]
                }
                response.render("editRecipe", data);
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
            console.log(request.body);
            if(inputId === i+1){
                var currentRecipe = obj.recipes[i];
                currentRecipe.title = editedRecipe.title;
                currentRecipe.img = editedRecipe.img;
                currentRecipe.ingredients = editedRecipe.ingredients;
                currentRecipe.instructions = editedRecipe.instructions;
                response.render("showEditedRecipe", currentRecipe);
            };
        };

            jsonfile.writeFile(file, obj, {spaces:2}, (err)=>{
                console.log(err);
            });

    });


};
//==============================



//==============================
const deleteRecipe = (request, response)=>{

    jsonfile.readFile(file, (err,obj)=>{

        for(let i=0; i<obj.recipes.length; i++){
            let inputId = parseInt(request.params.id);

            if(inputId === i+1){
                let deletingRecipe = [obj.recipes[i]];
                console.log(deletingRecipe);
                obj.recipes.splice(i, 1);
                response.render("deletedRecipe", deletingRecipe[0]);
            };
        };

            jsonfile.writeFile(file, obj, {spaces:2}, (err)=>{
                console.log(err);
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
app.delete("/recipes/:id", deleteRecipe);
//==============================
//==============================




//==============================
//      Activate Port 3000
//==============================
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));