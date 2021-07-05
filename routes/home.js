const express = require('express');
const router = express.Router();

const jsonfile = require('jsonfile');
const file = 'data.json';

router.get('/', (req, res) => {

	jsonfile.readFile(file, (err, obj) => {
        let recipes = {};
        recipes.list = [];
        for(let i = 0; i < obj.recipes.length; i++){
            recipes.list.push(obj.recipes[i]);
        }
    res.render('home', recipes);
		// var displayAll = ``;

  //       for( let i=0; i<obj.recipes.length; i++ ){

  //       let displayRecipe =
   //          `<div class="col-6 mx-auto mb-3">
	  //     	<ul class="list-group">
			//   <li class="list-group-item active">Title: ${obj.recipes[i].title}</li>
			//   <li class="list-group-item">Ingredients: ${obj.recipes[i].ingredients}</li>
			//   <li class="list-group-item">Instructions:${obj.recipes[i].instructions}</li>
		 //  		<li class="list-group-item">
		 //  			<div class="form-inline">
			// 			<form method="GET" class="mr-3" action="/api/recipes/edit/${obj.recipes[i].id}">
			// 	            <button type="submit" class="btn btn-secondary">Edit this recipe</button>
			// 	        </form>
			// 	        <form method="POST" action="/api/recipes/delete/${obj.recipes[i].id}?_method=delete">
			// 	            <button type="submit" class="btn btn-danger">Delete this recipe</button>
			// 	        </form>
			//         </div>
			//     </li>
			// </ul>
	  //       </div>`;

  //       displayAll = displayAll + displayRecipe;

		// }

		// console.log(displayAll);

		// res.send(
		// `<html>
		// 	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
	 //        <body>
	 //        	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		// 		  <a class="navbar-brand" href="">RecipeMaker</a>
		// 		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		// 		    <span class="navbar-toggler-icon"></span>
		// 		  </button>
		// 		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		// 		    <ul class="navbar-nav mr-auto">
		// 		      <li class="nav-item active">
		// 		        <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
		// 		      </li>
		// 		       <li class="nav-item active">
		// 		        <a class="nav-link" href="api/recipes/get/1">Recipe 1 <span class="sr-only">(current)</span></a>
		// 		      </li>
		// 		      <li class="nav-item active">
		// 		        <a class="nav-link" href="api/recipes/new">New <span class="sr-only">(current)</span></a>
		// 		      </li>
		// 		      <li class="nav-item active">
		// 				 <a class="nav-link" href="api/recipes/edit/4">Edit <span class="sr-only">(current)</span></a>
		// 			</li>
		// 		    </ul>
		// 		  </div>
		// 		</nav>
	 //          <div>
	 //            <h1>Here are the recipes available:</h1>
	 //            	${displayAll}
	 //            </div>
	 //        </body>
	 //      </html>`
		// );
	});
});

module.exports = router;