//Configuration lines

const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');
// Init express app
const app = express();
//static files
app.use(express.static(__dirname+'/public/')); //can also use - app.use(express.static('./public'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const methodOverride = require('method-override')

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');
//setup template engine
app.set('view engine', 'jsx');

//Controllers

//Redirecting to Recipes Page // Not working right now
app.get('/',(request, response)=>{
    response.redirect('/recipes');
    console.log("redirecting you");
});

//Listing All Recipes
app.get('/recipes', (request,response) => {
    jsonfile.readFile(file, (err,obj)=>{
        console.log("reading all the recipes!");
        response.render('homepage');
        // res.render('homepage',{recipes: obj});
        });
    });

app.get('/recipes/new', (request,response) => {
    // let newRecipe = request.body;

    jsonfile.readFile(file, (err,obj)=>{
        console.log("adding new recipes!");
        // jsonfile.writeFile(file, recipejson, (err)=>{
                response.render('NewRecipe');
         // });
    });

app.post('/recipes/new', (request,response) => {
    let newRecipe = request.body;

        jsonfile.writeFile(file, recipejson, (err)=>{
                response.render('NewRecipe');
                console.log("added new yummy recipe - thank you!");
         // });
    });




//listen to port
app.listen(3000, () => console.log("'~~~ Tuning in to the waves of port 3000 ~~~'"));