var React = require('react');

class Recipe extends React.Component {

  render(props){

  		const Edit = "/api/recipes/edit/"+this.props.id;
  		const Delete = "/api/recipes/delete/"+this.props.id;

    	return (
    		<React.Fragment>
    			<html>
    				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
	                <body>
	                	<nav className="navbar navbar-expand-lg navbar-light bg-light">
						  <a className="navbar-brand" href="http://localhost:3000/">RecipeMaker</a>
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
						  <div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav mr-auto">
						      <li className="nav-item active">
						        <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
						      </li>
						       <li className="nav-item active">
						        <a className="nav-link" href="http://localhost:3000/api/recipes/get/1">Recipe 1 <span className="sr-only">(current)</span></a>
						      </li>
						      <li className="nav-item active">
						        <a className="nav-link" href="http://localhost:3000/api/recipes/new">New <span className="sr-only">(current)</span></a>
						      </li>
						     <li className="nav-item active">
						        <a className="nav-link" href="http://localhost:3000/api/recipes/edit/4">Edit <span className="sr-only">(current)</span></a>
						      </li>
						    </ul>
						  </div>
						</nav>
	                  <div className="col-6 mx-auto">
	                  	<ul className="list-group">
						  <li className="list-group-item active">This is the recipe you wanted:</li>
						  <li className="list-group-item">ID: {this.props.id}</li>
						  <li className="list-group-item">Title: {this.props.title}</li>
						  <li className="list-group-item">Ingredients: {this.props.ingredients}</li>
						  <li className="list-group-item">Instructions: {this.props.instructions}</li>
						 <li className="list-group-item">
						 	<div className="form-inline">
								<form method="GET" className="mr-3" action={Edit}>
						            <button type="submit" className="btn btn-secondary">Edit this recipe</button>
						        </form>
						        <form method="GET" action={Delete}>
						            <button type="submit" className="btn btn-danger">Delete this recipe</button>
						        </form>
					      	</div>
					    </li>
						</ul>
			            </div>
	                </body>
	              </html>
	         </React.Fragment>
	    );
	}  
}

module.exports = Recipe;
