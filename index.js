const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.put('/recipes/:id', (req, res) => {
    let newRecipe = req.body;
    let recipeId = parseInt(req.params.id);
    let newKeywords = newRecipe.keywords.split(",");
    let arrIndex = 0;
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            let keyArr = Object.keys(req.body);
            let recipe = obj["recipes"][recipeId];
            //console.log(recipe);
            //console.log(keyArr);
            keyArr.forEach((key) => {
                if(key !== "keywords") {
                    obj['recipes'][recipeId][key] = newRecipe[key];
                } else {
                    obj['recipes'][recipeId][key].length = 0;
                    obj['recipes'][recipeId][key] = [...newKeywords];
                }
            });
            for ( let i = 0; i < obj.recipes.length; i++ ) {
                if ( obj['recipes'][ i ].id === recipeId ) {
                    arrIndex = i;
                    break;
                }
            }
            obj.id = arrIndex;
            jsonfile.writeFile(file, obj, (err) => {
                //console.log("Updating Recipe id: " + arrIndex + ".......");
                //console.dir(obj['recipes'][recipeId]);
                res.redirect(`/recipes`);
            });
        }
    });
});

app.post('/recipes', (req, res) => {
    let newRecipe = req.body;
    let newKeywords = newRecipe.keywords.split(",");
    console.log(req.body);
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            newRecipe.id = obj.recipes[obj.recipes.length - 1].id + 1;
            newRecipe["keywords"] = [...newKeywords]

            obj.recipes.push(newRecipe);
            jsonfile.writeFile(file, obj, (err) => {

                //console.log("Creating new id: " + obj + ".......");
                //console.dir(obj['recipes']);
                res.redirect('/recipes/' + newRecipe.id);
            });
        }
    });
});

app.delete('/recipes/:id', (req, res) => {
    let recipeId = parseInt(req.params.id);
    //console.log("DELETE : " + recipeId);
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            obj["recipes"].splice(recipeId, 1);
            //console.log(obj);
            jsonfile.writeFile(file, obj, (err) => {
                if (err) {
                    console.log(`ERROR DETECTED : ${err}`);
                } else {
                    res.redirect('/recipes');
                }
            });
        }
    });

});

app.get('/recipes/search', (req, res) => {
    console.log(req.query.keywords);
    let searchWord = "";
    if (!req.query.keywords) {
        searchWord = "";
    } else {
        searchWord = req.query.keywords.toLowerCase();
    }
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            let newObj = {
                recipes : []
            }
            let = recipeArr = obj["recipes"];
            //console.log(recipeArr);
            recipeArr.forEach( (recipe, index) => {
                if (recipe.keywords.includes(searchWord)) {
                    newObj.recipes.push(recipe)
                }
                //console.dir(newObj);

            });
            res.render('search.jsx', newObj);
        }
    });

});

app.get('/recipes/new', (req, res) => {
    res.render('new.jsx');
});

app.get('/recipes/:id/edit', (req, res) => {
    let recipeId = parseInt(req.params.id);
    console.log("Get: " + recipeId + "/edit")
    console.log(recipeId);
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            for ( let i = 0; i < obj.recipes.length; i++ ) {
                if ( obj['recipes'][ i ].id === recipeId ) {
                    arrIndex = i;
                    break;
                }
            }
            obj.id = arrIndex;
            //console.log("Editing Recipe id: " + arrIndex + ".......");
            res.render('edit', obj);
        }
    });
});

app.get('/recipes/:id/delete', (req, res) => {
    let recipeId = parseInt(req.params.id);
    console.log("Get: " + recipeId + "/delete")
    console.log(recipeId);
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            for ( let i = 0; i < obj.recipes.length; i++ ) {
                if ( obj['recipes'][ i ].id === recipeId ) {
                    arrIndex = i;
                    break;
                }
            }
            obj.id = arrIndex;
            //console.log("Editing Recipe id: " + arrIndex + ".......");
            res.render('delete', obj);
        }
    });
});

app.get('/recipes/:id', (req, res) => {
    let recipeId = parseInt(req.params.id);
    let arrIndex = 0;
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            for ( let i = 0; i < obj.recipes.length; i++ ) {
                if ( obj['recipes'][ i ].id === recipeId ) {
                    arrIndex = i;
                    break;
                }
            }
            obj.id = arrIndex;
            //console.log("array index" + arrIndex);
            //console.log("Parsing id: " + req.params.id + ".......");
            //console.dir(obj['recipes']);
            res.render('recipe', obj);
        }
    });
});

app.get('/recipes', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        if (err) {
            console.log(err);
        } else {
            //console.log("Read JSON File success.............");
            res.render('home', obj);
        }
    });
});



app.listen(80, () => console.log('~~~ Tuning in to the waves of port 80 ~~~'));
