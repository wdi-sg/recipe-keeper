const React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    const recipes = this.props.recipes.recipes;

    const recipe = recipes.map(recipe => {
      const recipePath = "recipes/" + recipe.id;
      const ingredients = recipe.ingredients.split(",");
      const ingredientItem = ingredients.map(ingredient => {
        return <li>{ingredient}</li>;
      });
      return (
        <div className=" col-lg-6">
          <img
            className="card-img-top"
            src={recipe.image}
            alt="Card image cap"
            style={{ maxHeight: "350px" }}
          />
          <div className="card-body" style={{ padding: "10px 0" }}>
            <h5 className="card-title">
              <a
                href={recipePath}
                style={{ textDecoration: "underline", color: "black" }}
              >
                {" "}
                {recipe.title}
              </a>
            </h5>
          
          </div>
        </div>
      );
    });
    return (
      <Layout>
        <div className="container">
          <h1
            className={"display-1"}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Recipe Keepr
          </h1>
          <div className="row">{recipe}</div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
