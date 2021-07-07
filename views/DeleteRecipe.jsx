const React = require("react");
const Layout = require("./Layout");

class EditRecipe extends React.Component {
  render() {
    console.log("this.props!!!!!", this.props);
    const ingredients = this.props.recipe.ingredients.map(ingredient => (
      <li class="list-group-item">
        <input
          className="form-check-input"
          type="checkbox"
          value={JSON.stringify(ingredient)}
          name="recipeIngredients"
          checked
          disabled
        />
        {ingredient.amount} {ingredient.name}, {ingredient.notes}
      </li>
    ));

    let alert = "";
    if (this.props.missingIngredients) {
         alert = <div className="alert alert-warning" role="alert" >
                    Please select at least 1 ingredient!
                </div>;
    }

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-danger">🍽️ delete recipe</h1>
              {alert}
              <form
                method="POST"
                action={"/recipes/" + this.props.recipeId + "?_method=delete"}
              >
                <div className="form-group">
                  <label htmlFor="recipeTitle">title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="recipeTitle"
                    id="recipeTitle"
                    aria-describedby="recipeTitle"
                    placeholder="e.g. apple pie"
                    value={this.props.recipe.title}
                    disabled
                  />
                </div>
                <p>select ingredients:</p>
                <ul class="list-group list-group-flush">{ingredients}</ul>
                <div className="form-group">
                  <label htmlFor="recipeInstructions">instructions</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="recipeInstructions"
                    id="recipeInstructions"
                    aria-describedby="recipeInstructions"
                    placeholder="e.g. first, slice the apple ... "
                    value={this.props.recipe.instructions}
                    disabled
                  />
                </div>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = EditRecipe;
