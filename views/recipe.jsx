var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipe extends React.Component {

  render(props){

  		const Edit = "/api/recipes/edit/"+this.props.id;
  		const Delete = "/api/recipes/delete/"+this.props.id;

    	return (
            <DefaultLayout>
        		<React.Fragment>
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
    	         </React.Fragment>
             </DefaultLayout>
	    );
	}
}

module.exports = Recipe;