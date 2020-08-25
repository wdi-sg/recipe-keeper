const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true}));
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.get("/recipes", (request, response) => {
    jsonfile.readFile('data.json', (err, data) => {
        response.render('home');
    })
})
app.get("/recipes/show", (request, response) => {
    jsonfile.readFile('data.json', (err, data) => {
        response.send(data);
    })
})
app.get("/recipes/delete", (request, response) => {
    response.render('delete');
})
app.get("/recipes/new", (request, response) => {
    response.render('form');
})

jsonfile.readFile(file, (err, data) => {
    app.post("/recipes", (request, response) => {
            let submission = request.body;
            submission["id"] = data.recipes.length;
            data.recipes.push(submission);
            // data.recipes.push(request.body);
            jsonfile.writeFile(file, data, (err) => {})
            response.send("Success <br> <br> <a href='/recipes'>Home Page</a>")
    })

    app.get("/recipes/:id", (request, response) => {
        let index  = parseInt(request.params.id) - 1;
            response.render('display', data.recipes[index])
    })

    app.get("/recipes/:id/edit", (request, response) => {
        let index = parseInt(request.params.id);
        console.log(data)
        response.render('edit', data.recipes[index])
        // response.render('edit', {  ...data.recipes[index], id:index  })
    })

    app.put("/recipes/:id", (request, response) => {
        let index = parseInt(request.params.id);
        // take the request body and replace inside the data file then write the file
        data.recipes[index] = request.body;
        jsonfile.writeFile(file, data, (err)=> {});
        response.send("Update successfull <br> <br> <a href='/recipes'>Home Page</a>");
    })

    app.delete("/recipes" ,(request, response) => {
        let index = request.body.delete - 1;
        data.recipes.splice(index, 1);
        jsonfile.writeFile(file, data, (err) => {});
        response.send("Update successfull <br> <br> <a href='/recipes'>Home Page</a>");
    })

})

app.listen(3000,()=>{
    console.log("Tuning into port 3000.")
})


        // g= {a:"1",b:"2"}

        // h={

        //     ...g,
        //     id: "3"
        // }

        // h={
        //   a:"1",
        //   b:"2",
        //   name :"fhgdsfghs"
        // }