const express = require('express');
const app = express();

const jsonfile = require('jsonfile');
const file = './index.json';

const methodOverride = require('method-override');

//method override
app.use(methodOverride('_method'));

//static files
app.use(express.static(__dirname + '/public'));

//urlEncoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//react view engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')

//home
app.get('/', (req, res) =>{
    jsonfile.readFile(file, (err, obj)=>{
        res.render('home', obj);
    })
});

app.post('/recipes', (req, res) =>{
    let form = req.body;
    res.render('recipe', form);
});
app.put('/recipes', (req, res) =>{
    let form = req.body;
    res.render('recipe', form);
});

//SERVER ON PORT 3000
app.listen(3000, ()=>{console.log('PORT 3000 PORT 3000 PORT 3000')})

