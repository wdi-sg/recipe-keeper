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



//=========================GET REQUESTS=================================

//====FORM FOR NEW RECIPE====
app.get('/recipes/new', (req, res) => {
    return res.render('form')
})

//====FORM FOR EDITING ONE RECIPE====
app.get('/recipes/:id/edit', (req, res) => {
    const query = parseInt(req.params.id);


    jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj.recipes;
        const result = recipesArr[query]
        const data = result;
        res.render("editrecipe", data);
    });

})

//====PAGE FOR ONE RECIPE, QUERY BY ID====
app.get('/recipes/:id', (req, res) => {

    const query = parseInt(req.params.id)

    jsonfile.readFile(file, (err, obj) => {
        const recipesArr = obj.recipes;
        const result = recipesArr[query]

        const data = result

        res.render('onerecipe', data)

    })

})

//====PAGE FOR ALL RECIPES=====

app.get("/recipes", (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;

        const data = {
            allRecipes: arr,
        };
        res.render("recipeslist", data);
    });
});


//=========================PUT/DELETE/POST REQUESTS=================================

//====PUT REQUEST TO EDIT ONE RECIPE====
app.put('/recipes/:id', (req, res) => {

    const query = parseInt(req.params.id)
    const a = req.body.title;
    const b = req.body.ingredients;
    const c = req.body.instructions;

    jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;

        const target = arr[query]
        target = req.body

        jsonfile.writeFile(file, obj, (err) => {
            err && console.log(`error is`, err);
            res.redirect(`/recipes/${targetId}`);
        });
    });

})

//====DELETE REQUEST TO DELETE ONE RECIPE====

app.delete('/recipes/:id', (req, res) => {

    const query = parseInt(req.params.id);

    jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;
        arr.splice(query, 1)

        jsonfile.writeFile(file, obj, (err) => {
            err && console.log(`error is`, err);
            res.redirect(`/recipes`);
        });
    });
})

//====POST REQUEST TO ADD ONE RECIPE=====

app.post("/recipes", (req, res) => {

    jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;

        const newRecipe = req.body

        newRecipe.created_on = today;

        arr.push(newRecipe);
        jsonfile.writeFile(file, obj, (err) => {
            err && console.log(`error is`, err);
            res.redirect(`/recipes/${arr.length-1}`);
        });
    });
});


//=============================ALL OTHER ROUTEs===============================
app.get("*", (req, res) => {


    jsonfile.readFile(file, (err, obj) => {
        const arr = obj.recipes;

        const data = {
            allRecipes: arr,
        };
        res.render("recipeslist", data);
    });

});