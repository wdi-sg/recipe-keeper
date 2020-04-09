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

        response.send(obj.recipes);
        //response.send(data);

        jsonfile.writeFile(RECIPEFILE, obj, (err) => {
        const link ='/recipes/'+ recipes.length;
        //render recipe after adding
        //response.redirect(link);
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
























app.listen(3000,()=>{
    console.log("Broadcast at port 3000")
})