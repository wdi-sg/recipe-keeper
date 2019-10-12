const React = require("react");
const Layout = require("./Layout");

class AllRecipes extends React.Component {
  render() {
    console.log("this.props", this.props);
    const recipes = this.props.recipes.map(recipe => (
      <div>
        <h2>{recipe.title}</h2>
        <h4>Ingredients</h4>
        {recipe.ingredients.map(ingredient => (
          <ul>
            <li>{ingredient.name}</li>
            <li>{ingredient.amount}</li>
            <li>{ingredient.notes}</li>
          </ul>
        ))}
        <h4>Instructions</h4>
        <p>{recipe.instructions}</p>
        <hr />
      </div>
    ));

    return (
      <Layout>
        <h1>All Recipes</h1>
        {recipes}
      </Layout>
    );
  }
}

module.exports = AllRecipes;
