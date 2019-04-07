//set up stuff

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


//code starts here

app.get('/recipes', (request,response) => {
    jsonfile.readFile(file, (err, obj) => {
        if (request.query.sortby == undefined) {
            response.render('home', obj);
        } else if (request.query.sortby == "name") {
            obj.recipes.sort(function(a, b) {
                return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
            });
            response.render('home', obj);
        } else if (request.query.sortby == "diet") {
            //sort by diet
            let vegetarianArr = [];
            let veganArr = [];
            let rawArr = [];

            // if (obj.recipes.diet == "vegetarian") {
            //     obj.recipes.forEach(function(recipe) {
            //         vegetarianArr.push(recipe);
            //     });
            // } else if (obj.recipes.diet == "vegan") {
            //     obj.recipes.forEach(function(recipe) {
            //         veganArr.push(recipe);
            //     });
            // } else if (obj.recipes.diet == "raw") {
            //     obj.recipes.forEach(function(recipe) {
            //         rawArr.push(recipe);
            //     });
            // }

            obj.recipes.forEach(function(recipe) {
                if (obj.recipes.diet == "vegetarian") {
                    vegetarianArr.push(recipe);
                } else if (obj.recipes.diet == "vegan") {
                        veganArr.push(recipe);
                } else if (obj.recipes.diet == "raw") {
                        rawArr.push(recipe);
                }
            });

            let dietArr = [];
            dietArr.push(vegetarianArr, veganArr, rawArr);
            // obj["dietRecipes"] = dietArr;

            response.render('home', {"dietRecipes": dietArr});

        } else if (request.query.sortby == "ingredient") {
            //sort by ingredient
        }
    });

});

app.get('/recipes/new', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        // let index = obj.recipes.length;
        response.render('add', obj);
    });
});

app.post('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        // let index = parseInt(request.params.index);
        let servingSize = parseInt(request.body.serving);
        request.body.serving = servingSize;
        let newId = parseInt(request.body.id);
        request.body.id = newId;
        obj.recipes.push(request.body);

        // save the request body
        jsonfile.writeFile(file, obj, (err) => {
            console.error(err)
            // now look inside your json file
            response.send(request.body);
        });
    });
})

app.get('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let index = parseInt(request.params.id) - 1;
        response.send(obj.recipes[index])
    });
})





/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3001, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));