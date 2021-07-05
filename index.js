const jsonfile = require('jsonfile');
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

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

const file = 'recipe.json';

app.get('/recipes/', (request, response) => {
    jsonfile.readFile(file, (err, dataObj)=>{
        const data = {
            recipes : dataObj.recipes
        };
        console.log(data);
        response.render('recipes', data)
    });
});

//display new form
app.get('/recipes/new', (request, response)=> {
    console.log('Get new recipe request into html input form');

    jsonfile.readFile(file, (err, obj)=>{
        if (err){
            console.log('Error reading input form: '+err)
        }

        let recipe= obj.recipes[obj.recipes.length - 1];
        const data = {
            index: parseInt(recipe.id) + 1
        };
        response.render('new', data)
    });
});

//save new recipe form data to json file
app.put('/recipes/new/:id', (request, response)=>{
    console.log("Save New Recipe");
    console.log( request.body);

    jsonfile.readFile(file, (err, dataObj)=>{
        dataObj.recipes.push(request.body)
        jsonfile.writeFile(file, dataObj, (err)=>{
            const data = {
                recipes : dataObj.recipes
            };
            response.render('recipes', data)

        });
    });
});


//edit form data to json file
app.put('/recipes/edit/:id', (request, response)=>{
    console.log("Edit Recipe");
    console.log( request.body);

    jsonfile.readFile(file, (err, dataObj)=>{
        recipeIndex = request.params.id;
        for (let i=0; i<dataObj.recipes.length; i++)
        {
            if (recipeIndex == dataObj.recipes[i].id)
            {
                dataObj.recipes[i] =request.body;
            }
        }

        jsonfile.writeFile(file, dataObj, (err)=>{
            jsonfile.readFile(file, (err, dataObj2)=>{
                let recipes = {
                    recipes : dataObj2.recipes
                };
                response.render('recipes', recipes)
            });
        });
    });
});

//display edit form
app.get('/recipes/:id/edit', (request, response)=>{

    jsonfile.readFile(file, (err, dataObj)=>{

        let recipeIndex = request.params.id;
        let recipe;
        for (let i=0; i<dataObj.recipes.length; i++)
        {
            if (recipeIndex == dataObj.recipes[i].id)
            {
                recipe = dataObj.recipes[i];
            }
        }

        const data = {
            index: recipeIndex,
            recipeData : recipe
        };

        console.log( data );
        response.render('edit', data)
    });
});

//display delete form
app.get('/recipes/:id/delete', (request, response)=>{

    jsonfile.readFile(file, (err, dataObj)=>{
        let recipeIndex = request.params.id;
        let recipe;
        for (let i=0; i<dataObj.recipes.length; i++)
        {
            if (recipeIndex == dataObj.recipes[i].id)
            {
                recipe = dataObj.recipes[i];
            }
        }

        const data = {
            index: recipeIndex,
            recipeData : recipe
        };

        console.log( data );
        response.render('delete', data)
    });
});


//delete recipe in json file
app.put('/recipes/delete/:id', (request, response)=>{

    jsonfile.readFile(file, (err, dataObj)=>{

        recipeIndex = request.params.id;
        for (let i=0; i<dataObj.recipes.length; i++)
        {
            if (recipeIndex == dataObj.recipes[i].id)
            {
                dataObj.recipes.splice(i,1);
            }
        }

        jsonfile.writeFile(file, dataObj, (err)=>{
            jsonfile.readFile(file, (err, dataObj3)=>{
                let recipes = {
                    recipes : dataObj3.recipes
                };
                response.render('recipes', recipes)
            });
        });
    });

});

//display detail form
app.get('/recipes/:id', (request, response)=>{

    jsonfile.readFile(file, (err, dataObj)=>{

        let recipeIndex = request.params.id;
        let recipe;
        for (let i=0; i<dataObj.recipes.length; i++)
        {
            if (recipeIndex == dataObj.recipes[i].id)
            {
                recipe = dataObj.recipes[i];
            }
        }

        const data = {
            index: recipeIndex,
            recipeData : recipe
        };

        console.log( data );
        response.render('detail', data)
    });
});


app.get('/', (request, response)=>{
console.log('Display all recipe');

    jsonfile.readFile(file, (err, obj)=>{
        if (err){
            console.log('Error reading input form: '+err)
        }

        // read data
        form = '<html><body><h1>recipe Details</h1>' +
                '<form method="get" action="/sortrecipe">'+
                '<select name="sortby">'+ //first-param >> Object.values(request.query)[0];
                    '<option value="name">Name</option>'+
                    '<option value="height">Height</option>'+
                    '<option value="weight">Weight</option>'+
                '</select>' +
                '<input type="submit" value="Submit">'+ // 2nd param
                '</form>';

        for (let i=0; i<10; i++) //obj.recipe.length
        {
            form += '<p>Num :' + obj.recipe[i].num +'</p>'+
                    '<p>Name :' + obj.recipe[i].name +'</p>'+
                    '<img src=' + obj.recipe[i].img +' />'+
                    '<p>Height :' + obj.recipe[i].height +'</p>'+
                    '<p>Weight :' + obj.recipe[i].weight +'</p>';
        }
        form += '</body></html>';
        response.send(form);
    });
});

app.get('/sortrecipe', (request, response)=>{
    let sortby = Object.values(request.query)[0];

    jsonfile.readFile(file, (err, obj)=>{
        if (err){
            console.log('Error reading input form: '+err)
        }
        let recipeList =  obj.recipe.sort( (a, b) => ( a[sortby] > b[sortby] ) ? 1 : -1 );

        // read data
        form = '<html><body><h1>recipe Details</h1>';
        for (let i=0; i<recipeList.length; i++)
        {
            form += '<img src=' + recipeList[i].img +' />'+
                    '<p>Num :' + recipeList[i].num +'</p>'+
                    '<p>Name :' + recipeList[i].name +'</p>'+
                    '<p>Height :' + recipeList[i].height +'</p>'+
                    '<p>Weight :' + recipeList[i].weight +'</p>';
        }
        form += '</body></html>';
        response.send(form);
    });
});