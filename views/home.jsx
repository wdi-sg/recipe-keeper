var React = require('react');
var DefaultLayout = require('./layouts/default');
var RecipeThumbnail = require('./components/recipe-thumbnail');

class Home extends React.Component {
	render() {
		let recipes = this.props.recipes.map(recipe => {
			return (
				<RecipeThumbnail recipe={recipe}/>
			);
		});
		return (
			<DefaultLayout>
				<div className="row">
					<div className="order-1 order-md-0 col-12 col-md-9">
						<div class="row">
							{recipes}
						</div>
					</div>
					<div className="order-0 order-md-1 col-12 col-md-3 mb-5">
						<a href="../recipes/new" className="btn btn-primary">Add new recipe</a>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Home;