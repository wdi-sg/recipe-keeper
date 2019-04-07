const jsonfile = require('jsonfile');
const file = 'data.json';

const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// use public folder
app.use(express.static('public'))

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

/////////////////////////////////////////////////////////////////////////////////////////////////

/*

let addIngredient = document.getElementById("addIngredient");


var toAddIngredient = () => {
    let creatFormRow = document.createElement("div")
    createFormRow.className = "form-row";

    let createCol = document.createElement("div");
    createCol.className = "col";

    let createLabel = document.createElement("label");
    createLabel.setAttribute("for", "ingredientName");

    let createInput = document.createElement("input");
    createInput.type = "text";
    createInput.className = "form-control form-control-lg";
    createInput.name = "ingredientName";

    createCol.appendChild(createLabel);
    createCol.appendChild(createInput);

    createFormRow.appendChild(createCol)

    let formElement = document.querySelector("form");
    formElement.appendChild("createFormRow");
}*/

//  display recipes
app.get('/', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        response.render('home', obj);

    })  // end of readfile
});  // end of get /


//  create new recipe
app.get('/recipes/new', (request, response) => {
    //  read file to get the last id
    jsonfile.readFile(file, (err, obj) => {
        const recipeArray = obj["recipes"]

        let lastElement;
        let newLastElement;
        // check if theres any element of not
        if (recipeArray.length === 0) {
            newLastElement = 1;
        } else {
            lastElement = recipeArray[recipeArray.length - 1].id;

            newLastElement = lastElement + 1;
            console.log(newLastElement)
        }

        response.render('newRecipe', {lastId: newLastElement})

    })  // end of read file
});  // end of get new recipe


// get the inputs for new recipe
app.post('/recipes', (request, response) => {
    console.log(request.body);

    var changeToInt = parseInt(request.body.id);
    request.body.id = changeToInt;

    // add the new recipe to data json
    jsonfile.readFile(file, (err, obj) => {
        let recipeArray = obj["recipes"];

        recipeArray.push(request.body);

        jsonfile.writeFile(file, obj, (err) => {
            console.error(err);
            response.send(obj);

        }) // end of write file
    })  // end of read file
});  // end of post for creata new recipe


//  see single recipe
app.get('/recipes/:id', (request, response) => {
    const recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, obj) => {
        let recipeArray = obj["recipes"];

        for (let i = 0; i < recipeArray.length; i++) {
            if (recipeArray[i].id === recipeId) {
                // this is an object
                let indvRecipe = recipeArray[i];
                response.render('displayIndvRecipe', indvRecipe);
            }   //  put an else statement if no valid recipe
        }
    })  // end of read file
});  // end of get recipe id


//  display the form for editing a single recipe
app.get('/recipes/:id/edit', (request, response) => {
    const recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, obj) => {
        let recipeArray = obj["recipes"];

        for (let i = 0; i < recipeArray.length; i++) {
            if (recipeArray[i].id === recipeId) {
                let indvRecipe = recipeArray[i]

                response.render('editRecipe', indvRecipe);
            }
        }
    })  // end of readfile
});  // end of get - to display the form


//  update the recipe
app.put('/recipes/:id', (request, response) => {
    const recipeId = parseInt(request.params.id);
    const input = request.body;

    // read file to edit the specific recipe
    jsonfile.readFile(file, (err, obj) => {
        let recipeArray = obj["recipes"];

        for (let i = 0; i < recipeArray.length; i++) {
            if (recipeArray[i].id === recipeId) {
                let indvRecipe = recipeArray[i];

                indvRecipe.title = input.title;
                indvRecipe.ingredients = input.ingredients;
                indvRecipe.instructions = input.instructions;
                indvRecipe.img = input.img;

                let changedObj = obj;

                jsonfile.writeFile(file, changedObj, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        response.send("Done editing");
                    }

                })  // end writefile
            }  // end of check for recipe id
        }
    })  // end of readfile
});  // end of put - when editing


//  to delete
app.delete('/recipes/:id', (request, response) => {
    const recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, obj) => {
        let recipeArray = obj["recipes"];

        for (let i = 0; i < recipeArray.length; i++) {
            if (recipeArray[i].id === recipeId) {
                recipeArray.splice(recipeArray[i], 1);

                jsonfile.writeFile(file, obj, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        response.send("Deleted!")
                    }

                })  // end of write file
            }
        }
    })  // end of read file
})  // end of delete







///////////////////////////////
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));