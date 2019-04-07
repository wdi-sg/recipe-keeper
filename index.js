//initialisation
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

//Routes
app.get('/recipes', (request,response)=> {
    jsonfile.readFile (file, (err,obj)=> {
        let recipes = obj.recipes;
        response.render('index', {obj:recipes});
    });
})

app.get('/recipes/new', (request,response)=> {
    jsonfile.readFile (file, (err,obj)=> {
        response.render('new');
    })
})

app.post('/recipes', (request,response)=> {
    jsonfile.readFile (file, (err,obj)=> {
        let counter = 0;
        for (let i=0; i<obj.recipes.length;i++) {
            if(obj.recipes[i].uniqueId >= counter) {
                counter = obj.recipes[i].uniqueId;
            }
        }
        let newRecipe = {};
        newRecipe.uniqueId = counter+1
        newRecipe.title = request.body.title;
        newRecipe.ingredients = request.body.ingredients;
        newRecipe.instructions = request.body.instructions;
        let recipes = obj.recipes;
        recipes.push(newRecipe);
        jsonfile.writeFile (file, obj, (err)=>{
            console.log(err);
        })
        response.redirect('recipes/'+(counter+1));
    })
})

app.get('/recipes/:id', (request,response)=> {
    var indexRequested;
    jsonfile.readFile (file, (err,obj)=> {
        const currentRecipeId = parseInt(request.params.id);
        for (let i=0; i<obj.recipes.length; i++) {
            if(obj.recipes[i].uniqueId === currentRecipeId) {
                indexRequested = i;
            }
        }
        response.render('single', obj.recipes[indexRequested]);
    })
})

app.get('/recipes/:id/edit', (request,response)=> {
    var indexRequested;
    jsonfile.readFile (file, (err,obj)=> {
        const currentRecipeId = parseInt(request.params.id);
        for (let i=0; i<obj.recipes.length; i++) {
            if(obj.recipes[i].uniqueId === currentRecipeId) {
                indexRequested = i;
            }
        }
        response.render('edit', obj.recipes[indexRequested]);
    })
})

app.put('recipes/:id', (request,response)=> {
    console.log('here in put');
    jsonfile.readFile (file, (err,obj)=> {
        const currentRecipeId = parseInt(request.params.id);
        obj.recipes[currentRecipeId].title = request.body.title;
        obj.recipes[currentRecipeId].ingredients = request.body.ingredients;
        obj.recipes[currentRecipeId].instructions = request.body.instructions;
        jsonfile.writeFile (file, obj, (err)=> {
            console.log(err);
        })
        response.redirect('recipe/:id')
    })
} )

app.get('/recipes/:id/delete', (request,response)=> {
    var indexRequested;
    jsonfile.readFile (file, (err,obj)=> {
        const currentRecipeId = parseInt(request.params.id);
        for (let i=0; i<obj.recipes.length; i++) {
            if(obj.recipes[i].uniqueId === currentRecipeId) {
                indexRequested = i;
            }
        }
        response.render('delete', obj.recipes[indexRequested]);
    })
})

app.delete('recipes/:id', (request,response)=> {
    console.log('deleting')
    const currentRecipeId = parseInt(request.params.id);
    jsonfile.readFile (file, (err,obj)=> {
        obj.recipes.splice(currentRecipeId,1);
        jsonfile.writeFile (file, obj, (err)=> {
            console.log(err);
        })
        response.redirect('recipe/')
    })
} )

//Listening
app.listen(3000, (err) => {
    console.log("listening on port 3000")
});