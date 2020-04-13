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


//CLEANING UP CODE
//PUSH RECIPE INTO JSON FILE
app.post('/recipes',(request,response) =>{
    console.log("added");
    //response.send("Successfully added recipe");
    jsonfile.readFile(file,(err,obj) =>{
        if(err){
        response.send(err);
        return;
    }
        const recipes = obj.recipes;
        recipes.push(request.body);
        //response.send(request.body);
        jsonfile.writeFile(file, obj, (err) => {
            //response.send("successful");
        const link ='/recipes/'+ recipes.length;
        response.redirect(link);
        })
    })
});
//INITIAL ROUTE
app.get('/', (request, response) => {
     response.redirect('/recipes/');
 })
//  DISPLAY ALL RECIPES
 app.get('/recipes/', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const dataName = {
            recipes: obj.recipes
        }
        response.render('home',dataName);
    })

});
 //DISPLAY FORM FOR A NEW RECIPE
app.get('/recipes/new',(request,response) =>{
    response.render('add');
});
//DISPLAY INDIVIDUAL RECIPE
app.get('/recipes/:id', (request,response) =>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id);
        const data = {
                id: index,
                name: obj.recipes[index-1].name,
                ingredients: obj.recipes[index-1].ingredients,
                instructions: obj.recipes[index-1].instructions
            }
        response.render('show', data);
    })
    console.log("before entering edit");
});
//DISPLAY FORM FOR EDITING RECIPE
app.get('/recipes/:id/edit', (request, response) => {
     //read file
     jsonfile.readFile(file, (err, obj) => {
         const index = parseInt(request.params.id) - 1;
         const data = {
             id : index + 1,
             name: obj.recipes[index].name,
             ingredients: obj.recipes[index].ingredients,
             instructions: obj.recipes[index].instructions
         }
         response.render('edit', data);
     });
 })
//UPDATE JSON AFTER EDITING
app.put('/recipes/:id', (request, response) => {
     jsonfile.readFile(file, (err, obj) => {
         const index = parseInt(request.params.id) - 1;
         obj.recipes[index].id = index+1;
         obj.recipes[index].name = request.body.name;
         obj.recipes[index].ingredients = request.body.ingredients;
         obj.recipes[index].instructions = request.body.instructions;
         jsonfile.writeFile(file, obj, (err) => {
             const link = "/recipes/" + (index + 1);
             response.redirect(link);
         })
     });
 })
//DELETE RECIPE
app.delete('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, (err)=>{
            response.send("successfully deleted recipe " + index);
            //response.redirect('/recipes/');
        });
    })
})
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
/*
//DISPLAY FORM FOR A NEW RECIPE
app.get('/recipes/new',(request,response) =>{
    response.render('add');
});
//PUSH RECIPE INTO JSON FILE
app.post('/recipes',(request,response) =>{
    console.log("added");
    //response.send("Successfully added recipe");
    jsonfile.readFile(file,(err,obj) =>{
        if(err){
        response.send(err);
        return;
    }
        const recipes = obj.recipes;
        recipes.push(request.body);
        //response.send(request.body);
        jsonfile.writeFile(file, obj, (err) => {
            //response.send("successful");
        const link ='/recipes/'+ recipes.length;
        response.redirect(link);
        })
    })
});
//DISPLAY INDIVIDUAL RECIPE
app.get('/recipes/:id', (request,response) =>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id);
        const data = {
                id: index,
                name: obj.recipes[index-1].name,
                ingredients: obj.recipes[index-1].ingredients,
                instructions: obj.recipes[index-1].instructions
            }
        response.render('show', data);
    })
    console.log("before entering edit");
});
//  DISPLAY ALL RECIPES
app.get('/recipes/', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const dataName = {
            recipes: obj.recipes
        }
        response.render('home',dataName);
    })

});
//DISPLAY FORM FOR EDITING RECIPE
console.log("getting inside")
app.get('recipes/:id/edit', (request,response)=>{
        const index = parseInt(request.params.id)-1;
        console.log("getting inside")

    jsonfile.readFile(file, (err,obj)=>{
        const recipeToEdit = obj.recipes[index];


        //const index = parseInt(request.params.id)-1;
        const dataEdit = {
            id : index,
            name: recipeToEdit.name,
            ingredients: recipeToEdit.ingredients,
            instructions: recipeToEdit.instructions
        }
         response.render('edit', dataEdit);
    })

});
//UPDATE JSON AFTER EDITING
app.put('/recipes/:id', (request,response)=>{
    const index = parseInt(request.params.id)-1;

    jsonfile.readFile(file, (err,obj)=>{
        //const index = parseInt(request.params.id)-1;
        obj.recipes[index]= request.body;
        jsonfile.writeFile(file,obj, (err)=>{
            console.log("updated");
        /*const recipeToDisplay = obj.recipes[index];
        /*const data = {
            recipe: recipeToDisplay
        };
        const link = "/recipes/";
        response.redirect(link);//

        })
    })
});
app.get('/', (request, response) => {
     response.redirect('/recipes/');
 })
//DELETE RECIPE
app.delete('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, (err)=>{
            response.send("successfully deleted recipe " + index);
            //response.redirect('/recipes/');
        });
    })
})
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
*/