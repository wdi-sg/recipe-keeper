// Configurations
const express = require('express');
const jsonfile = require('jsonfile');
const file = 'ingredient.json';
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(__dirname+'/public/'));

//react syntax to run jsx
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// app.set("views", __dirname + "/views");

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// // ///////////// form to add new dish//////////
app.get('/cookbook/new', (request, response) => {
    response.render('form.jsx');
});

// /////////form to edit pokemon details, need to read jsonfile first///////////
app.get('/cookbook/:id/edit', (request, response) => {
    // console.log(request.params.id);
    response.send("yayy")

    // jsonfile.readFile(file, (err, obj) => {
    //     if( err ){
    //         console.log("it didnt work");
    //     } else {
    //         // minus 1 cos user wouldnt know array starts from 0
    //         //save the number as a variable
    //         let pokemonIndex = parseInt(request.params.id -1)
    //         // console.log(pokemonIndex);
    //         // access the object pokedex using the variable saved earlir on
    //         let data = obj.pokemon[pokemonIndex];
    //         console.log(data);
    //         // access the edit form and put in the object info as an arguement
    //         //data MUST BE AN OBJECT
    //         response.render('editForm.jsx', data);
    //     }
    // });
});

/////////a put request to edit the info of the pokedex/////
app.put("/pokemon/:id", (request, response) => {
    console.log("PUT works!");
    console.log(request.body);
    response.send(`<html>Details Edited!</html>`);
    // readjson file and add json file into the it

    let newPokemon = request.body;
        //read file
    jsonfile.readFile(file, (err, obj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }else{
            //var edited pokeindex is the current id number
            let editedPokeIndex = parseInt(newPokemon.id -1);
            console.log(editedPokeIndex);
            // replace/ assign the current array object with new object
            obj.pokemon[editedPokeIndex] = newPokemon;
            // write the new obj into pokedex.json
            jsonfile.writeFile(file, obj, (err) => {
                if( err ) {
                    console.log("error writing file");
                    console.log(err)
                    response.status(503).send("no!");
                } else {
                }
            });
        };
    });
});


///////////// add new dish into database////////////
app.post('/cookbook', (request, response) => {
    // console.log("post works!");
    // // console.log(request.body);
    response.send(`<html>Details Recorded!</html>`);
    // // readjson file and add json file into the it

    let newDish = request.body;
        //read file
    jsonfile.readFile(file, (err, obj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)

        }else{
            //make changes to obj here. which is the pokedex
            newDish.id = parseInt(newDish.id)
            obj.recipes.push(newDish);
            // write the new obj into pokedex.json
            jsonfile.writeFile(file, obj, (err) => {
                if( err ) {
                    console.log("error writing file");
                    console.log(err)
                    response.status(503).send("no!");
                } else {
                }
            });
        };
    });
});

app.get('/cookbook/', (request,response) => {
    jsonfile.readFile(file, (err, obj) => {
        if(err) {
            console.log('error reading file')
            console.log(err)
        } else {
            let ingredient = obj;
            response.render('indexPage.jsx', ingredient)
        }
    })
});

// redirect to cookbook
app.get('/', (request,response) => {
    response.redirect('/cookbook');
});


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
//