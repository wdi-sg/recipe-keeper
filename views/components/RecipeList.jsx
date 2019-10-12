const React = require("react");

class RecipeList extends React.Component {
  render() {
    const {recipe} = this.props;
    console.log(recipe);
    return (
        <ul>
          <li>
            <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>
          </li>
        </ul>
    );
  }
}

module.exports = RecipeList;
