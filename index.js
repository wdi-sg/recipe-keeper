// boilerplate//


const jsonfile = require('jsonfile');

const file = require('./ingredient.json');

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

app.listen(3000, ()=> {console.log('listening...')});

var fs = require('fs');
console.log(file)


// app.get('/', (req, res)=>{
// 	res.send("hello");
// });

app.get('/', (req, res)=>{
	jsonfile.readFile(file, (err, obj)=>{
		res.send(file);
		
	});
});