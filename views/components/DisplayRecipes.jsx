const React = require("react");

class DisplayRecipes extends React.Component {
  render() {
    const {recipes, ingredient} = this.props;
    const titleArr = [];
    recipes.forEach(recipe => {
      if (recipe.ingredients.includes(ingredient)) titleArr.push(recipe.title);
    });
    return (
      <ul>
        {titleArr.length !== 0
          ? titleArr.map((title, i) => <li key={i}>{title}</li>)
          : ""}
      </ul>
    );
  }
}

module.exports = DisplayRecipes;
