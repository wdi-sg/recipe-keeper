//////////////////Basic stuff needed to get this app running//////////////////
const jsonfile = require('jsonfile');
const file = 'data.json';
const ingreFile = 'ingredient.json';
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
////////////////user will add the number of ingredients in//////////////////
app.post('/ingredientlist', (req,res)=>{
    dataSet = {
      recipes: req.body
    }
    res.render('numofingredients',dataSet)
});
////////////////User will provide instructions for how to prepare dish//////////////////
app.post('/instructions', (req,res)=>{
  jsonfile.readFile(ingreFile,(err,obj)=>{
    req.body.ingredients.map((item)=>{
      obj.map((obj)=>{
          if (item.ingredient === obj.name){
            item.id = obj.id;
          }
      })
    })
    dataSet = {
      recipes: req.body
    }
    res.render('instructions',dataSet)
  })
});


////////////////Adding that new recipe in//////////////////
app.post('/recipes', (req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    obj["recipes"].push(req.body)
    obj["lastID"] += 1;
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
  jsonfile.readFile(file,(err,obj)=>{
    var dataSet = {
        recipes: obj["recipes"],
        uniqueid: obj["lastID"],
        therecipe: req.params.id
    };
    res.render('newrecipepage',dataSet);
  });
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
    var recipeFound = obj["recipes"].findIndex((obj)=>{
      return obj.title === req.query.q
    })
    var recipeIdFound = obj["recipes"].findIndex((obj)=>{
      return obj.id === req.query.q
    })
    if (recipeFound > -1){
      var recipeLink = "/recipes/"+ recipeFound
      res.redirect(recipeLink)
    }else if (recipeIdFound > -1){
      var recipeLink = "/recipes/"+ parseInt(recipeIdFound)
      res.redirect(recipeLink)
    }else {
      res.redirect("/recipes/")
    }
  });
});
//////////////////Show list of ingredients which are being used by recipes//////////////////
app.get('/ingredients', (req,res)=>{
  jsonfile.readFile(ingreFile,(err,obj)=>{
    jsonfile.readFile(file,(err,object)=>{
      var dataSet = {
        ingredients: obj,
        recipes: object["recipes"]
      }
      res.render('ingredientspage',dataSet)
    })
  })
})
//////////////////Show which recipe uses that ingredients//////////////////
app.get('/ingredients/:name',(req,res)=>{
  jsonfile.readFile(file,(err,obj)=>{
    var dataSet = {
      recipes: obj["recipes"],
      theingredient: req.params
    }
    res.render('ingredientrecipepage',dataSet)
  })
})

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

  jsonfile.readFile(ingreFile,(err,obj)=>{
    req.body.ingredients.map((item)=>{
      obj.map((obj)=>{
          if (item.ingredient === obj.name){
            item.id = obj.id;
          }
      })
    })
    //writes to main data
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
  })
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
