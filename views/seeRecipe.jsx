const React = require("react");

class SeeRecipe extends React.Component {

	render() {
		const recipeObject = this.props.object;
		const id = recipeObject.id;
		const title = recipeObject["Recipe Title"];
		const ingredientsArray = Object.keys(recipeObject.Ingredients);
		const ingredientsList = ingredientsArray.map(item => {
			return <li>{item}</li>;
		})
		const instructions = recipeObject.Instructions;

		const deletePath = `/recipes/${id}?_method=DELETE`;
		const editPath = `/recipes/${id}/edit`;

		return (
			<html>
			<head>
			</head>
			<body>
				<h1>View Recipe</h1>
				<p>Recipe ID: {id}</p>
				<p>Recipe title: {title}</p>
				<p>Ingredients: </p>
				<ul>{ingredientsList}</ul>
				<p>Instructions: <br></br>
				{instructions}</p>	
				<form method="get" action={editPath} >
					<input type="submit" value="Edit Recipe" />
				</form>			
				<form method="post" action={deletePath} >
					<input type="submit" value="Delete Recipe" />
				</form>
				<form method="get" action="/recipes" >
					<input type="submit" value="Cancel" />
				</form>
			</body>
			</html>
			);
	}
}

module.exports = SeeRecipe;