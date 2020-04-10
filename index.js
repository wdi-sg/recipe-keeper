const jsonfile = require('jsonfile');

const file = 'recipes.json';

const express = require('express');

const app = express();

const methodOverride = require('method-override')

const reactEngine = require('express-react-views').createEngine();

///

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));

///

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

//////End of Boilerplate//////

app.get('/recipes', (req, res) => {
    let titles = [];
    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err)
        for (let el of obj.recipes){
            titles.push(el.title)
        }
        const data = {titles}
        res.render('index', data)
    })
})

app.post('/recipes', (req, res) => {
    console.log(req.body)
    jsonfile.readFile(file, (err, obj) => {
        if (err) console.error(err)
        obj.recipes.push(req.body);

        jsonfile.writeFile(file, obj, err => {
            if (err) console.error(err)
        })

        res.send("The recipe has been added!")
    })

})

app.get('/recipes/new', (req, res) => {
    res.render('newrecipe')
})

app.get('/recipes/:id', (req, res) =>{
    jsonfile.readFile(file, (err, obj) => {
        const data = obj.recipes[req.params.id]
        res.render('singlerecipe', data)
    })
})

////End of the Routes////

app.listen(3000, () => console.log('~~~ She said ive been to the port 3000 ~~~'));