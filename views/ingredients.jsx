const React = require("react");
const Layout = require("./layout");

class Ingredients extends React.Component {
  render() {
    const ingredientEl = this.props.recipes.map(recipe => {
      const recipePath = "/recipes/" + recipe.id;
      return (
        <div>
          <a
            href={recipePath}
            className="d-block text-center"
            style={{ fontWeight: "bolder", color: "#FF8429" }}
          >
            {recipe.name}
          </a>
          <a
            href={recipePath}
            className="d-block text-center"
            style={{ fontWeight: "bolder", color: "#FF8429" }}
          >
            {recipe.nameTwo}
          </a>
          <a
            href={recipePath}
            className="d-block text-center"
            style={{ fontWeight: "bolder", color: "#FF8429" }}
          >
            {recipe.nameThree}
          </a>
        </div>
      );
    });

    return (
      <Layout>
        <div className="container">
          <h2 className="text-center">Ingredients</h2>
          {ingredientEl}
        </div>
      </Layout>
    );
  }
}

module.exports = Ingredients;
