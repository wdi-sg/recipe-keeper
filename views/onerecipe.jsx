const React = require("react");

class Onerecipe extends React.Component {
  render() {

    return (
      <html lang="en" dir="ltr">
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
        </head>

        <body style={{ textAlign: "center" }}>
          <div className="jumbotron">
            <h1>{this.props.title}</h1>
            <form
              style={{ margin: "10px" }}
              method="POST"
              action={`/recipes/${this.props.id}?_method=delete`}
            >
              <input name="id" type="hidden" value={this.props.id} />
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>

            <a href="/">
              <button style={{ margin: "10px" }} className="btn btn-success">
                Back to Home
              </button>
            </a>
          </div>
          <h3>Ingredients</h3>
          <p>{this.props.ingredients}</p>
          <h3>Instructions</h3>
          <p>{this.props.instructions}</p>
        </body>
      </html>
    );
  }
}

module.exports = Onerecipe;
