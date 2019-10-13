const React = require("react");
const Layout = require("./Layout");

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col m-2">
              <a
                href="/recipes"
                class="btn btn-primary btn-lg btn-block"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                <i class="far fa-folder-open mr-2"></i>
                all recipes
              </a>
              <a
                href="/recipes/new"
                class="btn btn-secondary btn-lg btn-block"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                <i class="fas fa-plus mr-2"></i>
                add recipe
              </a>
              <a
                href="/ingredients/new"
                class="btn btn-secondary btn-lg btn-block"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                <i class="fas fa-plus mr-2"></i>
                add ingredient
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
