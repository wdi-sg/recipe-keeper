const React = require('react');

class Index extends React.Component {
	render() {
		const recipe_lst = this.props.recipe_lst;
		const all_recipes = recipe_lst.map(recipe => {
			return <li>{recipe.title}</li>
		})

		return(

		<div>
			<p>
				All Recipes:
				<ul>
					{all_recipes}
				</ul>
			</p>
		</div>

		)
	}
}

module.exports = Index;