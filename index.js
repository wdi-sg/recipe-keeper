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

// json temp
// jsonfile.readFile(file, function(err, obj) {
//   console.dir(obj)
// })

// jsonfile.writeFile(file, obj, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     response.send();
// })

// jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
//     console.error(err)
// })


//see all recipes, link to home
app.get('/', (request, response) => {
    jsonfile.readFile(file, function(err, obj) {
        console.log(obj);
        response.render('home', obj);
    })
})

//create a recipe, get from layout nav, link to createForm
app.get('/recipes/new', (request, response) => {
    jsonfile.readFile(file, function(err, obj) {
        let nextId = obj.recipes.length+1;
        console.log("next id: "+nextId);
        response.render('createForm', obj);
    })
})

//receive create data form. get from createForm, link to home?
app.post('/recipes', (request, response) => {
    console.log("request body title "+request.body.title);

    jsonfile.readFile(file, function(err, obj) {
        let nextIndex = obj.recipes.length;
        let nextId = obj.recipes.length+1;

        obj.recipes[nextIndex] = {};
        obj.recipes[nextIndex].id = nextId;
        obj.recipes[nextIndex].title = request.body.title
        console.log(obj)
        response.render('home', obj);

        jsonfile.writeFile(file, obj, function (err) {
            if (err) {
                console.log(err);
            };
        })

    })

})

//get a single recipe by id,
app.get('/recipes/single', (request, response) => {
    let seeId = parseInt(request.query.search);
    console.log("seeId :"+seeId);

    jsonfile.readFile(file, function(err, obj) {
        let foundRecipe = obj.recipes.find(recipe =>{
            return recipe.id = seeId;

        })
        console.log(foundRecipe);
        response.send(foundRecipe);
    })

})





app.listen(3000);
console.log("listening to 3000")