const React = require("react");
const Layout = require("./layout");

class Delete extends React.Component {
  render() {
    const recipe = this.props;
    const title = recipe.title;
    const index = recipe.id;
    const deletePath = "/recipes/" + index + "?_method=delete";
    return (
      <Layout>
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1>Really delete {title}?</h1>
          <form action={deletePath} method="POST">
            <input
              className="btn btn-danger"
              type="submit"
              value="Delete"
            ></input>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Delete;
