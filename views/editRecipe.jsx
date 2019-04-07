const React = require("react");

class editRecipe extends React.Component {

	render() {
		const objectHolder = this.props;
		console.log("108");
		if ( objectHolder.object !== undefined) {
			const recipeObject = objectHolder.object;
			const id = recipeObject.id;
			const title = recipeObject["Recipe Title"];
			const ingredientsNameArray = Object.keys(recipeObject.Ingredients);
			const ingredientsQtyArray = Object.values(recipeObject.Ingredients);
			const ingredientsInputFields = [];

			for (i=0; i<=ingredientsNameArray.length-1; i++) {
				let ingredientName = `ingredient${i+1}`;
				let qtyName = `qty${i+1}`;

				ingredientsInputFields.push(
				<div>
				<p>Ingredient {i+1}: </p><input type="text" name={ingredientName} value={ingredientsNameArray[i]} />
				<p>Quantity: </p><input type="text" name={qtyName} value={ingredientsQtyArray[i]} />
				<br></br>
				<button type="button" id="removebutton">Remove ingredient</button>
				</div>
				);
			}

			const instructions = recipeObject.Instructions;
			const putPath = `/recipes/${id}?_method=PUT`;
			
			return (
				<html>
				<head>
				<script src="/editField.js"></script>
				</head>
				<body>
					<h1>Edit Recipe</h1>
					<form method="post" action={putPath}>
					<p>Recipe title: </p>
					<input type="text" name="Recipe Title" value={title} />
					<fieldset id="container">
					<legend>Ingredients</legend>
					<button type="button" id="button">Add ingredient</button>
					{ingredientsInputFields}
					</fieldset>
					<p>Instructions:</p>
					<textarea rows="5" columns="50" name="Instructions" value={instructions} />
					<br></br><input type="submit" value="Submit" />
					</form>
				</body>
				</html>
			);
		} else {
			// errorEditRequestHandler(objectHolder);
			const checkedKeysArray = objectHolder.keys;
			const checkedValuesArray = objectHolder.values;

			const id = objectHolder.id;
			const title = checkedValuesArray.shift();
			const instructions = checkedValuesArray.pop();

			const ingredientsNameArray = checkedKeysArray.splice(1,checkedKeysArray.length-2);
			const ingredientsQtyArray = checkedValuesArray;
			const ingredientsInputFields = [];

			for (i=0; i<=ingredientsNameArray.length-1; i++) {
				let ingredientName = `ingredient${i+1}`;
				let qtyName = `qty${i+1}`;

				ingredientsInputFields.push(
				<div>
				<p>Ingredient {i+1}: </p><input type="text" name={ingredientName} value={ingredientsNameArray[i]} />
				<p>Quantity: </p><input type="text" name={qtyName} value={ingredientsQtyArray[i]} />
				<br></br>
				<button type="button" id="removebutton">Remove ingredient</button>
				</div>
				);
			}
			
			const putPath = `/recipes/${id}?_method=PUT`;

			return (
				<html>
				<head>
				<script src="/editField.js"></script>
				</head>
				<body>
					<h1>Edit Recipe</h1>
					<form method="post" action={putPath}>
					<p>Recipe title: </p>
					<input type="text" name="Recipe Title" value={title} />
					<fieldset id="container">
					<legend>Ingredients</legend>
					<button type="button" id="button">Add ingredient</button>
					{ingredientsInputFields}
					</fieldset>
					<p>Instructions:</p>
					<textarea rows="5" columns="50" name="Instructions" value={instructions} />
					<br></br><input type="submit" value="Submit" />
					</form>
				</body>
				</html>
			);
		}
	}
}

module.exports = editRecipe;