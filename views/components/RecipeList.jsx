const React = require("react");

class RecipeList extends React.Component {
  render() {
    const {recipe} = this.props;
    return (
        <ul>
          <li>
            <a href={`/recipes/${recipe.id}`}>
              {recipe.title}
            </a>
            <span> - Last updated: {recipe.lastUpdated}</span>
          </li>
        </ul>
    );
  }
}

module.exports = RecipeList;
