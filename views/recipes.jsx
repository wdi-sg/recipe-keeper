var React = require("react");

class Recipes extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>All Recipes</h1>
            <p>{this.props.addedRecipe}</p>
            <h3>{this.props.title}</h3>
            <p>{this.props.ingredients}</p>
            <p>{this.props.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Recipes;
