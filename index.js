console.log('In the beginning');
const jsonfile = require('jsonfile');

const FILE = 'data.json';

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

console.log('Engine goes vroom!');

app.get('/', (request, response) =>{
    response.send("Get good Daniel!!");
});

app.get('/recipes/', (request, response) =>{
    jsonfile.readFile(FILE, (err,obj) => {
        let recipe = obj.recipes;
        let data = {
            recipesKey : recipe
        };
        response.render('main', data);
    });
});

app.get('/recipes/:id/edit', (request, response) =>{
    jsonfile.readFile(FILE, (err, obj) => {
        let inputId = parseInt( request.params.id );
        let recipe;
        for( let i=0; i<obj.recipes.length; i++ ){
            let currentRecipes = obj.recipes[i];
            if( currentRecipes.id === inputId ){
                recipe = currentRecipes;
            }
        }

        if (recipe === undefined) {
            response.status(404);
            response.send("not found");
        } else {
            let data={
                recipesEdit: recipe
            };
            response.render('form', data);
        }
    });
});

app.post('/recipes/:id', function(request, response) {

    console.log("Edit attempted");
    var recipes = request.body;
    console.log( recipes );

  jsonfile.readFile(FILE, (err, obj) => {
    if( err ){
      console.log("error reading file");
      console.log(err)
    }

    recipes.id = parseInt(recipes.id);

    const index = obj.recipes.findIndex(recipes => recipes.id === request.body.id);
    obj.recipes[index] = request.body;

    jsonfile.writeFile(FILE, obj, (err) => {
      if( err ){
        console.log("error writing file");
        console.log(err)
        response.status(503).send("no!");
      }else{
        console.log( "send response");
        response.send(recipes);
      }

    });
  });

});


app.listen(3000, () => console.log('~~~ Local host love you 3000 ~~~'));