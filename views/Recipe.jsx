const React = require("react");

class Recipe extends React.Component {
  render() {
    let {title, ingredients, instructions} = this.props;
    ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];
    return (
      <>
        <h1>{title} recipe</h1>
        <h2>List of ingredients required:</h2>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <p>{instructions}</p>
      </>
    );
  }
}

module.exports = Recipe;
