//Setting up
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
//End Of setting up
//*********
//Functions
//*********
const addRecipe = (request,response)=>{
    console.log("creating new recipe");
    jsonfile.readFile(file, (err, obj) => {
     if( err ){
       console.log("error with json read file:",err);
       response.status(503).send("error reading file");
       return;
      }
      const data = request.body;
        obj.recipes.push(data);
    jsonfile.writeFile(file , obj, (err) => {
      console.error(err);
    });
        console.log("Done reading");
        response.send("Success");
    });
}
//*******
//Routes
//*******
app.get('/recipes/new',(request,response)=>{
    response.render('createPage');
})
app.post('/recipes', addRecipe)
app.listen(3000, () => console.log("~~ Tuning in to port 3000 ~~"));