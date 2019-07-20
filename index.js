//////////////////Basic stuff needed to get this app running//////////////////
const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//////////////////user will see all recipes here//////////////////
app.get('/recipes/', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    var dataSet = {
        recipes: obj["recipes"]
    };
    res.render('allrecipepage',dataSet);
  });
});

////////////////Adding that new recipe in//////////////////
app.post('/recipes', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    obj["recipes"].push(req.body)
    jsonfile.writeFile(file,obj,(err)=>{
      if(err){
        console.log(err)
      };
    });
    res.redirect('/recipes/')
  });
});

//////////////////Display form to create a new recipe//////////////////
app.get('/recipes/new', (req,res)=>{
  res.render('newrecipepage');
});

//////////////////See a single recipe//////////////////
app.get('/recipes/:id', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    var dataSet = {
        recipes: obj["recipes"],
        therecipe: req.params.id
    };
    res.render('recipepage',dataSet);
  });
});

//////////////////Search a single recipe//////////////////
app.get('/search', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    console.log(req.query.q)
    var returnFind = obj["recipes"].findIndex((obj)=>{
      return obj.title === req.query.q.toString()
      })
    console.log(returnFind)
    if (returnFind > -1){
      var recipeLink = "/recipes/"+returnFind
      res.redirect(recipeLink)
    }else{
      res.redirect("/recipes/")
    }
  });
});

//////////////////Edit a single recipe//////////////////
app.get('/recipes/:id/edit', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    var dataSet = {
        recipes: obj["recipes"],
        therecipe: req.params.id
    };
    res.render('editrecipe',dataSet);
  });
});

//////////////////Update a single recipe//////////////////
app.put('/recipes/:id', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    obj["recipes"][parseInt(req.params.id)] = req.body
    var recipeLink = '/recipes/'+req.params.id
    jsonfile.writeFile(file,obj,(err)=>{
      if (err){
        console.log(err);
      };
    });
    res.redirect(recipeLink)
  });
});

//////////////////Delete confirmation page//////////////////
app.get('/recipes/:id/delete', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    var dataSet = {
        recipes: obj["recipes"],
        therecipe: req.params.id
    };
    res.render('deleterecipe',dataSet);
  });
});

//////////////////Delete a single recipe//////////////////
app.delete('/recipes/:id', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    obj["recipes"].splice(req.params.id,1)
    jsonfile.writeFile(file,obj,(err)=>{
      if(err){
        console.log(err);
      };
    });
    res.redirect('/recipes/');
  });
});

//////////////////listening port//////////////////
const port = 3000;
app.listen(port,()=>{
  console.log("LETS GET COOKING!")
})
