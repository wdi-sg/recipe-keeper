/*
==================================================
╔╗ ┌─┐┬┬  ┌─┐┬─┐┌─┐┬  ┌─┐┌┬┐┌─┐
╠╩╗│ │││  ├┤ ├┬┘├─┘│  ├─┤ │ ├┤
╚═╝└─┘┴┴─┘└─┘┴└─┴  ┴─┘┴ ┴ ┴ └─┘
==================================================
*/
console.log("running index.js");
const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
const getDate = () => {
    let date = new Date;
    let dateString = date.toDateString();
    return dateString;
};
/*
==================================================
╦  ┌─┐┌┐┌┌┬┐┬┌┐┌┌─┐
║  ├─┤│││ │││││││ ┬
╩═╝┴ ┴┘└┘─┴┘┴┘└┘└─┘
==================================================
*/
app.get('/',(req,res)=>{res.render('landing')});
/*
==================================================
╦┌┐┌┌┬┐┌─┐─┐ ┬
║│││ ││├┤ ┌┴┬┘
╩┘└┘─┴┘└─┘┴ └─
==================================================
*/
app.get('/recipes/',(req,res)=>{
    if (req.query.search !== undefined) {
        let searchTerm = req.query.search;
        jsonfile.readFile(file,(err,obj)=>{
            obj.recipes = obj.recipes.filter(recipe=>recipe.title.includes(searchTerm));
            res.render('home',obj);
            return;
        });
    };
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
        res.render('home',obj);
    });
});
/*
==================================================
╔╗╔┌─┐┬ ┬
║║║├┤ │││
╝╚╝└─┘└┴┘
==================================================
*/
app.get('/recipes/new',(req,res)=>{res.render('new')});
/*
==================================================
╔═╗┬─┐┌─┐┌─┐┌┬┐┌─┐
║  ├┬┘├┤ ├─┤ │ ├┤
╚═╝┴└─└─┘┴ ┴ ┴ └─┘
==================================================
*/
app.post('/recipes',(req,res)=>{
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
        req.body.date = getDate();
        req.body.id = parseInt(obj.recipes[obj.recipes.length-1].id) + 1;
// push new recipe to array in data.json
        obj.recipes.push(req.body);
        jsonfile.writeFile(file,obj,(err)=>{
            if (err) console.log(err);
        });
        res.render('home',obj);
    });
});
/*
==================================================
╔═╗┬ ┬┌─┐┬ ┬
╚═╗├─┤│ ││││
╚═╝┴ ┴└─┘└┴┘
==================================================
*/
app.get('/recipes/:id',(req,res)=>{
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
// using the :id, find the corresponding recipe
        let id = parseInt(req.params.id);
// rename data to be sent
        [selectedRecipe] = obj.recipes.filter(recipe=>recipe.id === id);
        res.render('show',selectedRecipe);
    });
});
/*
==================================================
╔═╗┌┬┐┬┌┬┐
║╣  │││ │
╚═╝─┴┘┴ ┴
==================================================
*/
app.get('/recipes/:id/edit',(req,res)=>{
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
// using the :id, find the corresponding recipe
        let id = parseInt(req.params.id);
// rename data to be sent
        [selectedRecipe] = obj.recipes.filter(recipe=>recipe.id === id);
        res.render('edit',selectedRecipe);
    });
});
/*
==================================================
╦ ╦┌─┐┌┬┐┌─┐┌┬┐┌─┐
║ ║├─┘ ││├─┤ │ ├┤
╚═╝┴  ─┴┘┴ ┴ ┴ └─┘
==================================================
*/
app.put('/recipes/:id',(req,res)=>{
// using the :id, find the corresponding recipe
    let id = parseInt(req.params.id);
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
// overwrite the current data with new data
        [selectedRecipe] = obj.recipes.filter(recipe=>recipe.id === id);
        selectedRecipe = req.body;
        jsonfile.writeFile(file,obj,(err)=>{
            if (err) console.log(err);
        });
        res.render('show',selectedRecipe);
    });
});
/*
==================================================
╔╦╗┌─┐┌─┐┌┬┐┬─┐┌─┐┬ ┬
 ║║├┤ └─┐ │ ├┬┘│ │└┬┘
═╩╝└─┘└─┘ ┴ ┴└─└─┘ ┴
==================================================
*/
app.delete('/recipes/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    jsonfile.readFile(file,(err,obj)=>{
        if (err) console.log(err);
// overwrite the current data with new data
        let index = obj.recipes.findIndex(recipe=>recipe.id === id);
        obj.recipes.splice(index,1);
        jsonfile.writeFile(file,obj,(err)=>{
            if (err) console.log(err);
        });
        res.render('home', obj);
    });
});
/*
==================================================
╔═╗┌─┐┬─┐┌┬┐
╠═╝│ │├┬┘ │
╩  └─┘┴└─ ┴
==================================================
*/
app.listen(3000,()=>console.log('OPENED PORT 3000'));