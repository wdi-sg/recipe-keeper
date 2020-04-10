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
    	console.log("1"+obj);
     	obj.recipes.push(request.body);
     	console.log("2"+request.body);
        jsonfile.writeFile(file, obj);
        let arrayOfTitles = [];
		for (i=0;i<obj.recipes.length;i++) {
			arrayOfTitles.push(obj.recipes[i].title);
		};
		let data = {titles: arrayOfTitles};
		console.log("3"+data);
		response.render("index",data);
	});
});
app.put('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        obj.recipes[parseInt(request.params.id)] = request.body;
        let data = obj.recipes[parseInt(request.params.id)];
        jsonfile.writeFile(file, obj);
        response.render("show", data);
    });
});
app.delete('/recipes/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
     	obj.recipes.splice(parseInt(request.body.id),1);
        let data = obj.recipes[parseInt(request.params.id)];
        jsonfile.writeFile(file, obj);
        response.render("show", data);
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
	jsonfile.readFile(file,(err,obj)=> {
		let data = {id: request.params.id, recipe: obj.recipes[request.params.id]};
		response.render("edit",data);
	});
});
// - delete - //
app.get("/recipes/:id/delete", (request,response)=>{
	jsonfile.readFile(file,(err,obj)=> {
		let deleteId=request.params.id;
		let data = {id: deleteId, recipe: obj.recipes[parseInt(deleteId)]};
		response.render("delete",data);
	});
});
// Gets //

//listening//
app.listen(3000,()=> console.log('listening'));
//listening//