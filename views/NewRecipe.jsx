const React = require("react");
const Layout = require("./Layout");

class NewRecipe extends React.Component {
  render() {
    // console.log("this.props!!!!",this.props);

    console.log("this.props.ingredients*******", this.props.ingredients);

    const ingredients = this.props.ingredients.map(ingredient => (
      <li class="list-group-item">
        <input
          className="form-check-input"
          type="checkbox"
          value={JSON.stringify(ingredient)}
          name="recipeIngredients"
        />
        {ingredient.amount} {ingredient.name}, {ingredient.notes}
      </li>
    ));

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-primary">🍽️ add a new recipe</h1>
              <form method="POST" action="/recipes">
                <div className="form-group">
                  <label htmlFor="recipeTitle">title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="recipeTitle"
                    id="recipeTitle"
                    aria-describedby="recipeTitle"
                    placeholder="e.g. apple pie"
                  />
                </div>
                <p>select ingredients:</p>
                <ul class="list-group list-group-flush">
                    {ingredients}
                </ul>
                <div className="form-group">
                  <label htmlFor="recipeInstructions">instructions</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="recipeInstructions"
                    id="recipeInstructions"
                    aria-describedby="recipeInstructions"
                    placeholder="e.g. first, slice the apple ... "
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = NewRecipe;
