var React = require('react');
var DefaultLayout = require('./layouts/default');
var RecipeThumbnail = require('./components/recipe-thumbnail');

class Home extends React.Component {
	render() {
		let recipes = this.props.recipes.map(recipe => {
			let dateAdded = new Date(recipe.dateAdded);
			return (
				<RecipeThumbnail recipe={recipe} dateAdded={dateAdded}/>
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
						<form>
							<div className="input-group">
								<select className="form-control" name="sortby">
									<option value="id">ID</option>
									<option value="title">Title</option>
									<option value="date">Date</option>
								</select>
								<div className="input-group-append">
									<button className="btn btn-dark">Sort by</button>
								</div>
							</div>
						</form>
						<a href="../recipes/new" className="btn btn-primary mt-3">Add new recipe</a>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Home;