//INSTALLED:
//1. npm init
//2. npm install express
//3. npm install express-react-views react react-dom
//4. nom install -g nodemon
//5 npm install jsonfile
//6. npm install method-override

/////////////// INSTALL SET UP ///////////////////////

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

//////////////////////// SET UP COMPLETE ////////////////////////////

//////////////////// MAIN PAGE//////////////////


///////////////////////// TEST ROUTE ///////////////////////////////
app.get('/recipe/hello', (request, response) => {

    response.render('test');
    console.log("test route works!")
  }); //test CT


////////////////.ADD NEW RECIPE FUNCTION ////////////////////

// Render Add Recipe Form
app.get('/recipes/new', (request, response) => {
    response.render('newRecipe');
    console.log("New recipe form works!");
}); //new link CT

//Send response form information
app.post('/recipes', (request, response) => {

    jsonfile.readFile(file, (err,obj) => {

    if (err) {
            console.log('error reading file');
            console.log(err);
    } //if CT
    else {
        let recipesInput = request.body;
        console.log(recipesInput);
        obj.recipes.push(recipesInput);
    } // else CT
    jsonfile.writeFile(file, obj, (err) => {
        if( err ){
            console.log("error writing file");
            console.log(err)
            response.status(503).send("ERROR WRITING FILE")
        } // if CT
    }); //writefile CT
    }); //readfile CT
    console.log("send response");
    response.send("New recipe added!");
}); //addecipe post receipt CT









app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

/////////////////////////////// END OF ADD FUNCTION////////////////////////////////