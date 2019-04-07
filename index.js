const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');// so that we can use PUT and DELETE in express to submit changes via HTTP with the POST method in forms
const FILE = 'ingredient.json';


const app = express(); //Init the express app
app.use(express.json());//tell app to use the json modeul;
app.use(express.urlencoded({ //so that we can do request.body later
    extended: true
}));
app.use(methodOverride('_method'));//from using methodOverride above

//setting the layout look to my express project:
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
//this tells express where to look for the view files
app.set('views',__dirname + '/views');
//setting react to be the default view engine
app.set('view engine','jsx');

//*===========*/
//SET UP ingredient.json to have "recipes" as a property name; thereby turning json file into an object
//*===========*/

//testing out how the ingredient.json file looks like on the terminal

app.get('/test', (request, response) => {
    jsonfile.readFile(FILE, (err, obj) => {
        console.log("Begin reading file");
        let firstIngredientName= obj.recipes[0].name;
        let respond = '<div>'+firstIngredientName+'</div>'
        response.send(respond);
        // response.render('home', {respondKey: pokeList});
    });
});






//*=============*/
//ROUTES here
//============== */

app.get('/hello', (request, response) => {
    response.send('hello this is recipe-keeper');
});


//*===================================
//Listening to requests on port 3002
//*===================================

app.listen(3002, () => console.log('~~~ Tuning in to the waves of port 3002 ~~~'));