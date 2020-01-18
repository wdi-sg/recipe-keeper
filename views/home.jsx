const React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const searchString = this.props.searchString;
    const recipe = recipes.map(recipe => {
      const recipePath = "/recipes/" + recipe.id;
      const ingredients = recipe.ingredients.split(",");
      const ingredientItem = ingredients.map(ingredient => {
        return <li>{ingredient}</li>;
      });
      return (
        <div className=" col-lg-6">
          <a href={recipePath}>
            <img
              className="card-img-top img-fluid"
              src={recipe.image}
              alt="Card image cap"
              style={{ maxHeight: "350px" }}
            />
          </a>
          <div className="card-body" style={{ padding: "10px 0" }}>
            <h5 className="card-title" style={{ textAlign: "center" }}>
              Get recipe:
              <a
                href={recipePath}
                style={{ color: "black", textDecoration: "underline" }}
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
          <h2 style={{ textAlign: "center" }}>{searchString}</h2>
          <div className="row d-flex justify-content-center">{recipe}</div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
