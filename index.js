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

app.get('/recipes/',(request, response) => {
    jsonfile.readFile("data.json",(err,obj)=>{
        var titleArr = [];
        obj.recipes.forEach(item=>titleArr.push(item.title))

        const data = {
            title: titleArr
        }

        response.render('allrecipes',data)
    })
});

app.get('/recipes/new',(request,response)=>{
    response.render('recipe');
})

app.post('/recipes',(request,response)=>{
    const {title, ingredients, instructions} = request.body;
    jsonfile.readFile("data.json",(err,obj)=>{
        obj.recipes.push(request.body);
        jsonfile.writeFile("data.json", obj, (err)=>{
            console.log(err);
          response.send(obj)
        })
    })
})

app.get('/recipes/:id',(request,response)=>{
    let recipeId = request.params.id;
        jsonfile.readFile("data.json",(err,obj)=>{
           for(let i=0;i<obj.recipes.length;i++){
            if(i == request.params.id){
                response.send(obj.recipes[i])
            }
           }
        })
})


app.get('/recipes/:id/edit',(request,response)=>{
    jsonfile.readFile("data.json", (err, data)=>{
        let filteredItem=data.recipes.filter((item,index)=>index==parseInt(request.params.id))
        let filteredId = {
                    title: filteredItem[0].title,
                    ingredients: filteredItem[0].ingredients,
                    instructions: filteredItem[0].instructions,
                    id: data.recipes.indexOf(...filteredItem)
        };
        response.render("editrecipe",filteredId);
    })
})

app.put('/recipes/:id', (request, response)=>{
    // Update the data
    jsonfile.readFile("data.json",(err, data)=>{
            data.recipes[request.params.id] = request.body;
        jsonfile.writeFile('data.json', data ,(err) => {
        response.send(request.body);
})
    })
})

app.get('/recipes/:id/delete',(request,response)=>{
    jsonfile.readFile("data.json", (err, data)=>{
        let filteredItem=data.recipes.filter((item,index)=>index==parseInt(request.params.id))
        let filteredId = {
                    title: filteredItem[0].title,
                    id: data.recipes.indexOf(...filteredItem)
        };
        response.render("deleterecipe",filteredId);
    })
})

app.delete('/recipes/:id',(request,response)=>{
     jsonfile.readFile("data.json",(err, data)=>{
        data.recipes = data.recipes.filter((item,index) => index != request.body.id);
        jsonfile.writeFile('data.json', data ,(err) => {
        response.send("item deleted!");
})
    })
})




app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
});

