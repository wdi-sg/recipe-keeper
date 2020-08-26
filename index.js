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


app.post('/recipes', (request, response)=>{
    let recipe = request.body;
    recipe.ingredients = recipe.ingredients.split(',');
    recipe.instructions = recipe.instructions.split(',');

    jsonfile.readFile(file, (err, obj)=>{
        obj.recipes.push(recipe);
        let id = obj.recipes.length - 1;

        jsonfile.writeFile(file, obj, (err)=>{
            if(err) console.log(err);
            response.redirect(`/recipes/${id}`)
        })
    })
    // redirect to single item page
    // need id
    // /recipes/:id

    //
})

app.get('/recipes/', (request, response)=>{
    response.send('all recipes')
})

app.get('/recipes/new', (request, response)=>{
    response.render("form");
})

app.get('/recipes/:id', (request, response)=>{
    let id = request.params.id;
    jsonfile.readFile(file, (err, obj)=>{
        let data = {
            'recipe' : obj.recipes[id]
        }
        response.render('single-recipe', data)
    })

})

app.get('/recipes/:id/edit', (request, response)=>{
    let id = request.params.id;
    jsonfile.readFile(file, (err, obj)=>{
        response.render('single-recipe-edit', {...obj.recipes[id], id})
    })
})

app.put('/recipes/:id', (request, response)=>{
    // find id and change content
    let recipe = request.body;
    recipe.ingredients = recipe.ingredients.split(',');
    recipe.instructions = recipe.instructions.split(',');

    let id = request.params.id;

    jsonfile.readFile(file, (err,obj)=>{
        obj.recipes[id] = recipe;

        jsonfile.writeFile(file, obj, (err)=>{
            if(err) console.log(err);
            response.redirect(`/recipes/${id}`)
        })
    })
})

app.delete('/recipes/:id', (request, response)=>{
    let id = request.params.id;
    jsonfile.readFile(file, (err,obj)=>{
        obj.recipe = obj.recipe.filter((item, index)=>{
            return index !== id
        })

        console.log(obj.recipe);

        jsonfile.writeFile(file, obj, (err)=>{
            if(err) console.log(err);
            response.redirect(`/recipes/${id}`)
        })
    })
})

app.listen(3000, ()=>{
    console.log('listening on 3000');
})