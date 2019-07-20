var React = require('react');
var DefaultLayout = require('./layouts/default');
var DeleteModal = require('./components/delete-modal');
class AddForm extends React.Component {
	render() {
		let recipe = this.props.recipe;
		let editLink = "../recipes/"+this.props.recipe.id+"/edit";
		let dateAdded = this.props.dateAdded;
		let dateDisplay = "Created on "+dateAdded.getDate()+"/"+(dateAdded.getMonth()+1)+"/"+dateAdded.getFullYear();
		let dateEdited = this.props.dateEdited;
		if (dateEdited instanceof Date && !isNaN(dateEdited)) dateDisplay += ", Edited on "+dateEdited.getDate()+"/"+(dateEdited.getMonth()+1)+"/"+dateEdited.getFullYear();
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-12 col-md-6">
						<img src={recipe.img} className="recipe-img img-fluid" alt={recipe.title}/>
					</div>
					<div className="col-12 col-md-4 d-flex align-content-between flex-wrap">
						<div className="recipe-content">
							<h2>{recipe.id}. {recipe.title}</h2>
							<hr/>
							<p><small>{dateDisplay}</small></p>
							<p>Ingredients: {recipe.ingredients}</p>
							<p>Instructions: {recipe.instructions}</p>
						</div>
						<div className="buttons">
							<a href={editLink}><button className="edit-btn btn btn-primary">Edit</button></a>
							<button type="button" className="btn btn-danger d-inline-block" data-toggle="modal" data-target="#deleteAlert">
								Delete
							</button>
							<a href="/recipes"><button className="view-btn btn btn-dark">Return to home</button></a>
						</div>
					</div>
				</div>
				<DeleteModal modal="deleteAlert" recipe={recipe}/>
			</DefaultLayout>

		);
	}
}

module.exports = AddForm;