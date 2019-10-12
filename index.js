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
        if(err){
            console.log(err);
        }
            let id = request.params.id;
            let newRecipes = obj.recipes[id -1];
            response.send(newRecipes);
    })
});

//=========== Request Edit Page =============

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
    console.log("put!");
    console.log(request.body);

    let newRecipes = request.body;
    jsonfile.readFile(file, (err,obj) => {
        if (err) {
            console.log("errorrrrr");
            console.log(err);
            } else {
                let editedRecipes = parseInt(newRecipes.id - 1);
                console.log(editedRecipes);
                obj.recipes[editedRecipes] = newRecipes;
                jsonfile.writeFile(FILE,obj, (err) => {
                    if (err) {
                        console.log("aw error");
                        console.log(err);
                        response.status(503).send("Not found");
                    } else {
                        response.redirect('/recipes')
                    }
                });
            };
    });


})

//===============



app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));