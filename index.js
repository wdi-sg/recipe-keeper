const jsonfile = require("jsonfile");

const file = "data.json";

const express = require("express");

const app = express();

app.use(express.static(__dirname+"/public"));

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const reactEngine = require("express-react-views").createEngine();

app.engine("jsx", reactEngine);

app.set("views", __dirname + "/views");

app.set("view engine", "jsx");

app.get("/recipes/new", (request, response) => {
    response.render("form")
})

app.post("/recipes", (request, response) => {
    jsonfile.readFile("data.json", (err, obj) => {
        obj.recipes.push(request.body)
        jsonfile.writeFile("data.json", obj)
        response.render("home", obj)
    })
})

app.get("/recipes/:id", (request, response) => {
    jsonfile.readFile("data.json", (err, obj) => {
        let index = request.params.id;
        let showRecipe = {...obj.recipes[index], "id":index};
        response.render("view", showRecipe);
    })
})

app.get("/recipes/", (request, response) => {
    jsonfile.readFile("data.json", (err, obj) => {
        response.render("home", obj)
    })

})

app.get('/recipes/:id/edit', (request,response)=>{
    jsonfile.readFile('data.json',(err,obj)=>{
        let index = request.params.id;
        let data = {...obj.recipes[index], "id":index};
        response.render("edit",data)
    })
})

app.put("/recipes/:id", (request, response) => {
    jsonfile.readFile("data.json", (err, obj) => {
        let index = request.params.id;
        let updateRecipe = obj.recipes[index]
        updateRecipe.ingredients = request.body.ingredients;
        updateRecipe.instructions = request.body.instructions;
        jsonfile.writeFile("data.json", obj)
        let display = obj.recipes[request.params.id]
        response.render("view", display)
    })
})

app.delete("/recipes/:id", (request, response) => {
    jsonfile.readFile("data.json", (err, obj) => {
        let index = parseInt(request.params.id)
        obj.recipes.splice(index, 1)
        jsonfile.writeFile("data.json", obj)
        response.send("DELETED!");
    })
})

app.listen(3000, () => {
    console.log("3000 is working")
})