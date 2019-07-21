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

//display all recipes
// app.get('/recipes', (request,response) => {
//     console.log('see all recipes');

//     const data = dataObj

//     }
//     response.render('show', data);
// })

//show form and create new recipe//
app.get('/recipes/new', (request,response) => {
    console.log('form to create a new recipe');

    response.render('create');
})

app.post('/recipes', (request,response) => {
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
    var recipeDisplay;

    for( let i=0; i<dataObj.recipes.length; i++ ){
    console.log(dataObj.recipes.length);
      let currentRecipe = dataObj.recipes[i];

      if( dataObj.recipes.indexOf(currentRecipe) === recipeId ){
        recipeDisplay = currentRecipe;
      }
    console.log(recipeDisplay);
    }

    if (recipeDisplay === undefined) {

      response.status(404);
      response.send("not found");
    } else {

      response.send(recipeDisplay);
    }
  });
});

//display and edit single recipe
app.get('/recipes/:id/edit', (request, response) => {
    console.log('showing existing pokemon info');

    jsonfile.readFile(FILE, (err, obj) => {
    if( err ){
      console.log("error reading file");
      console.log(err)
    }

    let inputId = parseInt( request.params.id );

    var pokemon;

    for( let i=0; i<obj.pokemon.length; i++ ){

        let currentPokemon = obj.pokemon[i];

        if( currentPokemon.id === inputId ){
            pokemon = currentPokemon;
        }
    }
      const data = pokemon;

    response.render('edit', data)
    });
});

app.put('/recipes/:id', (request, response) => {
    console.log('amending pokemon info');
    console.log(request.body);

    let id = parseInt(request.params.id);

    jsonfile.readFile(FILE, (err, obj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }

        let newPokemonInfo = request.body;
        newPokemonInfo.id = parseInt(newPokemonInfo.id);

        obj.pokemon[id-1] = newPokemonInfo;

        jsonfile.writeFile(FILE, obj, (err) => {
            console.log("write file done");
//display new info for pokemon created by user
            response.redirect("/recipes/"+id);
        });
    });
});

//delete a recipe
app.get('/recipes/:id/delete', (request, response) => {
    console.log('about to delete pokemon');

    response.render('delete');

});


//~~~~~~~~~~~~~~~~//

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));