
//SETTING STUFF UP...

const jsonfile = require("jsonfile");
const file = "data.json";
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const reactEngine = require("express-react-views").createEngine();
app.engine("jsx", reactEngine);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.listen(3000, () => console.log(`Server has started on port 3000.`))

const date = new Date();
const today = date.getDate() + "/" + (parseInt(date.getMonth())+1) + "/" + date.getFullYear()



//====new recipe====
app.get('/recipes/new', (req, res) => {
    return res.render('form')
})

//====editing one recipe====
app.get('/recipes/:id/edit', (req, res) => {
    const query = parseInt(req.params.id);


    jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj.recipes;
        const result = recipesArr[query]
        const data = result;
        res.render("edit", data);
    });

})


app.post('/recipes',(request,response) =>{
    console.log("added");
    //response.send("Successfully added recipe");
    jsonfile.readFile(file,(err,obj) =>{
        if(err){
        response.send(err);
        return;
    }
        const recipes = obj.recipes;
        recipes.push(request.body);
        //response.send(request.body);
        jsonfile.writeFile(file, obj, (err) => {
            //response.send("successful");
        const link ='/recipes/'+ recipes.length;
        response.redirect(link);
        })
    })
});
//INITIAL ROUTE
app.get('/', (request, response) => {
     response.redirect('/recipe/');
 })
//  DISPLAY ALL RECIPES

 //DISPLAY FORM FOR A NEW RECIPE
app.get('/recipe/new',(request,response) =>{
    response.render('add');
});
//DISPLAY INDIVIDUAL RECIPE
app.get('/recipe/:id', (request,response) =>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id);
        const data = {
                id: index,
                name: obj.recipes[index-1].name,
                ingredients: obj.recipes[index-1].ingredients,
                instructions: obj.recipes[index-1].instructions
            }
        response.render('show', data);
    })
    console.log("before entering edit");
});
//DISPLAY FORM FOR EDITING RECIPE
app.get('/recipes/:id/edit', (request, response) => {
     //read file
     jsonfile.readFile(file, (err, obj) => {
         const index = parseInt(request.params.id) - 1;
         const data = {
             id : index + 1,
             name: obj.recipes[index].name,
             ingredients: obj.recipes[index].ingredients,
             instructions: obj.recipes[index].instructions
         }
         response.render('edit', data);