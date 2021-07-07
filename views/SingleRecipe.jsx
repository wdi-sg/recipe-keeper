const React = require("react");
const Layout = require("./Layout");
const Recipe = require("./Recipe");

class SingleRecipe extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="m-2 d-flex flex-column align-items-center">
                <Recipe recipe={this.props.recipe} recipeId={this.props.recipeId}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="m-2 d-flex flex-row justify-content-center">
                <a class="btn btn-secondary m-2" href={"/recipes/" + this.props.recipeId + "/edit"} role="button">
                  Edit
                </a>
                <a class="btn btn-danger m-2" href={"/recipes/" + this.props.recipeId + "/delete"} role="button">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = SingleRecipe;
