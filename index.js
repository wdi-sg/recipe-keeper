const jsonfile = require('jsonfile');

const file = 'ingredient.json';
const recipe = 'recipes.json';

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





app.get("/", (req, res)=>{
    console.log("HELLO IM WORKING");
        jsonfile.readFile(recipe, (err,obj)=>{
            const data = obj
            console.log(data)
            res.render('home',data);
    })

})

//------------ GETTing new form---------------
app.get("/recipe/new", (req, res)=>{
    console.log("HELLO IM WORKING");
        jsonfile.readFile(recipe, (err,obj)=>{
            const data = obj
            console.log(data)
            res.render('formCreate',data);
    })
})

//--------NEW FUNCTION POST---------------------
app.post("/recipe/new", (req, res)=>{
    jsonfile.readFile(recipe, (err,obj)=>{
            var data = {
                title:req.body.title,
                ingredients:req.body.ingredients,
                instructions:req.body.instructions,
                image:req.body.image
                }
            // console.log(data)
            const updatedata = obj
            obj.recipes.push(data);
        jsonfile.writeFile(recipe, obj, (err)=>{
                console.log(obj)
                res.render('home', updatedata )
            })
    })
 })

//----------GETTING EDIT PAGE WITH DETAILS--------------
app.get("/recipe/:id/edit", (req,res)=>{
    const index = parseInt(req.params.id);
    var data = {};
    jsonfile.readFile(recipe, (err,obj)=>{
        var object = obj.recipes
        for (var i = 0; i < object.length; i++) {

            if(i === index){

                var chosenObject = object[i];
                var data = {
                index:index,
                title: chosenObject.title,
                ingredients: chosenObject.ingredients,
                instructions: chosenObject.instructions,
                image: chosenObject.images
                }
            }
        }
            console.log(data)
            res.render('editform', data);
    })
})

//------------EDIT FUNCTION PUT---------------
app.put("/recipe/:id/edit", (req,res)=>{
    const index = parseInt(req.params.id)
      console.log(index);
      var recipechosen;
        jsonfile.readFile(recipe, (err,obj)=>{
         for( let i=0; i<obj.recipes.length; i++ ){
              if( i === index ){
                recipechosen = obj.recipes[i];
                }
            }
                recipechosen.title = req.body.title
                recipechosen.ingredients = req.body.ingredients
                recipechosen.instructions = req.body.instructions
                recipechosen.images = req.body.image
           const data = obj
        jsonfile.writeFile(recipe,obj,(err)=>{
            console.log(recipechosen)
            res.render('home', data )
        })
    })
})

//----------- DELETE FUNCTION DELETE --------------------
app.delete("/recipe/:id/delete", (req,res)=>{
    const index = parseInt(req.params.id)
      console.log(index);
      var recipechosen;
        jsonfile.readFile(recipe, (err,obj)=>{
        obj.recipes.splice(index, 1)

        const data = obj
        jsonfile.writeFile(recipe,obj,(err)=>{
            console.log(obj)
            res.render("home" , data);

        })
    })
})

//---------SEARCH FUNCTION-----------------------
app.post("/recipe/search", (req,res)=>{
    console.log("SEARCHHHHHHHHH BARRARARARARARARARA : " + req.body.search)

    var searched = req.body.search
    var searchdata = {
        recipes:[]
            }
        jsonfile.readFile(recipe, (err,obj)=>{
            for (var i = 0; i < obj.recipes.length; i++) {
                if(obj.recipes[i].title.includes(searched)){
                    console.log(obj.recipes[i].title.includes(searched));
                    var objects = obj.recipes[i]
                    searchdata.recipes.push(objects)
                     console.log("FOUNDDNNDNDNNDND SOME STUFFFFFFFFFFFFFFFF: " ,searchdata)
                }
            }
                res.render('home',searchdata)
        })
})


app.listen(3000)