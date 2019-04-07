let React = require("react");

class editRecipe extends React.Component {
  render() {
    //render a form for the recipe

    let title = this.props.title;
    let instructions = this.props.instructions;
    let ingredientArray = this.props.ingredients;
    let numOfIngredients = this.props.ingredients.length;

    let ingredientsHTML = [];
    for (let i = 2; i < numOfIngredients + 2; i++) {
      //within the loop, we want the ingredient inputs to be populated
      //with values, but we don't want the last value to be populated
      const ingredient = ingredientArray[i - 2];
      //"name" is structured like so: ingredients[0], ingredients[1], ....
      const ingredientName = "ingredients[" + (i - 2).toString() + "]";
      ingredientsHTML.push(
          <input
            className="ingredient-input"
            type="text"
            name={ingredientName}
            value={ingredient}
          />
      );
    }

    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Page Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <form action="/recipe-created" method="post">
            <input type="text" name="title" value={title} />
            <div id="ingredients-list">{ingredientsHTML}</div>
            <button id="addIngredient">Add More Ingredients</button>
            <input type="text" name="instructions" value={instructions} />
            <button type="submit">Submit</button>
          </form>
          <script src="/create-recipe.js" />
        </body>
      </html>
    );
  }
}
module.exports = editRecipe;
