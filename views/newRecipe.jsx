const React = require("react");

const express = require('express');
const app = express();

class NewRecipe extends React.Component {

	render() {

		return (
			<html>
			<head>
			<script src="/addField.js"></script>
			</head>
			<body>
			<form method="post" action="/recipes" >
				<h1>Enter your new recipe</h1>
				<p>Recipe title: </p>
				<input type="text" name="Recipe Title" placeholder="Example: Boiled Chicken" target="_blank" />
				<br></br>
				<br></br>

				<fieldset id="container"><legend>Ingredients</legend>
					Ingredient: <input type="text" name="ingredient1" placeholder="water"/>
					&nbsp;Quantity: <input type="text" name="qty1" placeholder="10 ml" />&nbsp;
					<button type="button" id="button">Add another ingredient</button>
					<br></br>
				</fieldset>
				<br></br>

				<p>Instructions</p><textarea rows="5" cols="50" name="Instructions" placeholder="Example: Place chicken in water with salt. Simmer for 20 minutes."/>
				<br></br>
				<br></br>
				<input type="submit" value="Submit recipe" />
			</form>
			</body>
			</html>
			);
	}
}

module.exports = NewRecipe;