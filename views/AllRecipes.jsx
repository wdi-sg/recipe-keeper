const React = require("react");
const Layout = require("./Layout");
const Recipe = require("./Recipe");

class AllRecipes extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column align-items-center">
                <h2>All Recipes</h2>
                {this.props.recipes.map(recipe => (
                  <Recipe recipe={recipe} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = AllRecipes;
