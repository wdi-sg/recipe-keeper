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
/////for ingredients
    function compareIngredient2(a, b) {
  // Use toUpperCase() to ignore character casing
  const IngredientA = a;
  const IngredientB = b;

  let comparison = 0;
  if (IngredientA > IngredientB) {
    comparison = 1;
  } else if (IngredientA < IngredientB) {
    comparison = -1;
  }
  return comparison;
}

///;for the recipe
    function compareName(a, b) {
  // Use toUpperCase() to ignore character casing
  const RecipeA = a.title;
  const RecipeB = b.title;

  let comparison = 0;
  if (RecipeA > RecipeB) {
    comparison = 1;
  } else if (RecipeA < RecipeB) {
    comparison = -1;
  }
  return comparison;
}

    function compareId(a, b) {
  // Use toUpperCase() to ignore character casing
  const RecipeA = a.id;
  const RecipeB = b.id;

  let comparison = 0;
  if (RecipeA > RecipeB) {
    comparison = 1;
  } else if (RecipeA < RecipeB) {
    comparison = -1;
  }
  return comparison;
}


/////for ingredients
    function compareIngredient(a, b) {
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

///;for the recipe
    function compareName(a, b) {
  // Use toUpperCase() to ignore character casing
  const RecipeA = a.title;
  const RecipeB = b.title;

  let comparison = 0;
  if (RecipeA > RecipeB) {
    comparison = 1;
  } else if (RecipeA < RecipeB) {
    comparison = -1;
  }
  return comparison;
}

    function compareId(a, b) {
  // Use toUpperCase() to ignore character casing
  const RecipeA = a.id;
  const RecipeB = b.id;

  let comparison = 0;
  if (RecipeA > RecipeB) {
    comparison = 1;
  } else if (RecipeA < RecipeB) {
    comparison = -1;
  }
  return comparison;
}


function compareInstruction(a, b) {
  // Use toUpperCase() to ignore character casing
  const InstructionA = a.instructions.length;
  const InstructionB = b.instructions.length;

  let comparison = 0;
  if (InstructionA > InstructionB) {
    comparison = 1;
  } else if (InstructionA < InstructionB) {
    comparison = -1;
  }
  return comparison;
}

function compareIngredientNumber(a, b) {
  // Use toUpperCase() to ignore character casing
  const InstructionA = a.ingredients.length;
  const InstructionB = b.ingredients.length;

  let comparison = 0;
  if (InstructionA > InstructionB) {
    comparison = 1;
  } else if (InstructionA < InstructionB) {
    comparison = -1;
  }
  return comparison;
}

//*******************
//ROUTES
//*******************
//******redirect to recipes

app.get('/',(request, response)=>{

    response.render("home");
})

//***** Display a list of all recipes ******
app.get('/recipes',(request, response)=>{
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        const data = {}
        let unsortedRecipe=obj.recipes
        let option=request.query.option;
        let sortedRecipe=[]

        if(option==="ByName")
        {
            sortedRecipe=unsortedRecipe.sort(compareName);
            data.recipes=sortedRecipe;
            data.heading="Recipes By Name";
        }
        if(option==="ByInstruction")
        {
            sortedRecipe=unsortedRecipe.sort(compareInstruction);
            data.recipes=sortedRecipe;
            data.heading="Recipes By Instruction";
        }
        if(option==="ByIngredients")
        {
            sortedRecipe=unsortedRecipe.sort(compareIngredientNumber);
            data.recipes=sortedRecipe;
            data.heading="Recipes By Number of Ingredients";
        }
        if(option==="ByID")
        {
            sortedRecipe=unsortedRecipe.sort(compareId);
            data.recipes=sortedRecipe;
            data.heading="Recipes By Number of ID";
        }
        obj.recipes=sortedRecipe;
        response.render("index", data);
       /* jsonfile.writeFile(RECIPEFILE,obj, (err)=>{
        //const link = "/recipes/"+ (index);
        //response.send(data);
        response.render("index", data);
        })*/
        //response.send(data);
        //response.send(request)

    })
})




app.get('/ingredients',(request,response)=>{
    jsonfile.readFile(RECIPEFILE,(err,obj)=>{
        let exteriorCount=0;
        let innerCount=0;
        let outerCount=0;
        let usedUnsortedIngredientsarray=[];
        for(outerCount=0;outerCount<obj.recipes.length;outerCount++)
        {
            for(innerCount=0;innerCount<obj.recipes[outerCount].ingredients.length;innerCount++)
            {
                if(obj.recipes[outerCount].ingredients[innerCount].name!=="")
                {usedUnsortedIngredientsarray.push(obj.recipes[outerCount].ingredients[innerCount].name);}
            }
        }
        const uniqueUsedArray=new Set(usedUnsortedIngredientsarray);
        const usedIngredientSortedArray=[...uniqueUsedArray];
        const IngredientToRecipe={}
       for (exteriorCount=0; exteriorCount<usedIngredientSortedArray.length;exteriorCount++)
       {
            IngredientToRecipe[usedIngredientSortedArray[exteriorCount]]=[];
       }

       for(key in IngredientToRecipe){
        for(outerCount=0;outerCount<obj.recipes.length;outerCount++)
            {
            for(innerCount=0;innerCount<obj.recipes[outerCount].ingredients.length;innerCount++)
                {
                    if(obj.recipes[outerCount].ingredients[innerCount].name===key)
                    {
                        IngredientToRecipe[key].push(obj.recipes[outerCount]);
                    }
                }
            }
       }

       for(key in IngredientToRecipe){
                const uniqueUsedKeyArray=new Set(IngredientToRecipe[key]);
                const usedIngredientKeySortedArray=[...uniqueUsedKeyArray];
                IngredientToRecipe[key]=usedIngredientKeySortedArray;
       }
        //response.send(IngredientToRecipe);
        response.render("typing",IngredientToRecipe);
    })
})

//***** Display a form for adding new recipe ******
app.get('/recipes/existing',(request, response)=>{
console.log("------------------------Test");
     jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        console.log(obj)
        let ingredientsArray=obj.ingredients;
        ingredientsArray=ingredientsArray.sort()
        console.log(ingredientsArray)
        const data = {
            "ingredients": ingredientsArray
                    }
        //response.send(data);

        response.render("addexist", data);
    })
})


//***** Display a form for adding new recipe ******
app.get('/recipes/new',(request, response)=>{
console.log("------------------------Test");
     jsonfile.readFile(INGREDIENTFILE, (err,obj)=>{
        let ingredientsArray=obj;
        ingredientsArray=ingredientsArray.sort(compareIngredient)
        const data = {
            "ingredients": ingredientsArray
                    }
        //response.send(data);

        response.render("add", data);
    })
})

app.get('/recipes/index',(request, response)=>{
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{

        const data=obj

        response.render("index",data);
       /* jsonfile.writeFile(RECIPEFILE,obj, (err)=>{
        //const link = "/recipes/"+ (index);
        //response.send(data);
        response.render("index", data);
        })*/
        //response.send(data);
        //response.send(request)

    })
})
//***** Display one recipes ******
app.get('/recipes/:id',(request, response)=>{
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
    id=parseInt(request.params.id);
    data=obj.recipes[id-1];
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
    let ingredientList=[];
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
                ingredientList.push(ingredientsRawArray[ingredientCount+1]);
                individualIngredient.amount=ingredientsRawArray[ingredientCount];
                individualIngredient.notes=ingredientsRawArray[ingredientCount+2];
                ingredientsSortedArray.push(individualIngredient);
        }
    }
    if(request.body.title.length<3)
    {
        const errorMessage={}
        errorMessage.message= "Length of title must be more than 3 letters.";
        //response.send("error");
        response.render("error", errorMessage);
        return;
    }
        if(request.body.title.length>20)
    {
        const errorMessage={}
        errorMessage.message= "Length of title must be less than 20 letters.";
        //response.send("error");
        response.render("error", errorMessage);
        return;
    }

       if(request.body.instruction.length<3)
    {
        const errorMessage={}
        errorMessage.message= "Length of title must be more than 3 letters.";
        //response.send("error");
        response.render("error", errorMessage);
        return;
    }
        if(request.body.title.length>200)
    {
        const errorMessage={}
        errorMessage.message= "Length of title must be less than 200 letters.";
        //response.send("error");
        response.render("error", errorMessage);
        return
    }
    data.ingredients=ingredientsSortedArray;
    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        let id=obj.recipes.length+1;
        const link ='/recipes/'+ obj.recipes.length;

        obj.recipes.push(data);
        obj.recipes[obj.recipes.length-1].id=obj.recipes.length;
        //response.send(obj.recipes);
        //response.send(data);
        obj.recipes[obj.recipes.length-1].timestamp=Date();

        for(let count=0; count<ingredientList.length;count++)
        {
            console.log(obj);
            obj.ingredients.push(ingredientList[count]);
        }
        const uniqueSet= new Set(obj.ingredients);
        obj.ingredients=[...uniqueSet]
        jsonfile.writeFile(RECIPEFILE, obj, (err) => {
        const link ='/recipes/'+ (obj.recipes.length);
        //render recipe after adding
        response.redirect(link);
        //response.send(request.body)
                })

    })

});



app.get('/recipes/:id/edit',(request,response)=>{
    console.log("enter edit")
    const data={}
    jsonfile.readFile(INGREDIENTFILE, (err,obj)=>{
        let ingredientsArray=obj;
        ingredientsArray=ingredientsArray.sort(compareIngredient)
        data.ingredients =ingredientsArray

            jsonfile.readFile(RECIPEFILE, (err,obj)=>{
                data.current=obj.recipes[request.params.id-1];
                data.id=request.params.id;
                //response.send(ingredientsArray);
                response.render("edit",data);
                })

        //response.render("add", data);
    })
    //response.send(data);
})

//Accepts a request for the new data for recipe
app.put('/recipes/:id', (request,response)=>{

    jsonfile.readFile(RECIPEFILE, (err,obj)=>{
        const index = parseInt(request.params.id)-1;
        obj.recipes[index].title=request.body.title;

        obj.recipes[index].instructions=request.body.instruction;


        obj.recipes[index].ingredients[0].name=request.body.ingredient1;

        obj.recipes[index].ingredients[0].notes=request.body.specialNote1;

        obj.recipes[index].ingredients[0].amount=request.body.quantity1;
        if(obj.recipes[index].ingredients.length<2)
        {
            obj.recipes[index].ingredients.push(
            {
                "amount":request.body.quantity2,
                "name":request.body.ingredient2,
                "notes": request.body.specialNote2
            }
                )
            }

        else
        {
            obj.recipes[index].ingredients[1].amount=request.body.quantity2;
            obj.recipes[index].ingredients[1].name=request.body.ingredient2;
            obj.recipes[index].ingredients[1].notes=request.body.specialNote2;

        }

        if(obj.recipes[index].ingredients.length<3)
        {
            obj.recipes[index].ingredients.push(
            {
                "amount":request.body.quantity3,
                "name":request.body.ingredient3,
                "notes": request.body.specialNote3
            }
                )
            }

        else
        {
            obj.recipes[index].ingredients[2].amount=request.body.quantity3;
            obj.recipes[index].ingredients[2].name=request.body.ingredient3;
            obj.recipes[index].ingredients[2].notes=request.body.specialNote3;

        }

        if(obj.recipes[index].ingredients.length<4)
        {
            obj.recipes[index].ingredients.push(
            {
                "amount":request.body.quantity4,
                "name":request.body.ingredient4,
                "notes": request.body.specialNote4
            }
                )
            }

        else
        {
            obj.recipes[index].ingredients[3].amount=request.body.quantity4;
            obj.recipes[index].ingredients[3].name=request.body.ingredient4;
            obj.recipes[index].ingredients[3].notes=request.body.specialNote4;

        }

        if(obj.recipes[index].ingredients.length<5)
        {
            obj.recipes[index].ingredients.push(
            {
                "amount":request.body.quantity5,
                "name":request.body.ingredient5,
                "notes": request.body.specialNote5
            }
                )
            }

        else
        {
            obj.recipes[index].ingredients[4].amount=request.body.quantity5;
            obj.recipes[index].ingredients[4].name=request.body.ingredient5;
            obj.recipes[index].ingredients[4].notes=request.body.specialNote5;

        }

        if(obj.recipes[index].ingredients.length<6)
        {
            obj.recipes[index].ingredients.push(
            {
                "amount":request.body.quantity6,
                "name":request.body.ingredient6,
                "notes": request.body.specialNote6
            }
                )
            }

        else
        {
            obj.recipes[index].ingredients[5].amount=request.body.quantity6;
            obj.recipes[index].ingredients[5].name=request.body.ingredient6;
            obj.recipes[index].ingredients[5].notes=request.body.specialNote6;

        }


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

        const index = parseInt(request.params.id)-1;
        console.log(obj.recipes[index]);
        obj.recipes.splice(index, 1);
        for(let count=0; count<obj.recipes.length; count++){
            obj.recipes[count].id=count+1;
        }
        jsonfile.writeFile(RECIPEFILE, obj, (err)=>{
            response.redirect('/');
        });
    })
})






app.listen(3000,()=>{
    console.log("Broadcast at port 3000")
})