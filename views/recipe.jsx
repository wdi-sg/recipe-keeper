var React = require("react");

class Recipe extends React.Component {
  render() {
    //show recipe details
    let ingredientsList = this.props.ingredients.map(ingredient => {
      return (
        <li>
          {ingredient.amount} x {ingredient.name}
        </li>
      );
    });

    let recipeName = this.props.recipeName;

    let instructions = this.props.instructions.map(instruction => {
      return <li>{instruction}</li>;
    });

    return (
      <html>
        <body>
          <div>
            <h2>Dish: {recipeName}</h2>
            <h2>Ingredients:</h2>{" "}
            <p>
              <ul>{ingredientsList}</ul>
            </p>
            <h2>Instructions:</h2> <ol>{instructions}</ol>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Recipe;
