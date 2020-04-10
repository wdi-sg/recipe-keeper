const React = require("react");

class Editrecipe extends React.Component {
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
            <h1>Edit Recipe: {this.props.title}</h1>
            <a href="/">
              <button className="btn btn-success">Back to Home</button>
            </a>
          </div>
          <form method="POST" action={`/recipes/${this.props.id}?_method=put`}>
            <br />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.props.title}
            />
            <br />
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={this.props.ingredients}
            />
            <br />
            <input
              type="text"
              name="instructions"
              placeholder="Instructions"
              value={this.props.instructions}
            />
            <br />
            <input style={ {margin: "30px"} } className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Editrecipe;
