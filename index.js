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

// ========= Redirecting to Homepage =============ok

app.get('/', (request, response) =>{
    response.redirect('/recipes')
});

//=========== Requesting for Homepage =============ok

app.get('/recipes', (request, response) => {
    console.log("Creating delicious food");
    jsonfile.readFile(file, (err,obj) => {
        let recipes = obj.recipes;
        const data = {
            recipesList : recipes
        }
        console.log(data);
  response.render('home', data);
    })
});

//=========== Adding New Recipe ==============ok

app.get("/recipes/new", (request,response) => {
console.log("Creating new delicious recipe");
response.render("newRecipes");

});

app.post('/recipes', (request, response) => {
    console.log(request.body);
    //read the current file
    jsonfile.readFile(file, (err, obj) => {
         // push the new recipes array
        let recipeArray = obj.recipes;
        recipeArray.push(request.body);

            jsonfile.writeFile(file, obj, {spaces:2}, (err) => {
                if (err){
                console.log(err)
                } else {
                response.redirect('/recipes');
                }
        });
    })
});

//=========== Displaying Single Recipe based on ID ==============ok

app.get('/recipes/:id', (request,response) => {
    jsonfile.readFile(file, (err,obj) => {
            let id = request.params.id;
            let newRecipes = obj.recipes[id -1];
            response.render('showRecipes', newRecipes);
    })
});

//=========== Request Edit Page ============= ok

app.get('/recipes/:id/edit', (request,response) => {
    console.log(request.params.id);

    jsonfile.readFile(file, (err,obj) => {
        if (err){
            console.log("Error");
        } else {
            let inputId = parseInt(request.params.id - 1)
            let data = obj.recipes[inputId];
            console.log(data);
            response.render('editRecipes.jsx', data);
        }
    })

});


// ============= Updates Changes to Edit Recipe ===========

app.put("/recipes/:id", (request,response) => {
    console.log(request.body);

    var requestId = 4;
    var newRecipes = request.body;


    jsonfile.readFile(file, (err,obj) => {

        if (err) {
            console.log(err);
        }
            // let editRecipes = parseInt(request.params.id -1);
            // console.log("HAHAHA" + obj.recipes[editRecipes]);
            // obj.recipes[editRecipes] = newRecipes;
            // let inputId = parseInt(request.params.id - 1);
            obj.recipes[requestId-1] = newRecipes;

    jsonfile.writeFile(file, obj, (err)  => {
            if (err) {
                console.log("aw error");
                console.log(err);
                response.status(503).send("Not found");
            } else {
                response.redirect('/recipes/');

                    }

            });
    });
});


//=============== Deleting ================

app.get('/recipes/:id/delete', (request, response) => {

  jsonfile.readFile(file, (err, obj) => {
    if( err ){
      console.log("ERROR");
      console.log(err)
    }

    var inputId = request.params.id;
    var food = obj.recipes[parseInt(inputId)-1];

    var data = {
      recipeId : parseInt(inputId),
      recipeList : food
    }

    response.render('delete', data);
  });

});

app.delete('/recipes/:id', (request,response) => {
    let inputId = parseInt((request.params.id)-1);

    jsonfile.readFile(file, (err,obj) => {
        if (err) {
            console.log(err);
        };

        obj.recipes.splice(inputId, 1);

        jsonfile.writeFile(file, obj, (err) => {
            if (err) {
                console.log(err);
            };
            response.send("OH NO, A DELICIOUS RECIPE IS DELETED!");
        });

    });
});

//=====================================

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));