var React = require('react');

class IngredientThumbnail extends React.Component {
	render() {
		let ingredientLink = "/ingredients/"+this.props.ingredient.toLowerCase();
		return (
			<div className="col col-6 col-md-3">
				<a href={ingredientLink}>
					<div className="recipe-thumbnail card">
						<div className="card-header"><span className="ingredient-title">{this.props.ingredient}</span></div>
					</div>
				</a>
			</div>
		);
	}
}

module.exports = IngredientThumbnail;