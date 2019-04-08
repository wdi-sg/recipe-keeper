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
            response.render('home2', obj);
        } else if (request.query.sortby == "diet") {
            //sort by diet
            let vegetarianArr = [];
            let veganArr = [];
            let rawArr = [];
            let noneArr = [];

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
                } else if (obj.recipes.diet == "none") {
                        noneArr.push(recipe);
                }
            });

            let dietArr = [];
            dietArr.push(vegetarianArr, veganArr, rawArr, noneArr);
            // obj["dietRecipes"] = dietArr;

            response.render('home2', {"dietRecipes": dietArr});

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
        let newId = parseInt(request.body.id) + 1;
        request.body.id = newId;
        obj.recipes.push(request.body);

        jsonfile.writeFile(file, obj, (err) => {
            console.error(err)
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

app.get('/recipes/:id/edit', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let index = parseInt(request.params.id) -1;
        response.render('edit', obj.recipes[index]);
    });
})

app.put('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let index = parseInt(request.body.id) -1;

        obj.recipes[index].img = request.body.img;
        obj.recipes[index].id = parseInt(request.body.id);
        obj.recipes[index].title = request.body.title;
        obj.recipes[index].diet = request.body.diet;
        obj.recipes[index].description = request.body.description;
        obj.recipes[index].serving = parseInt(request.body.serving);
        obj.recipes[index].ingredients = request.body.ingredients;
        obj.recipes[index].instructions = request.body.instructions;

        response.send(obj.recipes[index])
    });
})

app.get('/recipes/:id/delete', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let index = parseInt(request.params.id) -1;
        response.render('delete', obj.recipes[index]);
    });
})

app.delete('/recipes', (request, response) => {
    // jsonfile.readFile(file, (err, obj) => {
    //     let index = parseInt(request.params.id) -1;

    // });
    jsonfile.readFile(file, (err, obj) => {
        let index = request.body.id - 1;
        console.log(index);
        obj.recipes.splice(index, 1);
        obj.recipes.forEach(function(recipe) {
            if (recipe.id > request.body.id) {
                recipe.id = recipe.id - 1;
            }
        });

      jsonfile.writeFile(file, obj, (err) => {

        console.error(err)

        // now look inside your json file
        response.send(obj.recipes);
      });
  });
})







/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));