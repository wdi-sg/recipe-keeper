const React = require("react");
const DisplayRecipes = require("./components/DisplayRecipes")


class Ingredients extends React.Component {
  render() {
    const {ingredientsArr, recipes} = this.props;
    return (
      <>
        <h1>List of ingredients</h1>
        <button><a href="/">Home</a></button>
        <ul>
          {ingredientsArr.map((data, i) => (
            <li key={i}>
              {data.name}
              <DisplayRecipes recipes={recipes} ingredient={data.name}/>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

module.exports = Ingredients;
