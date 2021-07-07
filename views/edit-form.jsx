var React = require('react');
var DefaultLayout = require('./layouts/default');

class EditForm extends React.Component {
	render() {
		let recipe = this.props.recipe;
		let formLink = "/recipes/"+recipe.id+"?_method=PUT";
		let backLink = "/recipes/"+recipe.id;
		let ingredientList = "";
		this.props.recipe.ingredients.map((ingredient,index) => {
			ingredientList += `${ingredient.name}, ${ingredient.amount}`;
			if (ingredient.notes) ingredientList+= `, ${ingredient.notes}`;
			if (index !== this.props.recipe.ingredients.length-1) {
				ingredientList += '\r\n';
			}
		});
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-12">
						<form method="POST" action={formLink}>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Title</label>
								<div className="col-sm-10">
									<input name="title" className="form-control" value={recipe.title} required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Ingredients</label>
								<div className="col-sm-10">
									<textarea name="ingredients" className="form-control" value={ingredientList} required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Instructions</label>
								<div className="col-sm-10">
									<textarea name="instructions" className="form-control" value={recipe.instructions} required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Image Link</label>
								<div className="col-sm-10">
									<input name="img" className="form-control" value={recipe.img} required/>
								</div>
							</div>
							<div className="buttons text-center">
								<button type="submit" className="btn btn-primary">Submit</button>
								<a href={backLink}><button type="button" className="btn btn-dark">Return</button></a>
							</div>
						</form>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = EditForm;