// Dependancy installed
// express
// jsonfile
// method-override
// express-react-views
// react
// react-dom
const jsonfile = require('jsonfile');
const file = 'ingredient.json';
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
app.set('views', __dirname);
app.set('view engine', 'jsx');

app.get("/add", (request, response) =>{
    //render a response template immediately

    let form = `<html>`+
    `<body>`+
        `<h1>Recipe to Add</h1>`+
        `<form method="POST" action="/">`+
        `Id:<input type="text" name="id"> </br></br>`+
        `Name: <input type="text" name="name"> </br></br>`+
        `Ingredient: <input type="text" name="ingredient"> </br></br>`+
        `Instruction: <input type="text" name="instruction"> </br></br>`+
        `<input type="submit" value="Submit">`+
        `</form>`+
        `</body>`+
    '</html>';
    response.send(form);
});

app.get("/all", (request, response) =>{
    jsonfile.readFile(file,function(err,obj){
        console.log(err);
        // response.render("You have reach the full view page");
        response.render('allreceipe.jsx', obj);
    })
})

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));