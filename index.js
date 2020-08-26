// JSON file
const jsonfile = require('jsonfile');
const file = 'data.json';

// Express
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Method Override
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// React Views
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


// Global Variables


// Routes
app.get('/recipes/', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj.recipes;
        res.send(recipes);
    })
})

app.get('/recipes/new', (req, res) => {
    res.render('form');
})

app.post('/recipes', (req, res) => {
    let submission = req.body;
    jsonfile.readFile(file, (err, obj) => {
        submission["id"] = obj["recipes"].length
        obj["recipes"].push(submission);
        jsonfile.writeFile(file, obj, (err) => {
        })
    })
    res.send("success!")
    console.log(submission);
})

app.get('/recipes/:id', (req, res) => {
    let id = parseInt(req.params.id);
    jsonfile.readFile(file, (err, obj) => {
        res.render('display', obj["recipes"][id]);
    });
})

app.get('/recipes/:id/edit', (req, res) => {
    let id = parseInt(req.params.id);
    jsonfile.readFile(file, (err, obj) => {
        res.render('edit', obj["recipes"][id]);
    //{... obj["recipes"][id], id: index}
    });
})

app.put('/recipes/:id', (req, res) => {
    let id = req.params.id
    jsonfile.readFile(file, (err, obj) => {
        obj["recipes"][id] = req.body;
        jsonfile.writeFile(file, obj, (err) => {
        })
        res.send("Update successful");
    });
})

app.delete('/recipes/:id', (req, res) => {
    let id = req.params.id
    jsonfile.readFile(file, (err, obj) => {
        let recipes = obj["recipes"];
        recipes.splice(id, 1);
        jsonfile.writeFile(file, obj, (err) => {
        })
        res.send("Update successful");
    });
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})