var React = require('react');
var DefaultLayout = require('./layouts/default');
var DeleteModal = require('./components/delete-modal');
class Recipe extends React.Component {
	render() {
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		let recipe = this.props.recipe;
		let editLink = "../recipes/"+this.props.recipe.id+"/edit";

		let ingredientsList = this.props.ingredients.map(ingredient => {
			let listing = `${ingredient.name} (${ingredient.amount})`;
			if (ingredient.notes !== "") listing+= ` – ${ingredient.notes}`;
			let ingredientLink = "/ingredients/"+ingredient.name.toLowerCase();
			return (
				<li><a href={ingredientLink}>{listing}</a></li>
			);
		});
		let dateAdded = this.props.dateAdded;
		let dateDisplay = "Created on "+dateAdded.getDate()+" "+months[(dateAdded.getMonth())]+" "+dateAdded.getFullYear();
		let dateEdited = this.props.dateEdited;
		if (dateEdited instanceof Date && !isNaN(dateEdited)) dateDisplay += ", Edited on "+dateEdited.getDate()+" "+months[(dateEdited.getMonth())]+" "+dateEdited.getFullYear();

		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-12 col-md-6">
						<img src={recipe.img} className="recipe-img img-fluid" alt={recipe.title}/>
						<div className="buttons">
							<a href={editLink}><button className="edit-btn btn btn-primary">Edit</button></a>
							<button type="button" className="btn btn-danger d-inline-block" data-toggle="modal" data-target="#deleteAlert">
								Delete
							</button>
							<a href="/recipes"><button className="view-btn btn btn-dark">Return to home</button></a>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="recipe-content w-100">
							<h2>{recipe.id}. {recipe.title}</h2>
							<hr/>
							<p><small>{dateDisplay}</small></p>
							<div className="recipe-ingredients">
								<h5>Ingredients: </h5>
								<ul className="list">
									{ingredientsList}
								</ul>
							</div>
							<div className="recipe-instructions">
								<h5>Instructions:</h5>
								<p>{recipe.instructions}</p>
							</div>
						</div>
					</div>
				</div>
				<DeleteModal modal="deleteAlert" recipe={recipe}/>
			</DefaultLayout>

		);
	}
}

module.exports = Recipe;