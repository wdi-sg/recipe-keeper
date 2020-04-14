const express = require('express');
const jsonfile = require('jsonfile');

const file = 'data.json';

const reactEngine = require('express-react-views').createEngine();


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/**
* =================================
* Starting of routes
* =================================
*/

//Homepage
//===========
app.get('/recipes', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {

        let data = obj

        response.render('index', data);
    });
});

//Create new recipe
//=================
app.get('/recipes/new', (request, response) => {
    response.render('addRecipe')
});

//New Recipe
//==================
app.post('/recipes/newrecipes', (request,response) => {

    jsonfile.readFile(file, (err, obj) => {
        //console.log(request.body.title);

        data = {
            title: request.body.title,
            ingredients: request.body.ing,
            instructions: request.body.inst
        }
        obj.recipes.push(data);
        console.log(obj)

        jsonfile.writeFile(file, obj, (err) => {

            response.redirect('/recipes')
            console.log(err)
        });

    });
});


//Editing element
//================
app.get('/recipes/:title/edit', (request,response) => {

    jsonfile.readFile(file, (err, obj) => {

        const title = request.params.title

        let i=0;
        obj.recipes.forEach ((element,index) => {
            if(element.title == title){
                i = index;
            }
        })

        data = {
            title: obj.recipes[i].title,
            ing: obj.recipes[i].ingredients,
            inst: obj.recipes[i].instructions
        }
        response.render('edit',data)
    });
})

//Editing put elements
//====================

app.put('/recipes/:title', (request,response) => {
    console.log(request.body.title)
    console.log(request.body.ing)
    console.log(request.body.inst)
    console.log("HERE I AM")

    jsonfile.readFile(file, (err, obj) => {

        let i=0;
        obj.recipes.forEach ((element,index) => {
            if(element.title == request.params.title){
                i = index;
            }
        })

        obj.recipes[i].title = request.body.title;
        obj.recipes[i].ingredients = request.body.ing;
        obj.recipes[i].instructions = request.body.inst;

        jsonfile.writeFile(file, obj, (err) => {

            response.redirect('/recipes')
            console.log(err)
        });
    });
})

//Delete Recipe
//==============
app.get('/recipes/:title/delete', (request,response) => {
     jsonfile.readFile(file, (err, obj) => {

        const data = {
            name:obj.pokemon[index].name,
            id:obj.pokemon[index].id,
            num:obj.pokemon[index].num,
            img:obj.pokemon[index].img,
            height:obj.pokemon[index].height,
            weight:obj.pokemon[index].weight,
        }
        console.log(data)

        let html ='<form method="POST" action="/pokemon/'+index+'?_method=delete">'+
          '<div class="pokemon-attribute">'+

            'name: <input name="name" type="text" value="'+data.name+'"/>'+
          '</div>'+
          '<button type="submit">'+'</button>'+
        '</form>'
        ;

        response.send(html)
    });
});

//Delete Element
//=================
app.delete('/recipes/:title', (request,response) => {

    jsonfile.readFile(file, (err, obj) => {

        let i=0;
        obj.recipes.forEach ((element,index) => {
            if(element.title == request.params.title){
                i = index;
            }
        })
        //console.log(obj.recipes[i])
        obj.recipes.splice(i,1)

        jsonfile.writeFile(file, obj, (err) => {

            response.redirect('/recipes')
            console.log(err)
        });
    });
})

//Listing of the recipe
//=======================
app.get("/recipes/:title", (request, response) => {

    jsonfile.readFile(file, (err, obj) => {

        let i=0;
        obj.recipes.forEach ((element,index) => {
            if(element.title == request.params.title){
                i = index;
            }
        })

        data = {
            title: obj.recipes[i].title,
            ing: obj.recipes[i].ingredients,
            inst: obj.recipes[i].instructions
        }

        //console.log(data)
        response.render('recipe',data)
    });
});



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));