//basic bolierplate setup//
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
//basic boilerplate setup//

// CRUD //
app.post('/recipes', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
     	obj.recipes.push(request.body)
        jsonfile.writeFile(file, obj);
        let arrayOfTitles = [];
		for (i=0;i<obj.recipes.length;i++) {
			arrayOfTitles.push(obj.recipes[i].title);
		};
		let data = {titles: arrayOfTitles};
		response.render("index",data);
    });
});
// CRUD //

// Gets //
// - index - //
app.get("/recipes", (request,response)=>{
	jsonfile.readFile(file,(err,obj)=> {
		let arrayOfTitles = [];
		for (i=0;i<obj.recipes.length;i++) {
			arrayOfTitles.push(obj.recipes[i].title);
		};
		let data = {titles: arrayOfTitles};
		response.render("index",data);
	});
});
// - new - //
app.get("/recipes/new", (request,response)=>{
	response.render("new");
});
// - show - //
app.get("/recipes/:id", (request,response)=>{
	jsonfile.readFile(file,(err,obj)=> {
		let data = obj.recipes[parseInt(request.params.id)];
		response.render("show", data);
	});
});
// - edit - //
app.get("/recipes/:id/edit", (request,response)=>{
	response.render("edit", data);
});
// Gets //

//listening//
app.listen(3000,()=> console.log('listening'));
//listening//