const React = require('react');

class Update extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>Update</h1>
          <p>Updated: {this.props.recipe.title}</p>
          <p>Title: {this.props.recipe.title}</p>
          <p>Ingredients: {this.props.recipe.ingredients}</p>
          <p>Instructions: {this.props.recipe.instructions}</p>
        </body>
      </html>
    );
  }
}

module.exports = Update;