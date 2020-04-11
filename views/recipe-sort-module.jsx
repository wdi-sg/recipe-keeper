var React = require("react");

class SortRecipesMod extends React.Component {
  render() {
    const item = this.props.item;

    const ingred = item.ingred;

    const recipes = item.recipes;

    let arrHtml = recipes.map((element) => {
      let titleIdArr = element.split("-");
      let title = titleIdArr[0];
      let id = titleIdArr[1];
      return (
        <li>
          <a href={`/recipes/${id}`}>{title}</a>
        </li>
      );
    });

    return (
      <ul>
        <li>
          <b>{ingred}</b>
        </li>
        <ul>{arrHtml}</ul>
      </ul>
    );
  }
}

module.exports = SortRecipesMod;
