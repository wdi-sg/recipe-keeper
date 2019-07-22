const express = require('express');
const app = express();

const jsonfile = require('jsonfile');
const file = 'data.json';

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


const methodOverride = require('method-override')
app.use(methodOverride('_method'));

let recipeList = [];
let newRecipeList = [];

//display all recipe names with button
app.get('/recipes', (request,response) => {
    console.log('see all recipes');

    // jsonfile.readFile(file, (err, dataObj) => {

    // const data = {
    //     id :
    //   one : dataObj.recipes[0]
    // }
    // })

    response.render('show');
})

//show form and create new recipe//
app.get('/recipes/new', (request,response) => {
    console.log('form to create a new recipe');

    response.render('create');
})

app.post('/recipes/new', (request,response) => {
    console.log('creating new recipe');

    let newRecipe = request.body;
    jsonfile.readFile(file, (err, dataObj) => {
        if(err) {
            console.log('error', err);
        } else {
            console.log('recipe added');
            console.log(dataObj);
            console.log(newRecipe);

            dataObj.recipes.push(newRecipe);
            jsonfile.writeFile(file, dataObj, (err) => {
                console.log('recipe add ok');
            })
        }
    })
    response.send(newRecipe);
})

//display single recipe
app.get('/recipes/:id', (request, response) => {
    console.log('finding recipes');
  jsonfile.readFile(file, (err, dataObj) => {
    let recipeId = parseInt( request.params.id );
    console.log(recipeId);

    for( let i=0; i<dataObj.recipes.length; i++ ){
    console.log(dataObj.recipes.length);
      let currentRecipe = dataObj.recipes[i];

      if( dataObj.recipes.indexOf(currentRecipe) === recipeId ){
        const data = {
            id : recipeId,
            title : currentRecipe.title,
            ingredients : currentRecipe.ingredients,
            instructions : currentRecipe.instructions
        };
          response.render('onerecipe', data);
      }
    }

  });
});

//edit single recipe
app.get('/recipes/:id/edit', (request, response) => {
    console.log('showing existing recipe');

    jsonfile.readFile(file, (err, dataObj) => {
    let recipeId = parseInt( request.params.id );
    console.log(recipeId);

    for( let i=0; i<dataObj.recipes.length; i++ ){
    console.log(dataObj.recipes.length);
      let currentRecipe = dataObj.recipes[i];

      if( dataObj.recipes.indexOf(currentRecipe) === recipeId ){
        const data = {
            id : recipeId,
            title : currentRecipe.title,
            ingredients : currentRecipe.ingredients,
            instructions : currentRecipe.instructions
        };

    response.render('edit', data)
    }
}
});
});

app.put('/recipes/:id/edit', (request, response) => {
    console.log('amending recipe');
    console.log(request.body);

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, dataObj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }

        let newRecipe = request.body;
        newRecipe.id = parseInt(newRecipe.id);

        dataObj.recipes[recipeId] = newRecipe;

        jsonfile.writeFile(file, dataObj, (err) => {
            console.log("write file done");
//display new info for pokemon created by user
            response.redirect("/recipes/"+recipeId);
        });
    });
});

//delete a recipe
// app.get('/recipes/:id/delete', (request, response) => {
//     console.log('about to delete pokemon');

//     response.render('delete');

// });

app.delete("/recipes/:id/delete", (request, response) => {
    console.log('deleting the recipe');

    let recipeId = parseInt(request.params.id);

    jsonfile.readFile(file, (err, dataObj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }

        dataObj.recipes.splice(recipeId, 1);


        jsonfile.writeFile(file, dataObj, (err) => {
            console.log("write file done");

            response.render('show');
        });
    });
});
//~~~~~~~~~~~~~~~~//

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

/*
<h2>{this.props.title}</h2>
            <p>{this.props.ingredients}</p>
            <p>{this.props.instructions}</p>
*/