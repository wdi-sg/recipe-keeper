const React = require("react");
const Layout = require("./Layout");

class NewIngredient extends React.Component {
  render() {
    // console.log("this.props!!!!",this.props);

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
                    placeholder="example: pizza"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeIngredients">ingredients</label>
                  <input
                    type="text"
                    className="form-control"
                    name="recipeIngredients"
                    id="recipeIngredients"
                    aria-describedby="recipeIngredients"
                    placeholder="*********"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeInstructions">instructions</label>
                  <input
                    type="text"
                    className="form-control"
                    name="recipeInstructions"
                    id="recipeInstructions"
                    aria-describedby="recipeInstructions"
                    placeholder="*********"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = NewIngredient;
