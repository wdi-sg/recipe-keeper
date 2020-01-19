const jsonfile = require('jsonfile');
const file = 'recipes.json'
const moment = require('moment')

module.exports.newRecipe = (request, response) => {
    jsonfile.readFile(file, (err, obj) => {

        const data = {
            recipes: obj.recipes
        }

        response.render('new', data)
    })
}

module.exports.saveNewRecipe = (request, response) => {
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
}

module.exports.showRecipe = (request, response) => {
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
}

module.exports.updateRecipe = (request, response) => {
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
}

module.exports.editRecipe = (request, response) => {
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
}

module.exports.deleteDisplay = (request, response) => {
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
}

module.exports.deleteRecipe = (request, response) => {
    // get id
    const id = request.params.id

    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            return console.log(err)
        }

        //remove Object at id
        obj.recipes.splice(id, 1)

        let newID = 1
        for (let recipe of obj.recipes) {
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
}

module.exports.showAll = (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        const data = {
            recipes: obj.recipes
        }

        response.render('overview', data)
    })
}

module.exports.home = (request, response) => {

    jsonfile.readFile(file, (err, obj) => {

        response.render('home', obj)
    })
}