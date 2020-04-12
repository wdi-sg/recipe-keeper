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
app.get('recipes/:id/edit', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        const recipeToEdit = obj.recipes[index];
         const data = {
             recipe: recipeToEdit,
             recipeId: index
         }
        /*
        const index = parseInt(request.params.id)-1;
        const dataEdit = {
            id : index + 1,
            name: obj.recipes[index].name,
            ingredients: obj.recipes[index].ingredients,
            instructions: obj.recipes[index].instructions
        }*/
         response.render('edit', dataEdit);
    })

});
//UPDATE JSON AFTER EDITING
app.put('/recipes/:id', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        obj.recipes[index]= request.body;
        jsonfile.writeFile(file,obj, (err)=>{
        const link = "/recipes";
        response.redirect(link);
        })
    })
});
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