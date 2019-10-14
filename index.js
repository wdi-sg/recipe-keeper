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

app.get("/recipes/create", (req, res) => {
    console.log("create in progress")
    res.render("create");
});

// ok seriously you must follow the words in order for it to work. request !== req. took an hour to figure that out
app.post("/recipes", (request, response) => {
    console.log("creating", request.body)
    const body = request.body;
    // body.id= parseInt(request.body.id);


    jsonfile.readFile(file, (err, obj) => {
        obj.recipes.push(body);

        response.send(obj.recipes);

        jsonfile.writeFile(file, obj, {space: 2}, (err) => {
            console.log("created")
        });
    });
});

app.get("/recipes/:id", (request, response) => {

    jsonfile.readFile(file, (err, obj) => {

        let inputId = parseInt(request.params.id);
        var recep;
        console.log(inputId)

        for(let i=0; i<obj.recipes.length; i++) {

            let recipe = obj.recipes[i];
            recipe.id = parseInt(recipe.id);

            if(recipe.id === inputId) {
                console.log(recipe)
                recep = recipe;

            }
        }

        if (recep === undefined) {

            response.status(404);
            response.send("Too disgusting to be found");
        }
        else {
            response.send(recep);
        }
    });
});


// app.get("/recipes/:id/edit", (request, response) => {

// })


app.get("/recipes/:id/delete", (request, response) => {
    var inputid= parseInt(request.params.id);
    var id= inputid - 1;
})

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));