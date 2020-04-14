const React = require('react');

class Show extends React.Component {
	render() {
		const recipe = this.props.recipe;
		const index = this.props.index;
		console.log(`index is ${index}`);
		const link = `/recipes/${this.props.index}?_method=delete`

		return (
			<div>
				<p>
					Recipe Title:<br/>
					{recipe.title}
					<br/><br/>
					Ingredients:<br/>
					{recipe.ingredients}
					<br/><br/>
					Instructions:<br/>
					{recipe.instructions}
				</p>
				<form action={link} method="post">
					<input type="hidden" name="id" value={index}/>
					<input type="submit" value="Delete this recipe"/>
				</form>	
			</div>

			)
	}
}

module.exports = Show;