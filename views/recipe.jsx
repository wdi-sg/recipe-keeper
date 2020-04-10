const React = require("react");
const Layout = require("./layout");

class Recipe extends React.Component {
  render() {
    const recipe = this.props.recipe;
    const ingredients = this.props.ingredients;
    console.log(recipe);
    // const ingredientItem = ingredients.map(ingredient => {
    //   return <li>{ingredient.name}</li>;
    // });
    const editPath = "/recipes/" + recipe.id + "/edit";
    const deletePath = "/recipes/" + recipe.id + "/delete";
    return (
      <Layout>
        <div className="container">
          <h1>{recipe.title}</h1>
          <h6 style={{ color: "#FF8325", fontWeight: "lighter" }}>
            Date added: {recipe.date}
          </h6>
          <div>
            <img src={recipe.image} style={{ width: "50%" }}></img>
          </div>

          <div className="pt-3">
            <h4>Ingredients: </h4>
            <ul>
              <li>
                {ingredients.ingredient.amount} {ingredients.ingredient.name}
                <em> {ingredients.ingredient.notes}</em>
              </li>
              <li>
                {ingredients.ingredientTwo.amount}{" "}
                {ingredients.ingredientTwo.name}
                <em> {ingredients.ingredientTwo.notes}</em>
              </li>
              <li>
                {ingredients.ingredientThree.amount}{" "}
                {ingredients.ingredientThree.name}
                <em> {ingredients.ingredientThree.notes}</em>
              </li>
            </ul>

            <h4>Instructions: </h4>
            <p>
              {recipe.instructions.split("\n").map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>

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
