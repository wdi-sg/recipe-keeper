const React = require("react");
const Layout = require("./layout");

class Recipe extends React.Component {
  render() {
    const recipe = this.props;
    const ingredients = recipe.ingredients.split(",");
    const ingredientItem = ingredients.map(ingredient => {
      return <li>{ingredient}</li>;
    });
    const editPath = "/recipes/" + this.props.id + "/edit";
    const deletePath = "/recipes/" + this.props.id + "/delete";
    console.log(editPath);
    return (
      <Layout>
        <div className="container">
          <h1>{recipe.title}</h1>
          <div>
            <img src={recipe.image} style={{ width: "50%" }}></img>
          </div>
          <p>
            <strong>Ingredients: </strong>
            <ul>{ingredientItem}</ul>
          </p>
          <p>
            <strong>Instructions: </strong>
            {recipe.instructions}
          </p>
          <button className="btn btn-warning mr-1">
            <a className="text-light" href={editPath}>
              Edit
            </a>
          </button>
          <button className="btn btn-danger">
            <a className="text-light" href={deletePath}>
              Delete
            </a>
          </button>
        </div>
      </Layout>
    );
  }
}

module.exports = Recipe;
