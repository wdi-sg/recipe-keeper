const React = require("react");

class Recipe extends React.Component {
  render() {
    let {id, title, ingredients, instructions, lastUpdated} = this.props;
    ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];
    return (
      <>
        <h1>{title} recipe</h1>
        <h5>Last updated: {lastUpdated}</h5>
        <button><a href="/recipes">Return</a></button>
        <button><a href={`/recipes/${id}/edit`}>Edit recipe</a></button>
        <h2>List of ingredients required:</h2>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <p>{instructions}</p>
        <form action={`/recipes/${id}?_method=DELETE`} method="post">
          <button>Delete recipe</button>
        </form>
      </>
    );
  }
}

module.exports = Recipe;
