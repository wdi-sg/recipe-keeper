console.log("HELLO RECIPE");

const jsonfile = require('jsonfile');

const FILE = 'data.json';

//TERMINAL: npm install express
const express = require('express');
const app = express();


app.use(express.static(__dirname+'/public/'));

//TERMINAL: npm install jsonfile
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//TERMINAL: npm install method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'));


const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

//==================================================================================================
//SET UP
//==================================================================================================


app.get('/' , (req, res) => {
    res.render('homePage')
});

//WORKING---------------------------------------------------------------

app.get('/recipes' , (req,res) => {
    // let sortMethod = request.query.sortby;
    // switch (sortMethod) {
    //     case 'title':
    //         jsonfile.readFile(FILE, (err,obj) => {
    //             console.log(err);
    //             let titles = obj.recipes.map(element => {
    //                 return titles["title"];
    //             })
    //             titles.sort((a, b)=> {
    //                         if (a < b) {
    //                           return -1;
    //                         }
    //                         if (a > b) {
    //                           return 1;
    //                         }
    //                       })
    //                       const data = {
    //                         titles:titles
    //                       };
    //         })
    
 
                {
        jsonfile.readFile(FILE, (err, obj) => {
          console.log(err);
          data={
            searched: obj.recipes
          }
        //   for (i=0; i<obj.recipes.length; i++){
        //     data.searched.push(obj.recipes[i].title);
        //   };
            res.render('allRecipes' , data);
        });
      }
    });

//WORKING---------------------------------------------------------------
app.get('/recipes/add', (req, res) => {
    res.render('addRecipe')
});
//WORKING---------------------------------------------------------------
app.get('/recipes/:id', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        let inputIndex = parseInt( req.params.id );
        let thisRecipe = obj.recipes[inputIndex];
        var data;
        // find recipe by index from the data.json file
        for( let i=0; i<obj.recipes.length; i++ ) {
            let foundRecipe = obj.recipes[i];
            if( foundRecipe === thisRecipe ){
                data = foundRecipe;
            }
        }
        if (data === undefined) {
            // send 404 back
            res.status(404);
            res.send("Recipe Not Found");
        } else {
            // console.log("turn up recipe page for===================");
            res.render ('eachRecipe', data);
    
        }
    });
});
//WORKING---------------------------------------------------------------
app.get('/recipes/:id/edit', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        let inputIndex = parseInt( req.params.id );
        let thisRecipe = obj.recipes[inputIndex];
        var data2;
        // find recipe by index from the data.json file
        for( let i=0; i<obj.recipes.length; i++ ) {
            let foundRecipe = obj.recipes[i];
            if( foundRecipe === thisRecipe ){
                data2 = foundRecipe;
            }
        }
        
        console.log("Data: " + data2);
        if (data2 === undefined) {
            // send 404 back
            res.status(404);
            res.send("not found");
        } else {
            console.log("turn up recipe page for: " + data2);
            res.render ('editrecipe', data2);
    
        }
    });
});
//WORKING---------------------------------------------------------------
 
app.post('/recipes', (req, res) => {
    console.log("New Recipe Added!" , req.body);
    jsonfile.readFile(FILE, (err,obj) => {
        console.log(err);
        obj.recipes.push(req.body);
        jsonfile.writeFile( FILE, obj, {spaces :2}, (err) => {
            console.error(err);
        });
    });
    res.send(req.body); 
});

//WORKING---------------------------------------------------------------
app.put('/recipes/:id', (req,res) => {
    console.log("Recipe Edited!" , req.body);
    let editID = parseInt( req.params.id );
    let editedRecipe = req.body
    jsonfile.readFile(FILE, (err,obj) => {
        console.log(err);
        obj.recipes.splice(editID, 1, editedRecipe);
        jsonfile.writeFile( FILE, obj, (err) => {
            console.error(err);
        });
    });
    res.send(req.body)
});
//WORKING---------------------------------------------------------------
app.get('/recipes/:id/delete', (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        let inputIndex = parseInt( req.params.id );
        let thisRecipe = obj.recipes[inputIndex];
        var data2;
        // find recipe by index from the data.json file
        for( let i=0; i<obj.recipes.length; i++ ) {
            let foundRecipe = obj.recipes[i];
            if( foundRecipe === thisRecipe ){
                data2 = foundRecipe;
            }
        }
        
        console.log("Data: " + data2);
        if (data2 === undefined) {
            // send 404 back
            res.status(404);
            res.send("not found");
        } else {
            console.log("turn up recipe page for: " + data2);
            res.render ('deleteRecipe', data2);
    
        }
    });
});
//WORKING---------------------------------------------------------------

app.delete('/recipes/:id', (req,res) => {
    console.log("Recipe Deleted!" , req.body);
    let editID = parseInt( req.params.id );
    jsonfile.readFile(FILE, (err,obj) => {
        console.log(err);
        obj.recipes.splice(editID, 1);
        jsonfile.writeFile( FILE, obj, (err) => {
            console.error(err);
        });
    });
    res.send(req.body)
});
//WORKING---------------------------------------------------------------








//==================================================================================================
//PORT 5000
//==================================================================================================
app.listen(5000, () => console.log('~~~ Tuning in to the waves of port 5000 ~~~'));