var React = require('react');
var DefaultLayout = require('./layouts/default');

class AddForm extends React.Component {
	render() {
		let recipe = this.props.recipe;
		let editLink = "../recipes/"+this.props.recipe.id+"/edit";
		let deleteLink = "../recipes/"+this.props.recipe.id+"/delete";
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6">
						<img src={recipe.img} className="img-fluid" alt={recipe.title}/>
					</div>
					<div className="col-4 d-flex align-content-between flex-wrap">
						<div className="recipe-content">
							<h2>{recipe.id}. {recipe.title}</h2>
							<hr/>
							<p>Ingredients: {recipe.ingredients}</p>
							<p>Instructions: {recipe.instructions}</p>
						</div>
						<div className="buttons">
							<a href={editLink}><button className="edit-btn btn btn-primary">Edit</button></a>
							<a href={deleteLink}><button className="delete-btn btn btn-danger">Delete</button></a>
							<a href="/recipes"><button className="view-btn btn btn-dark">Back to home</button></a>
						</div>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = AddForm;