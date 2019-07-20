const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+ '/public/'));

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

//==========************************=======================
                  
//==========************************=======================

app.get('/recipes/', (req, res)=> { //work
	console.log('getting started');
	
	  	jsonfile.readFile(file, (err, obj) => {
	    if( err ){
	      console.log(err);
	    } 
    	let data = {
    	 	
    	 	recipe: obj.recipes,

   		};	
   		
	   
		res.render('home', data);
	});

});
//=========**** Add new recipe ****===========


app.get('/recipes/new', (req, res)=> { //work
	console.log('getting started');
	
	
	res.render('newRecipe');
});

app.post('/recipes',(req, res) => {
	console.log("new recipe")
  	jsonfile.readFile(file,(err,obj)=> {
    	if(err){
      	console.log("There's an error")
    	}
	    obj.recipes.push(req.body);
	   	console.log(obj.recipes);

	    jsonfile.writeFile(file,obj,(err)=> {
	      	if(err) {
	      		console.log("error");
	      	}
	        
	      	res.send("New recipe added");
    	});
  	});
});




//===*****   Edit Recipe    *****===========

app.get('/recipes/:id/edit', (req, res)=> { 
	// console.log('is it correct?')
	  // console.log("ahahhhhhhh");
	let id = parseInt(req.params.id);
	console.log(id);
  	jsonfile.readFile(file, (err, obj) => {
	    if( err ){
	      console.log(err);
	    } 
    	let recipe = {
    	 	id : id,
    	 	recipe: obj.recipes[id]

   		};	
   		// console.log(recipe)
	    res.render('editRecipe', recipe);
	});
});


app.put('/recipes/:id', (req, res) => {//Worked!
  	console.log("WOW PUT");

  	let changedRecipe = req.body;
  	let id = parseInt(req.params.id);
  	// console.log(id);

  	jsonfile.readFile(file, (err, obj) => {
    	if( err ){
      		console.log(err);
    	}

    obj.recipes[parseInt(req.params.id)] = changedRecipe ;
    
    jsonfile.writeFile(file, obj, (err) => {
      	if( err ) {
	        console.log("error writing file");
	        res.status(503).send("no!");
      	} 	else {
        	console.log("~~~~~~~yay");
			
        	res.send("The recipe has been updated.");
      		}

    });
  });

});

//====***   	Show a recipe    *****==========


app.get('/recipes/:id', (req, res)=> { 
	// console.log('going to edit');
	let id = parseInt(req.params.id);
	
  	jsonfile.readFile(file, (err, obj) => {
  		// console.log("check");
	    
	    if( err ){
	      console.log(err);
	    } 
    	let data = {
    		id : id,
    		recipe: obj.recipes[id]
    	}
    	
	    res.render('singleRecipe', data);
	});
});



//======$$$$****   Delete recipe   ***&$$$$=============

app.get('/recipes/:id/delete', (req, res)=> { 
	// console.log('is it correct?')
	  // console.log("ahahhhhhhh");
	let id = parseInt(req.params.id);
	console.log(id);
  	jsonfile.readFile(file, (err, obj) => {
	    if( err ){
	      console.log(err);
	    } 
    	let recipe = {
    	 	id : id,
    	 	recipe: obj.recipes[id]

   		};	
   		// console.log(recipe)
	    res.render('deleteRecipe', recipe);
	});
});


app.delete('/recipes/:id', (req, res) => {//Worked!
  	console.log("WOW DELETE");

  	let id = parseInt(req.params.id);
  	// console.log(id);

  	jsonfile.readFile(file, (err, obj) => {
    	if( err ){
      		console.log(err);
    	}

    obj.recipes.splice([id],1);
    
    jsonfile.writeFile(file, obj, (err) => {
      	if( err ) {
	        console.log("error writing file");
	        res.status(503).send("no!");
      	} 	else {
        	console.log("~~~~~~~yay");
			
        	res.send("The recipe has been deleted.");
      		}

    });
  });

});


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

