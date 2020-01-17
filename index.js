const jsonfile = require('jsonfile');

const file = 'ingredient.json';
const recipe = 'recipes.json';

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





app.get("/", (req, res)=>{
    console.log("HELLO IM WORKING");
        jsonfile.readFile(recipe, (err,obj)=>{
            const data = obj
            console.log(data)
            res.render('home',data);
    })

})

app.get("/recipe/new", (req, res)=>{
    console.log("HELLO IM WORKING");
        jsonfile.readFile(recipe, (err,obj)=>{
            const data = obj
            console.log(data)
            res.render('formCreate',data);
    })
})

app.post("/recipe/new", (req, res)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
            var data = {
                title:req.body.title,
                ingredients:req.body.ingredients,
                instructions:req.body.instructions,
                image:req.body.image
                }
            // console.log(data)

            obj.recipes.push(data);
        jsonfile.writeFile(recipe, obj, (err)=>{
                console.log(obj)
            })
        res.send(data);
    })
 })

app.listen(3000)