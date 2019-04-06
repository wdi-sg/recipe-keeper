const React = require("react");

const express = require('express');
const app = express();

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

		const path = `/recipes/${id}?_method=DELETE`;

		return (
			<html>
			<head>
			</head>
			<body>
				<h1>Delete this recipe?</h1>
				<p>Recipe ID: {id}</p>
				<p>Recipe title: {title}</p>
				<p>Ingredients: </p>
				<ul>{ingredientsList}</ul>
				<p>Instructions: <br></br>
				{instructions}</p>				
				<form method="post" action={path} >
					<input type="submit" value="Delete" />
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