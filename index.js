const jsonfile = require('jsonfile');
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const reactEngine = require('express-react-views').createEngine();
const moment = require('moment')

//JSON
const file = 'recipes.json';

//INIT
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));

//REACT ENGINE
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
//includes all directories
app.use(express.static("."));

// ******************************************
// ******************************************
//             BOILERPLATE END
// ******************************************
// ******************************************

app.get('/recipes/new', (request, response) => {
  //render new recipe form
  jsonfile.readFile(file, (err, obj)=>{

    const data = {
      recipes: obj.recipes
    }

    response.render('new', data)
  })
})

app.post('/recipes', (request, response) => {
  //get newRecipe from post request form
  const newRecipe = request.body

  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      return console.log(err)
    }
    newRecipe.created = "Created on " + moment().format('MMMM Do YYYY, h:mm:ss a')
    newRecipe.id = obj.recipes.length + 1

    //push recipe into json file
    obj.recipes.push(newRecipe)
    //retrieve pushed recipe's ID
    const newRecipeID = obj.recipes.length - 1
    //create data obj with the new item, for rendering success message
    const data = {
      recipes: obj.recipes,
      recipe: obj.recipes[newRecipeID],
      success: "Item added successfully!"
    }
    jsonfile.writeFile(file, obj, (err) => {
      if (err) {
        return console.log(err)
      }
      response.render('displayid', data)
      // response.send("Success!")
    })
    //END readFile
  })

  //END app.post
})

app.get('/recipes/:id', (request, response) => {
  //get id
  const id = request.params.id

  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      return console.log(err)
    }

    //get recipe object by id
    const requestedRecipe = obj.recipes[id]

    //store recipe object in data object
    const data = {
      //pass whole recipes array for navbar
      recipes: obj.recipes,
      //pass recipe for the requested ID
      recipe: requestedRecipe
    }

    //render display .jsx and pass recipe as data
    response.render('displayid', data)
    //END readFile
  })
  //END app.get
})

app.get('/recipes/:id/edit', (request, response) => {
  //get id
  const id = request.params.id

  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      return console.log(err)
    }
    //requestedObj content set to object in recipe book
    const requestedRecipe = obj.recipes[id]
    //create data object to pass to edit form
    const data = {
      recipes: obj.recipes,
      id: id,
      recipe: requestedRecipe
    }

    response.render('edit', data)
    //END readFile
  })
  //END app.get
})

app.put('/recipes/:id', (request, response) => {
  //get id
  const id = request.params.id
  //store submitted change 
  const editedRecipe = request.body

  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      return console.log(err)
    }

    //copy editedRecipe into recipe object
    Object.assign(obj.recipes[id], editedRecipe)
    //create data object for rendering success message
    const data = {
      recipes: obj.recipes,
      success: "Edited successfully!",
      recipe: editedRecipe
    }

    jsonfile.writeFile(file, obj, (err) => {
      if (err) {
        return console.log(err)
      }
      response.render('displayid', data)
    })
    //END readFile
  })
  //END app.put
})

app.get('/recipes/:id/delete', (request, response) => {
  //get id
  const id = request.params.id

  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      return console.log(err)
    }
    //requestedObj content set to object in recipe book
    const requestedRecipe = obj.recipes[id]
    //create data object to pass to delete form
    const data = {
      recipes: obj.recipes,
      id: id,
      recipe: requestedRecipe
    }

    response.render('delete', data)
    //END readFile
  })
  //END app.get
})

app.delete('/recipes/:id', (request, response) => {
  // get id
  const id = request.params.id

  jsonfile.readFile(file, (err, obj) => {
    if (err) {
      return console.log(err)
    }

    //remove Object at id
    obj.recipes.splice(id, 1)

    let newID = 1
    for (let recipe of obj.recipes){
      recipe.id = newID
      newID++
    }



    jsonfile.writeFile(file, obj, (err) => {
      if (err) {
        return console.log(err)
      }

      const data = {
        recipes: obj.recipes
      }

      response.render('home', data)
    })
    //END readFile
  })
  //END app.delete
})

app.get('/recipes', (request,response)=>{
  
  jsonfile.readFile(file, (err, obj)=>{
    const data = {
      recipes: obj.recipes
    }

    response.render('overview', data)
  })
})

app.get('/', (request, response)=>{

  jsonfile.readFile(file, (err, obj)=>{

    response.render('home', obj)
  })


})

app.listen(3000, () => console.log("Listening.....TO YOUR INPUT"))