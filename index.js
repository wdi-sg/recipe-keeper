const jsonfile = require('jsonfile');
const file = 'data.json';

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

//json temp
// jsonfile.readFile(file, function(err, obj) {
//   console.dir(obj)
// })

// jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
//   console.error(err)
// })


//see all recipes, link to home
app.get('/', (request, response) => {
    jsonfile.readFile(file, function(err, obj) {
        console.log(obj);
        response.render('home', obj);
    })
})








app.listen(3000);
console.log("listening to 3000")