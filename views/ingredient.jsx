var React = require('react');
var DefaultLayout = require('./layouts/default');
var RecipeThumbnail = require('./components/recipe-thumbnail');

class Ingredient extends React.Component {
	render() {
		let ingredientsList = this.props.recipes.map(recipe => {
			return (
				<RecipeThumbnail recipe={recipe}/>
			);
		});
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-12 d-flex align-content-between flex-wrap">
						<div className="ingredient-content w-100">
							<h2>{this.props.ingredient}</h2>
							<hr/>
							<div className="recipe-ingredients">
								<h5>List of recipes: </h5>
								<div className="row">
									{ingredientsList}
								</div>
							</div>
						</div>
						<div className="buttons">
							<a href="/ingredients/"><button className="view-btn btn btn-dark">List of Ingredients</button></a>
							<a href="/recipes/"><button className="view-btn btn btn-dark">Return to home</button></a>
						</div>
					</div>
				</div>
			</DefaultLayout>

		);
	}
}

module.exports = Ingredient;