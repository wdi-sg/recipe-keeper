var React = require('react');
var DefaultLayout = require('./layouts/default');
var RecipeThumbnail = require('./components/recipe-thumbnail');

class Home extends React.Component {
	render() {
		let recipes = this.props.recipes.map(recipe => {
			let dateAdded = new Date(recipe.dateAdded);
			let dateEdited = new Date(recipe.dateEdited);
			return (
				<RecipeThumbnail recipe={recipe} dateAdded={dateAdded} dateEdited={dateEdited}/>
			);
		});
		return (
			<DefaultLayout>
				<div className="row">
					<div className="order-1 order-md-0 col-12 col-md-9">
						<div className="row">
							{recipes}
						</div>
					</div>
					<div className="order-0 order-md-1 col-12 col-md-3 mb-3">
						<a href="../recipes/new" className="btn btn-primary mb-3">Add new recipe</a>
						<form>
							<div className="input-group">
								<select className="form-control"name="sortby">
									<option value="id">ID</option>
									<option value="title">Title</option>
									<option value="date">Date</option>
								</select>
								<div className="input-group-append">
									<button className="btn btn-dark">Sort by</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Home;