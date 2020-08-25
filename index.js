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

app.get('/recipes/new', (request,response)=>{
    response.render("home");
})

app.get('/recipes/',(request,response)=>{
  jsonfile.readFile('data.json', (err,obj)=>{
    response.render("view",obj)
  })

})


app.post('/recipes',(request,response)=>{
    jsonfile.readFile('data.json', (err,obj)=>{
        let id = obj.recipes.length
        request.body.id = id
        obj.recipes.push(request.body);
        jsonfile.writeFile('data.json',obj,(err)=>{
            console.log(err)
        })
        response.send(request.body)
    })

})

app.get('/recipes/:id',(request,response)=>{
    jsonfile.readFile('data.json',(err,obj)=>{
        let display = obj.recipes[request.params.id];
        // response.send(display);
        response.render("recipe",display);
    })
})

app.get('/recipes/:id/edit', (request,response)=>{
    jsonfile.readFile('data.json',(err,obj)=>{
        let index = request.params.id;
        let data = obj.recipes[index];
        response.render("edit",data)
        // let edit = obj.recipes[index];
        // if (edit.index === obj.recipex[index].id);
            //(which jsx file you're rendering, the objet you're sending to the JSX file the object is referred to as this.props)

        // response.send(obj)
    })
})

app.put('/recipes/:id',(request,response)=>{
    jsonfile.readFile('data.json',(err,obj)=>{
            let updatingRecipe = obj.recipes[request.params.id];
            updatingRecipe.Instructions = request.body.Instructions;
            updatingRecipe.Ingredients = request.body.Ingredients;
            jsonfile.writeFile('data.json',obj,(error)=>{
                console.log(error)});
            let display = obj.recipes[request.params.id]
        response.send(display);
    })
})

app.delete('/recipes/:id',(request,response)=>{
    jsonfile.readFile('data.json',(err,obj)=>{
        let receiptArray = obj.recipes
        obj.recipes = receiptArray.splice(request.params.id)
        jsonfile.writeFile('data.json', obj,(err)=>{
            console.log(err)
        })
        response.send("deleted")
    })
})




app.listen(3000);