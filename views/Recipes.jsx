const React = require("react");
const RecipeList = require("./components/RecipeList");

class Recipes extends React.Component {
  render() {
    console.log(this.props);
    const {recipes} = this.props;
    return (
      <>
        <h1>List of recipes</h1>
        <button><a href="/">Home</a></button>
        <button><a href="/recipes/new">Add new recipe</a></button>
        {recipes.length !== 0 ? (
          <>
            {recipes.map((data, i) => (
              <RecipeList key={i} recipe={data} />
            ))}
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

module.exports = Recipes;
