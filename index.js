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

//*=================ADD recipe=====================*/
app.get('/recipes', (request, response) => {
    jsonfile.readFile(file,(err,obj)=>{
        if(err){
            console.log(err);
        }else{
             // render a template form here
             // let form = '';
             // form = '<html>' +
             // '<body>'+
             // '<h1>Recipes form</h1>'+
             // '<form method="POST" action="/recipesdetails">'+
             // '<p>title:</p><input name="title"/>'+
             // '<p>ingredients:</p><input name="ingredients"/>'+
             // '<p>instructions:</p><input name="instructions"/>'+
             // '<input type="submit"/>'+
             // '</form>'+
             // '</body>'+
             // '</html>';
             response.render('form');
         }
     })
});

//*=========create details of recipes into json file=============*//
app.post('/recipesdetails',(req, res) => {
  jsonfile.readFile(file,(err,obj)=> {
    if(err){
      console.log("There's an error")
    }
    obj.recipes.push(req.body);
    // console.log(newPokemon);
    jsonfile.writeFile(file,obj,(err)=>{
      if(err){console.log("error")}
        console.log("how is it done")
      response.send("recipesAdded");
    });
  });
})

//*======================Show Recipe by Id===============================*//
app.get('/recipes/:id',(request,response)=>{
    jsonfile.readFile(file,(err,obj)=>{
        if(err){
            console.log(err);
        }
        var id = request.params.id;
        var newRecipes = obj.recipes[id];
        response.send(newRecipes);
    });
});

//*====================Edit Recipe by Id==================================*//
app.put('/recipes/:id',(request,response)=>{
    console.log("WOWOWOW");
    var newRecipes = request.body;

    console.log("about to get file");
    jsonfile.readFile(file,(err,obj)=>{
        if(err){
            console.log(err);
        }
        obj.recipes[request.params.id] = newRecipes;
        console.log("about to write file");

        jsonfile.writeFile(file,obj,(err)=>{
            console.log("write file done");
            if(err){
                console.log(err);
                response.status(503).send("OH NO ERROR");
            }else{
                console.log("YAY");
                response.send("successful!");
            }
        });
    });
});

//*========================show recipes by id editform====================================*//
app.get('/recipes/:id/edit',(request,response)=>{
    jsonfile.readFile(file,(err,obj)=>{
        if(err){
            console.log(err);
        }
        var id = request.params.id;
        var newRecipes = obj.recipes[id];
        // var output = `<p>Edit Form<p><form action=/something><input name ="name" value= ${newPokemon.name}></form>`;
        var data ={
            recipesKey : newRecipes,
            recipesId : id
        }
        response.render('edit',data);
    });
});

// //*============================delete recipes by id===========================================*//
// app.delete('/recipes/:id',(request,response)=>{
//     console.log("WOWOWOW");
//     var newRecipes = request.body;

//     console.log("about to get file");
//     jsonfile.readFile(file,(err,obj)=>{
//         if(err){
//             console.log(err);
//         }
//         obj.recipes[request.params.id] = newRecipes;
//         console.log("about to write file");

//         jsonfile.writeFile(file,obj,(err)=>{
//             console.log("write file done");
//             if(err){
//                 console.log(err);
//                 response.status(503).send("OH NO ERROR");
//             }else{
//                 console.log("YAY");
//                 response.send("successful!");
//             }
//         });
//     });
// });


// //*=============================show deleted========================================================*//
// app.get('/recipes/:id/delete',(request,response)=>{
//     jsonfile.readFile(file,(err,obj)=>{
//         if(err){
//             console.log(err);
//         }
//         var id = request.params.id;
//         var newPokemon = obj.pokemon[id];
//         // var output = `<p>Edit Form<p><form action=/something><input name ="name" value= ${newPokemon.name}></form>`;
//         var data ={
//             pokemonKey : newPokemon,
//             pokemonId : id

//         }

//         response.render('delete',data);
//     });
// });







app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));