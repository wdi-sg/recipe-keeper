var React = require('react');
var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
	render() {
		let recipes = this.props.recipes.map(recipe => {
			let link = "../recipes/"+recipe.id;
			return (
				<li><a href={link}>{recipe.title}</a></li>
			);
		});
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-9">
						<ul>
						{recipes}
						</ul>
					</div>
					<div className="col-3">
						<a href="../recipes/new" className="btn btn-primary">Add new recipe</a>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Home;