////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------Standard Declaration------------------------///////////////////
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

////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------File Declaration------------------------///////////////////

const INGREDIENTFILE='ingredient.json';
const RECIPEFILE='recipe.json';

////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------******************************---------------///////////////////
////////////---------Function Declaration------------------------///////////////////

const saveRecipe = (request, response) =>{
  //your inputs
   // console.log(request.body);
   jsonfile.readFile(RECIPEFILE, (err, obj)=>{
    //if there's any error
    if(err){
        response.send(err);
        return;
    }
    const recipes = obj.recipes;
    //add user input to the json file
    recipes.push(request.body);
    //save to the json file
    jsonfile.writeFile(RECIPEFILE, obj, (err) => {
        const link ='/recipes/'+ recipes.length;
        //render recipe after adding
        response.redirect(link);
    })
  });
}
////////////---------******************************---------------///////////////////
////////////---------Sorting Objects------------------------///////////////////
    function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const IngredientA = a.name;
  const IngredientB = b.name;

  let comparison = 0;
  if (IngredientA > IngredientB) {
    comparison = 1;
  } else if (IngredientA < IngredientB) {
    comparison = -1;
  }
  return comparison;
}

//*******************
//ROUTES
//*******************
//******redirect to recipes
app.get('/',(request, response)=>{
    response.redirect('/recipes');
})

//***** Display a list of all recipes ******
app.get('/recipes',(request, response)=>{
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        const data = {
            recipes: obj.recipes
        }
        response.render("home", data);
    })
})


//***** Display one recipes ******
app.get('/recipes/:id',(request, response)=>{
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
    id=parseInt(request.params.id)-1;
    data=obj.recipes[id];
    data.id=id;
        //response.send(data);
        response.render("individual",data)
    })
})





//*****Accept request for a adding new recipe ******
app.post('/recipes', (request, response)=>{
    //console.log(Object.keys(request.body).length);
    let object=request.body;
    let ingredientsRawArray=[];
    let ingredientsSortedArray=[];
    let ingredientCount=0;
    const data={};
    data.title=request.body.title;
    data.instructions=request.body.instruction;
    ///////***********Looping through the array to extract out the ingredients and quantity only**////
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
        // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...

                ingredientsRawArray.push(object[prop]);

                                    }
                                }
    ingredientsRawArray.pop();
    ingredientsRawArray.shift();
    for(ingredientCount=0;ingredientCount<ingredientsRawArray.length;ingredientCount+=3)
    {
        if(ingredientsRawArray[ingredientCount+1]!=="")
        {
                let individualIngredient={}
                individualIngredient.name=ingredientsRawArray[ingredientCount+1];
                individualIngredient.amount=ingredientsRawArray[ingredientCount];
                individualIngredient.notes=ingredientsRawArray[ingredientCount+2];
                ingredientsSortedArray.push(individualIngredient);
        }
    }

    data.ingredients=ingredientsSortedArray;
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        let id=obj.recipes.length+1;
        const link ='/recipes/'+ obj.recipes.length;
        obj.recipes.push(data);

        //response.send(obj.recipes);
        //response.send(data);

        jsonfile.writeFile(RECIPEFILE, obj, (err) => {
        const link ='/recipes/'+ (obj.recipes.length-1);
        //render recipe after adding
        response.redirect(link);
                })

    })

});

//***** Display a form for adding new recipe ******
app.get('/recipes/new',(request, response)=>{

     jsonfile.readFile(INGREDIENTFILE, (err,obj)=>{
        let ingredientsArray=obj;
        ingredientsArray=ingredientsArray.sort(compare)
        const data = {
            "ingredients": ingredientsArray
                    }
        //response.send(data);
        response.render("add", data);
    })
})

app.get('/recipes/:id/edit',(request,response)=>{
    const data={}
    jsonfile.readFile(INGREDIENTFILE, (err,obj)=>{
        let ingredientsArray=obj;
        ingredientsArray=ingredientsArray.sort(compare)
        data.ingredients =ingredientsArray
            jsonfile.readFile(RECIPEFILE, (err,obj)=>{
                data.current=obj.recipes[request.params.id];
                data.id=request.params.id;
                //response.send(data);
                response.render("edit",data);
                })

        //response.render("add", data);
    })
    //response.send(data);
})

//Accepts a request for the new data for recipe
app.put('/recipes/:id', (request,response)=>{

    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        const index = parseInt(request.params.id);
        obj.recipes[index].title=request.body.title;

        obj.recipes[index].instructions=request.body.instruction;

        obj.recipes[index].ingredients[0].amount=request.body.quantity1;

        obj.recipes[index].ingredients[0].name=request.body.ingredient1;

        obj.recipes[index].ingredients[0].notes=request.body.specialNote1;

        obj.recipes[index].ingredients[1].amount=request.body.quantity2;

        obj.recipes[index].ingredients[1].name=request.body.ingredient2;

        obj.recipes[index].ingredients[1].notes=request.body.specialNote2;

        obj.recipes[index].ingredients[2].amount=request.body.quantity3;

        obj.recipes[index].ingredients[2].name=request.body.ingredient3;

        obj.recipes[index].ingredients[2].notes=request.body.specialNote3;


        obj.recipes[index].ingredients[3].amount=request.body.quantity4;

        obj.recipes[index].ingredients[3].name=request.body.ingredient4;

        obj.recipes[index].ingredients[3].notes=request.body.specialNote4;

        obj.recipes[index].ingredients[4].amount=request.body.quantity5;

        obj.recipes[index].ingredients[4].name=request.body.ingredient5;

        obj.recipes[index].ingredients[4].notes=request.body.specialNote5;


        obj.recipes[index].ingredients[5].amount=request.body.quantity6;

        obj.recipes[index].ingredients[5].name=request.body.ingredient6;

        obj.recipes[index].ingredients[5].notes=request.body.specialNote6;
        //response.send(request.body);
        //obj.recipes[index]= request.body
        jsonfile.writeFile(RECIPEFILE,obj, (err)=>{
        const link = "/recipes/"+ (index+1);
        response.redirect(link);
        })
        //response.send("Entered");
    });
})

//Accepts a request to delete
app.delete('/recipes/:id', (request,response)=>{
    console.log("Entered delete function");
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        console.log("here");
        const index = parseInt(request.params.id);
        obj.recipes.splice(index, 1);
        jsonfile.writeFile(file, obj, (err)=>{
            response.redirect('/recipes');
        });
    })
})






app.listen(3000,()=>{
    console.log("Broadcast at port 3000")
})